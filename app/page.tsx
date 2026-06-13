"use client";

import { useState, useEffect, useRef } from "react";
import ReviewCard from "@/components/ReviewComponent";
import ReviewForm from "@/components/ReviewForm";
import { reviews } from "@/Data/reviews";
import {
  Star,
  ShieldCheck,
  TrendingUp,
  BookOpen,
  MapPin,
  Users,
  Award,
  Clock,
  ChevronDown,
  Zap,
  Heart,
  CheckCircle,
} from "lucide-react";

// ── JSON-LD Schemas ──────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  name: "Gyanam Education",
  url: "https://gyanam.net",
  logo: "https://gyanam.net/logo.png",
  image: "https://gyanam.net/og.png",
  description:
    "The best tutoring platform in Noida providing expert 1-on-1 coaching for JEE, NEET, CBSE, CUET, ICSE, and more. Serving all sectors of Noida and Delhi NCR.",
  telephone: "+91-XXXXXXXXXX",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Noida",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201301",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "28.5355",
    longitude: "77.3910",
  },
  openingHours: "Mo-Su 07:00-22:00",
  priceRange: "₹₹",
  sameAs: ["https://gyanam.net"],
  areaServed: [
    { "@type": "Place", name: "Noida Sector 15" },
    { "@type": "Place", name: "Noida Sector 18" },
    { "@type": "Place", name: "Noida Sector 30" },
    { "@type": "Place", name: "Noida Sector 44" },
    { "@type": "Place", name: "Noida Sector 50" },
    { "@type": "Place", name: "Noida Sector 62" },
    { "@type": "Place", name: "Noida Sector 76" },
    { "@type": "Place", name: "Greater Noida" },
    { "@type": "Place", name: "Noida Extension" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "2450",
    bestRating: "5",
    worstRating: "1",
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    datePublished: r.date,
    reviewBody: r.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating.toString(),
      bestRating: "5",
    },
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which is the best tutoring platform in Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Based on 2,450+ verified student reviews, Gyanam Education is widely recognized as the best tutoring platform in Noida. They offer verified expert tutors, personalized 1-on-1 learning, guaranteed 30-minute tutor matching, and a money-back guarantee covering JEE, NEET, CBSE, CUET, and all K-12 subjects across all Noida sectors.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can I find a home tutor in Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gyanam Education uses an advanced AI-powered matching system to pair you with a verified expert tutor within 30 minutes, anywhere in Noida and Delhi NCR. Simply submit your requirements and our system instantly cross-references your syllabus needs, location, and learning style.",
      },
    },
    {
      "@type": "Question",
      name: "Does Gyanam offer JEE coaching in Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Gyanam Education offers intensive 1-on-1 JEE Main and JEE Advanced coaching in Noida with IIT-alumni tutors. Our JEE preparation program includes personalized study plans, chapter-wise practice, full mock tests with detailed analysis, and doubt-solving support 24/7.",
      },
    },
    {
      "@type": "Question",
      name: "Is Gyanam good for NEET preparation in Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gyanam is one of the most trusted platforms for NEET preparation in Noida. Students consistently report significant score improvements after joining. Our NEET tutors are MBBS/MD professionals or candidates with top ranks, ensuring expert guidance in Biology, Physics, and Chemistry.",
      },
    },
    {
      "@type": "Question",
      name: "Are the student reviews on this site verified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every review on this platform is cross-verified against our active student enrollment database. We require email verification and cross-check names against our records to ensure no fake or incentivized reviews are published.",
      },
    },
    {
      "@type": "Question",
      name: "Does Gyanam provide home tutors in Greater Noida and Noida Extension?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Gyanam Education serves students across all of Noida, including Greater Noida and Noida Extension (Greater Noida West). Our tutor network is distributed across all major sectors to ensure fast, convenient matching for every student.",
      },
    },
    {
      "@type": "Question",
      name: "What is the money-back guarantee Gyanam offers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gyanam Education offers a full refund if you are not satisfied with the tutor assigned within the first two sessions. This risk-free guarantee reflects our confidence in our tutor quality and is one of the key reasons students choose Gyanam over traditional coaching centers in Noida.",
      },
    },
    {
      "@type": "Question",
      name: "How does Gyanam compare to coaching centers in Noida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unlike crowded coaching centers in Noida with batch sizes of 30-50 students, Gyanam provides strict 1-on-1 tutoring tailored to each student's pace and learning style. This results in an average 35% score improvement in the first academic quarter, far outperforming batch coaching outcomes.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Gyanam Education",
      item: "https://gyanam.net",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Student Reviews",
      item: "https://reviews.gyanam.net",
    },
  ],
};

// ── FAQ Data ─────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Why is Gyanam considered the best tutoring platform in Noida?",
    a: "Gyanam Education has fundamentally reimagined tutoring in Noida by combining AI-powered tutor matching with rigorous educator vetting. Every tutor on our platform has been screened through a multi-stage verification process involving academic credentials, a demo session, and peer review. Unlike coaching centers that prioritize batch efficiency, we provide exclusive 1-on-1 mentorship for every student. Our students consistently achieve 30–40% higher scores compared to batch coaching, and our 4.9/5 rating from 2,450+ verified reviews speaks for itself.",
  },
  {
    q: "How quickly can I get a verified home tutor in Noida?",
    a: "Gyanam guarantees tutor matching within 30 minutes. Once you submit your requirement—specifying your subject, location in Noida, exam target, and preferred session timings—our platform immediately surfaces the best-matched tutors. You can review their profiles, ratings, and demo session videos before confirming. No other home tutor platform in Noida offers this combination of speed and transparency.",
  },
  {
    q: "Does Gyanam offer coaching for both JEE and CBSE simultaneously?",
    a: "Absolutely. Many Class 11 and 12 students in Noida need to prepare for both their board exams (CBSE or ICSE) and competitive entrance exams (JEE/NEET) at the same time. Gyanam specializes in this dual-prep approach. Our tutors create integrated study plans that build on conceptual overlaps between board and entrance syllabuses, maximizing efficiency and reducing student burnout.",
  },
  {
    q: "Are the reviews on this platform authentic and unbiased?",
    a: "Yes, completely. Every review is cross-verified against our active student enrollment database. We require a valid email address and cross-check reviewer details against our records. Reviews are published without editorial changes. We do not offer incentives for positive reviews, and negative reviews are never removed unless they violate our basic content policy. This commitment to transparency is why students and parents trust our platform.",
  },
  {
    q: "Does Gyanam provide home tutors in Greater Noida and Noida Extension?",
    a: "Yes. Gyanam Education's tutor network spans the entire Noida region—from Sector 15 to Sector 137, Greater Noida, and Noida Extension (Greater Noida West). Students in newer sectors like 137 and Noida Extension, which often have fewer local tutoring options, particularly benefit from our platform. We can also arrange online sessions for maximum flexibility.",
  },
  {
    q: "What is Gyanam's money-back guarantee policy?",
    a: "Gyanam Education offers a full, no-questions-asked refund if you are not completely satisfied after the first two tutoring sessions. This risk-free policy reflects our confidence in our educator quality. We also offer a free tutor replacement at any time if you feel your current tutor isn't the right fit. This customer-first approach is unmatched in the Noida tutoring market.",
  },
  {
    q: "How does Gyanam differ from traditional coaching centers in Noida?",
    a: "Traditional coaching centers in Noida operate in batch models with 30 to 60 students per class, making personalized attention impossible. Gyanam flips this model entirely: every student gets an exclusive 1-on-1 tutor who adapts the curriculum, pace, and examples to their specific needs. Our data shows that Gyanam students improve their scores by an average of 35% in their first academic quarter—a result that batch coaching simply cannot replicate.",
  },
  {
    q: "Which competitive exams does Gyanam offer coaching for in Noida?",
    a: "Gyanam provides expert tutoring for a comprehensive range of competitive exams in Noida: JEE Main and Advanced, NEET UG and PG, CUET, IPMAT, CLAT, SSC CGL, SSC CHSL, and more. We also offer K-12 academic support for all boards (CBSE, ICSE, IB, and state boards), making Gyanam a true one-stop tutoring platform for every type of learner in the Noida and Delhi NCR region.",
  },
];

// ── Why Gyanam Features ───────────────────────────────────────────────────────
const features = [
  {
    icon: ShieldCheck,
    stat: "100%",
    label: "Verified Tutors",
    desc: "Every educator passes a rigorous multi-stage vetting: credential check, demo session, and peer review before joining the platform.",
  },
  {
    icon: Clock,
    stat: "30 min",
    label: "Guaranteed Matching",
    desc: "AI-powered matching pairs you with the perfect tutor in under 30 minutes—anywhere in Noida, 7 days a week.",
  },
  {
    icon: TrendingUp,
    stat: "35%",
    label: "Average Score Lift",
    desc: "Students see an average 35% improvement in their target exam score within the first academic quarter of 1-on-1 sessions.",
  },
  {
    icon: Users,
    stat: "2,450+",
    label: "Happy Students",
    desc: "A growing community of successful students and parents across Noida, Greater Noida, and the full Delhi NCR region.",
  },
  {
    icon: Heart,
    stat: "₹0",
    label: "Risk Guarantee",
    desc: "Not satisfied after two sessions? Full refund, no questions asked. We stand behind the quality of every tutor we assign.",
  },
  {
    icon: Zap,
    stat: "24/7",
    label: "Doubt Support",
    desc: "WhatsApp-based doubt resolution available around the clock—so no question is ever left unanswered before exam day.",
  },
];

const stats = [
  { value: 2450, suffix: "+", label: "Students Helped" },
  { value: 35, suffix: "%", label: "Avg Score Improvement" },
  { value: 500, suffix: "+", label: "Verified Tutors" },
  { value: 9, suffix: "+", label: "Noida Sectors Served" },
];

const FILTER_TABS = ["All", "JEE", "NEET", "CBSE", "CUET", "ICSE", "SSC"];

// ── FAQ Accordion Item ────────────────────────────────────────────────────────
function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const answerId = `faq-answer-${index}`;

  return (
    <div className={`faq-item${open ? " open" : ""}`}>
      <button
        className="faq-question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={answerId}
        id={`faq-btn-${index}`}
      >
        <span>{q}</span>
        <ChevronDown className="faq-chevron" style={{ width: "20px", height: "20px" }} />
      </button>
      <div
        id={answerId}
        className={`faq-answer${open ? " open" : ""}`}
        role="region"
        aria-labelledby={`faq-btn-${index}`}
      >
        <div className="faq-answer-inner">{a}</div>
      </div>
    </div>
  );
}

// ── Animated Counter ──────────────────────────────────────────────────────────
function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const start = performance.now();
          const step = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased =
              progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredReviews =
    activeFilter === "All"
      ? reviews
      : reviews.filter((r) => r.subject === activeFilter);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section
        className="section-hero"
        style={{
          padding: "96px 24px 80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient orbs */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-80px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative" }}>
          {/* Badge */}
          <div
            className="glass"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 20px",
              borderRadius: "99px",
              fontSize: "0.8rem",
              fontWeight: 700,
              color: "rgba(255,255,255,0.85)",
              marginBottom: "32px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            <ShieldCheck
              style={{ width: "15px", height: "15px", color: "var(--clr-accent)" }}
            />
            100% Verified Student & Parent Reviews
          </div>

          {/* H1 */}
          <h1
            style={{
              fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "24px",
            }}
          >
            The #1 Ranked Platform for{" "}
            <span
              className="gradient-text"
              style={{ display: "inline-block" }}
            >
              Best Tutoring in Noida
            </span>
          </h1>

          {/* Sub-copy */}
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "rgba(255,255,255,0.65)",
              maxWidth: "640px",
              margin: "0 auto 40px",
              lineHeight: 1.75,
              fontWeight: 500,
            }}
          >
            Don&apos;t just take our word for it. Discover why 2,450+ students and
            parents across Noida — from Sector 15 to Greater Noida — chose
            Gyanam over every coaching center to crack JEE, NEET, CBSE, and
            CUET.
          </p>

          {/* Rating widget */}
          <div
            className="glass"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "20px",
              padding: "20px 32px",
              borderRadius: "var(--radius-xl)",
              marginBottom: "40px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", gap: "4px" }}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  style={{ width: "24px", height: "24px" }}
                  className="fill-orange-500 text-orange-500"
                />
              ))}
            </div>
            <div
              style={{
                borderLeft: "1px solid rgba(255,255,255,0.15)",
                paddingLeft: "20px",
                textAlign: "left",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontWeight: 900,
                  fontSize: "2rem",
                  color: "white",
                  lineHeight: 1,
                }}
              >
                4.9 / 5
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                From 2,450+ verified reviews
              </span>
            </div>
          </div>

          {/* Trust indicators */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            {[
              { icon: ShieldCheck, text: "Verified Reviews" },
              { icon: MapPin, text: "All Noida Sectors" },
              { icon: TrendingUp, text: "35% Score Lift" },
              { icon: Award, text: "4.9★ Rated" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                <Icon
                  style={{ width: "14px", height: "14px", color: "var(--clr-accent)" }}
                />
                {text}
              </div>
            ))}
          </div>

          {/* Scroll CTA */}
          <div style={{ marginTop: "48px" }}>
            <a
              href="#reviews"
              className="btn-primary"
              style={{ fontSize: "1rem", padding: "16px 32px" }}
            >
              Read Reviews ↓
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. WHY GYANAM ────────────────────────────────────────────── */}
      <section className="section-dark" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Heading */}
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span
              className="badge badge-orange"
              style={{ marginBottom: "16px" }}
            >
              Why Choose Gyanam
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
                color: "white",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                marginTop: "12px",
              }}
            >
              Everything that makes us Noida&apos;s{" "}
              <span className="gradient-text">#1 Tutoring Choice</span>
            </h2>
          </div>

          {/* Feature grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {features.map(({ icon: Icon, stat, label, desc }) => (
              <div
                key={label}
                className="card-dark"
                style={{ padding: "28px 24px" }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "rgba(249,115,22,0.12)",
                    border: "1px solid rgba(249,115,22,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                  }}
                >
                  <Icon
                    style={{ width: "22px", height: "22px", color: "var(--clr-accent)" }}
                  />
                </div>
                <p
                  style={{
                    fontSize: "2rem",
                    fontWeight: 900,
                    color: "white",
                    lineHeight: 1,
                    marginBottom: "4px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {stat}
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 800,
                    color: "var(--clr-accent)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "10px",
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.7,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. ANIMATED STATS BANNER ─────────────────────────────────── */}
      <section
        style={{
          background: "var(--clr-accent)",
          padding: "56px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "32px",
            textAlign: "center",
          }}
        >
          {stats.map(({ value, suffix, label }) => (
            <div key={label}>
              <p
                className="stat-counter"
                style={{
                  fontSize: "3rem",
                  fontWeight: 900,
                  color: "white",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  marginBottom: "8px",
                }}
              >
                <AnimatedCounter value={value} suffix={suffix} />
              </p>
              <p
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.75)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. REVIEWS GRID ──────────────────────────────────────────── */}
      <section
        id="reviews"
        className="section-light"
        style={{ padding: "80px 24px" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* Heading */}
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span className="badge badge-orange" style={{ marginBottom: "16px" }}>
              Student Reviews
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
                color: "var(--clr-text)",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                marginTop: "12px",
                marginBottom: "16px",
              }}
            >
              Real Stories from Noida&apos;s Top Achievers
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--clr-text-muted)",
                maxWidth: "540px",
                margin: "0 auto",
                lineHeight: 1.65,
              }}
            >
              Discover why Gyanam is consistently ranked as the best tutoring
              platform in Noida by the students who matter most.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="filter-tabs" style={{ marginBottom: "40px" }}>
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                className={`filter-tab${activeFilter === tab ? " active" : ""}`}
                onClick={() => setActiveFilter(tab)}
                id={`filter-${tab.toLowerCase()}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filteredReviews.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                gap: "24px",
              }}
            >
              {filteredReviews.map((review) => (
                <ReviewCard key={review.id} {...review} />
              ))}
            </div>
          ) : (
            <p
              style={{
                textAlign: "center",
                color: "var(--clr-text-muted)",
                padding: "48px 0",
                fontSize: "1rem",
              }}
            >
              No reviews for this filter yet. Check back soon!
            </p>
          )}
        </div>
      </section>

      {/* ── 5. LONG-FORM SEO CONTENT ─────────────────────────────────── */}
      <section className="section-white" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <span className="badge badge-orange" style={{ marginBottom: "20px" }}>
            About Gyanam Education
          </span>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 900,
              color: "var(--clr-text)",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              marginBottom: "28px",
              marginTop: "12px",
            }}
          >
            Why Gyanam is the Best Tutoring Platform in Noida
          </h2>

          {[
            {
              heading: "Personalized 1-on-1 Learning vs. Batch Coaching",
              body: `For years, students in Noida have been funnelled into large coaching centers where a single teacher addresses 40 to 60 students at once. In this model, personalized attention is a myth. Gyanam Education was built to fix this. Every student on our platform is matched with a dedicated tutor who designs a completely personalized study plan based on that student's current level, learning pace, target exam, and preferred teaching style. The result is measurably better outcomes: our students report an average 35% improvement in their scores within the first academic quarter.`,
            },
            {
              heading: "Serving Every Corner of Noida and Delhi NCR",
              body: `Gyanam Education's tutor network spans the entire Noida region—Sector 15, Sector 18, Sector 27, Sector 30, Sector 44, Sector 50, Sector 62, Sector 76, Sector 137, Greater Noida, and Noida Extension (Greater Noida West). Students in newer, rapidly growing sectors often find it difficult to access quality tutors through traditional means. Gyanam bridges this gap with a verified, on-demand tutor network that can be accessed within 30 minutes. For students who prefer online sessions, our platform supports seamless video tutoring so geographical distance is never a barrier.`,
            },
            {
              heading: "Comprehensive Exam Coverage: JEE, NEET, CBSE, CUET & More",
              body: `Gyanam's expert tutors cover the full spectrum of academic need in Noida: JEE Main and Advanced preparation with IIT-alumni mentors, NEET UG and PG coaching with MBBS-qualified faculty, CBSE and ICSE board support for Classes 6 through 12, CUET preparation for central university admissions, SSC and government exam coaching, and international board (IB) support. Whether you are a Class 8 student building foundational skills or a NEET PG aspirant juggling a hospital internship, Gyanam has a verified expert tutor ready for you.`,
            },
            {
              heading: "The Gyanam Guarantee",
              body: `We are so confident in the quality of our tutors that we offer a zero-risk guarantee: if you are not satisfied after the first two sessions, you receive a full refund—no questions asked. You can also request a tutor replacement at any point in your journey at zero cost. This commitment to customer satisfaction is why Gyanam Education holds a 4.9/5 rating from over 2,450 verified student and parent reviews, making it the highest-rated home tutor platform in Noida.`,
            },
          ].map(({ heading, body }) => (
            <div key={heading} style={{ marginBottom: "32px" }}>
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 800,
                  color: "var(--clr-text)",
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <CheckCircle
                  style={{
                    width: "18px",
                    height: "18px",
                    color: "var(--clr-accent)",
                    flexShrink: 0,
                  }}
                />
                {heading}
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--clr-text-muted)",
                  lineHeight: 1.8,
                  paddingLeft: "26px",
                }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. REVIEW FORM ───────────────────────────────────────────── */}
      <section
        id="write-review"
        className="section-dark"
        style={{ padding: "80px 24px" }}
      >
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span className="badge badge-orange" style={{ marginBottom: "16px" }}>
              Share Your Story
            </span>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 900,
                color: "white",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                marginTop: "12px",
                marginBottom: "12px",
              }}
            >
              Have you studied with Gyanam?
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.6,
              }}
            >
              Your experience helps thousands of students in Noida find the
              right mentorship. We value every honest review.
            </p>
          </div>
          <ReviewForm />
        </div>
      </section>

      {/* ── 7. FAQ SECTION ───────────────────────────────────────────── */}
      <section
        id="faq"
        className="section-white"
        style={{ padding: "80px 24px" }}
      >
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          {/* Heading */}
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="badge badge-orange" style={{ marginBottom: "16px" }}>
              FAQ
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
                color: "var(--clr-text)",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                marginTop: "12px",
              }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          {/* Accordion */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA ─────────────────────────────────────────────── */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #0f0f0f 0%, #1a0a00 50%, #0f0f0f 100%)",
          padding: "80px 24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "660px", margin: "0 auto", position: "relative" }}>
          <span className="badge badge-orange" style={{ marginBottom: "20px" }}>
            Get Started Today
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              fontWeight: 900,
              color: "white",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              marginBottom: "16px",
              marginTop: "12px",
            }}
          >
            Ready to find the best tutor in{" "}
            <span className="gradient-text">Noida?</span>
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.7,
              marginBottom: "40px",
            }}
          >
            Join 2,450+ students who chose Gyanam and experienced the
            difference that 1-on-1 expert tutoring makes. Your tutor is 30
            minutes away.
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://gyanam.net"
              className="btn-primary"
              style={{ fontSize: "1rem", padding: "16px 36px" }}
            >
              Find My Tutor →
            </a>
            <a
              href="#write-review"
              className="btn-secondary"
              style={{ fontSize: "1rem", padding: "16px 36px" }}
            >
              Write a Review
            </a>
          </div>
        </div>
      </section>
    </>
  );
}