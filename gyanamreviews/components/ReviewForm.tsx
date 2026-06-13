"use client";

import { useState } from "react";
import { Star, CheckCircle2 } from "lucide-react";

const NOIDA_LOCATIONS = [
  "Noida Sector 15",
  "Noida Sector 18",
  "Noida Sector 27",
  "Noida Sector 30",
  "Noida Sector 44",
  "Noida Sector 50",
  "Noida Sector 62",
  "Noida Sector 76",
  "Noida Sector 137",
  "Greater Noida",
  "Noida Extension / Greater Noida West",
  "Other / Online",
];

const MAX_CHARS = 500;

export default function ReviewForm() {
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission delay
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        style={{
          background: "var(--clr-dark)",
          borderRadius: "var(--radius-xl)",
          padding: "48px 32px",
          textAlign: "center",
          border: "1px solid rgba(249,115,22,0.25)",
          boxShadow: "0 0 40px rgba(249,115,22,0.12)",
          animation: "fadeInScale 0.5s ease both",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            background: "rgba(34,197,94,0.15)",
            border: "2px solid rgba(34,197,94,0.35)",
            marginBottom: "20px",
            animation: "checkBounce 0.5s ease 0.2s both",
          }}
        >
          <CheckCircle2
            style={{ width: "36px", height: "36px", color: "#22c55e" }}
          />
        </div>
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            color: "white",
            marginBottom: "8px",
          }}
        >
          Thank you for your review!
        </h3>
        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "1rem",
            maxWidth: "400px",
            margin: "0 auto 24px",
            lineHeight: 1.6,
          }}
        >
          Your feedback helps thousands of students in Noida find the right
          mentorship. We&apos;ll verify and publish your review shortly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setCharCount(0);
            setRating(5);
          }}
          style={{
            fontSize: "0.875rem",
            fontWeight: 700,
            color: "var(--clr-accent)",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-primary)",
            textDecoration: "underline",
          }}
        >
          Submit another review
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "white",
        borderRadius: "var(--radius-xl)",
        padding: "36px 32px",
        boxShadow: "var(--shadow-lg)",
        border: "1px solid var(--clr-border)",
      }}
    >
      <h3
        style={{
          fontSize: "1.35rem",
          fontWeight: 800,
          color: "var(--clr-text)",
          marginBottom: "6px",
        }}
      >
        Share Your Gyanam Experience
      </h3>
      <p
        style={{
          fontSize: "0.875rem",
          color: "var(--clr-text-muted)",
          marginBottom: "28px",
          lineHeight: 1.5,
        }}
      >
        Your honest review helps students across Noida find the best tutor.
      </p>

      {/* Star Rating */}
      <div style={{ marginBottom: "24px" }}>
        <label
          style={{
            display: "block",
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--clr-text-muted)",
            marginBottom: "10px",
          }}
        >
          Overall Rating
        </label>
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              id={`star-${star}`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "2px",
                transition: "transform 0.15s ease",
                transform: star <= (hoveredRating || rating) ? "scale(1.1)" : "scale(1)",
              }}
            >
              <Star
                style={{ width: "32px", height: "32px" }}
                className={
                  star <= (hoveredRating || rating)
                    ? "fill-orange-500 text-orange-500"
                    : "fill-gray-200 text-gray-200"
                }
              />
            </button>
          ))}
          <span
            style={{
              fontSize: "0.875rem",
              fontWeight: 700,
              color: "var(--clr-text-muted)",
              marginLeft: "8px",
            }}
          >
            {["", "Poor", "Fair", "Good", "Great", "Excellent"][
              hoveredRating || rating
            ]}
          </span>
        </div>
      </div>

      {/* Grid: Name + Email */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
          marginBottom: "16px",
        }}
      >
        <div>
          <label
            htmlFor="review-name"
            style={{
              display: "block",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--clr-text-muted)",
              marginBottom: "8px",
            }}
          >
            Full Name *
          </label>
          <input
            type="text"
            id="review-name"
            name="name"
            required
            className="form-input"
            placeholder="E.g. Rahul Sharma"
          />
        </div>
        <div>
          <label
            htmlFor="review-email"
            style={{
              display: "block",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--clr-text-muted)",
              marginBottom: "8px",
            }}
          >
            Email (for verification) *
          </label>
          <input
            type="email"
            id="review-email"
            name="email"
            required
            className="form-input"
            placeholder="your@email.com"
          />
        </div>
      </div>

      {/* Grid: Role + Location */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
          marginBottom: "16px",
        }}
      >
        <div>
          <label
            htmlFor="review-role"
            style={{
              display: "block",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--clr-text-muted)",
              marginBottom: "8px",
            }}
          >
            Role / Course *
          </label>
          <input
            type="text"
            id="review-role"
            name="role"
            required
            className="form-input"
            placeholder="E.g. JEE Aspirant, Parent"
          />
        </div>
        <div>
          <label
            htmlFor="review-location"
            style={{
              display: "block",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--clr-text-muted)",
              marginBottom: "8px",
            }}
          >
            Your Location *
          </label>
          <select
            id="review-location"
            name="location"
            required
            className="form-input"
            style={{ cursor: "pointer" }}
          >
            <option value="">Select your area in Noida…</option>
            {NOIDA_LOCATIONS.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Review Title */}
      <div style={{ marginBottom: "16px" }}>
        <label
          htmlFor="review-title"
          style={{
            display: "block",
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--clr-text-muted)",
            marginBottom: "8px",
          }}
        >
          Review Title *
        </label>
        <input
          type="text"
          id="review-title"
          name="title"
          required
          className="form-input"
          placeholder="Summarize your experience in a sentence"
        />
      </div>

      {/* Detailed Review */}
      <div style={{ marginBottom: "24px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          <label
            htmlFor="review-body"
            style={{
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--clr-text-muted)",
            }}
          >
            Detailed Review *
          </label>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: charCount > MAX_CHARS * 0.8 ? "var(--clr-accent)" : "var(--clr-text-subtle)",
            }}
          >
            {charCount}/{MAX_CHARS}
          </span>
        </div>
        <textarea
          id="review-body"
          name="review"
          required
          rows={5}
          maxLength={MAX_CHARS}
          onChange={(e) => setCharCount(e.target.value.length)}
          className="form-input"
          style={{ resize: "none", lineHeight: 1.7 }}
          placeholder="Tell us about the tutors, curriculum, and how Gyanam helped you achieve your goals…"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="btn-primary"
        style={{
          width: "100%",
          justifyContent: "center",
          fontSize: "1rem",
          padding: "16px 24px",
          opacity: loading ? 0.85 : 1,
          cursor: loading ? "not-allowed" : "pointer",
          borderRadius: "var(--radius-md)",
        }}
      >
        {loading ? (
          <>
            <span className="spinner" />
            Submitting…
          </>
        ) : (
          "Submit Verified Review →"
        )}
      </button>
    </form>
  );
}