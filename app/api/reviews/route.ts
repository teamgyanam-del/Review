import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, role, rating, title, text, location } = body;

    // 1. Fundamental server-side validation guardrails
    if (!name || !email || !role || !rating || !title || !text) {
      return NextResponse.json(
        { error: "Missing required profile or review fields." },
        { status: 400 }
      );
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: "Rating integer parameter must fall strictly between 1 and 5." },
        { status: 400 }
      );
    }

    // 2. Persist safely to your relational data layer
    const newReview = await db.review.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        role: role.trim(),
        rating: Math.floor(rating),
        title: title.trim(),
        text: text.trim(),
        location: location ? location.trim() : "Noida",
        isVerified: false, // Set to false by default for administrative moderation workflow
      },
    });

    return NextResponse.json(
      { message: "Review registered successfully.", data: newReview },
      { status: 201 }
    );
  } catch (error) {
    console.error("CRITICAL_DATABASE_WRITE_ERROR:", error);
    return NextResponse.json(
      { error: "Internal server payload processing failed." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // 3. Fetch verified records for front-end rendering optimized for crawlers
    const verifiedReviews = await db.review.findMany({
      where: {
        isVerified: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(verifiedReviews, { status: 200 });
  } catch (error) {
    console.error("CRITICAL_DATABASE_READ_ERROR:", error);
    return NextResponse.json(
      { error: "Failed to fetch student testimonials." },
      { status: 500 }
    );
  }
}