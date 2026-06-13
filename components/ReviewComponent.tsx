"use client";

import { useState } from "react";
import { Star, ShieldCheck, MapPin, ChevronDown } from "lucide-react";

interface ReviewCardProps {
  name: string;
  role: string;
  rating: number;
  title: string;
  text: string;
  date: string;
  location: string;
  subject: string;
}

const subjectColors: Record<string, string> = {
  JEE: "badge-blue",
  NEET: "badge-green",
  CBSE: "badge-purple",
  ICSE: "badge-orange",
  CUET: "badge-blue",
  SSC: "badge-orange",
};

const avatarColors = [
  "#f97316", "#3b82f6", "#8b5cf6", "#10b981",
  "#ec4899", "#f59e0b", "#06b6d4", "#6366f1",
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function getAvatarColor(name: string) {
  const idx = name.charCodeAt(0) % avatarColors.length;
  return avatarColors[idx];
}

export default function ReviewCard({
  name,
  role,
  rating,
  title,
  text,
  date,
  location,
  subject,
}: ReviewCardProps) {
  const [expanded, setExpanded] = useState(false);
  const shouldTruncate = text.length > 220;
  const displayText = shouldTruncate && !expanded ? text.slice(0, 220) + "…" : text;

  return (
    <article
      className="card"
      style={{
        padding: "28px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative quote mark */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "12px",
          right: "20px",
          fontSize: "5rem",
          fontWeight: 900,
          color: "rgba(249,115,22,0.07)",
          lineHeight: 1,
          userSelect: "none",
          fontFamily: "Georgia, serif",
        }}
      >
        &ldquo;
      </span>

      {/* Top row: stars + verified badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "14px",
        }}
      >
        <div style={{ display: "flex", gap: "3px" }}>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              style={{ width: "16px", height: "16px" }}
              className={i < rating ? "fill-orange-500 text-orange-500" : "fill-gray-200 text-gray-200"}
            />
          ))}
        </div>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            fontSize: "0.7rem",
            fontWeight: 700,
            color: "#16a34a",
            background: "rgba(34,197,94,0.1)",
            padding: "3px 10px",
            borderRadius: "99px",
            border: "1px solid rgba(34,197,94,0.2)",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          <ShieldCheck style={{ width: "11px", height: "11px" }} />
          Verified
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontWeight: 800,
          fontSize: "1.05rem",
          color: "var(--clr-text)",
          lineHeight: 1.4,
          marginBottom: "12px",
        }}
      >
        {title}
      </h3>

      {/* Body */}
      <p
        style={{
          color: "var(--clr-text-muted)",
          fontSize: "0.9rem",
          lineHeight: 1.75,
          flexGrow: 1,
          marginBottom: shouldTruncate ? "8px" : "20px",
        }}
      >
        {displayText}
      </p>

      {/* Show more/less */}
      {shouldTruncate && (
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            fontSize: "0.82rem",
            fontWeight: 700,
            color: "var(--clr-accent)",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0",
            marginBottom: "16px",
            fontFamily: "var(--font-primary)",
          }}
        >
          {expanded ? "Show less" : "Read more"}
          <ChevronDown
            style={{
              width: "14px",
              height: "14px",
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.25s ease",
            }}
          />
        </button>
      )}

      {/* Tags row */}
      <div
        style={{
          display: "flex",
          gap: "6px",
          marginBottom: "16px",
          flexWrap: "wrap",
        }}
      >
        <span className={`badge ${subjectColors[subject] || "badge-orange"}`}>
          {subject}
        </span>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            fontSize: "0.7rem",
            fontWeight: 600,
            color: "var(--clr-text-subtle)",
            padding: "3px 10px",
            borderRadius: "99px",
            background: "var(--clr-surface-2)",
            border: "1px solid var(--clr-border)",
          }}
        >
          <MapPin style={{ width: "10px", height: "10px", color: "var(--clr-accent)" }} />
          {location}
        </span>
      </div>

      {/* Footer row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "16px",
          borderTop: "1px solid var(--clr-border)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Avatar */}
          <div
            aria-hidden="true"
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              background: getAvatarColor(name),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "0.75rem",
              color: "white",
              flexShrink: 0,
              letterSpacing: "0.02em",
            }}
          >
            {getInitials(name)}
          </div>
          <div>
            <p
              style={{
                fontWeight: 800,
                fontSize: "0.9rem",
                color: "var(--clr-text)",
                lineHeight: 1.2,
              }}
            >
              {name}
            </p>
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                color: "var(--clr-accent)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                lineHeight: 1.4,
              }}
            >
              {role}
            </p>
          </div>
        </div>
        <time
          dateTime={date}
          style={{
            fontSize: "0.78rem",
            fontWeight: 500,
            color: "var(--clr-text-subtle)",
          }}
        >
          {new Date(date).toLocaleDateString("en-IN", {
            month: "short",
            year: "numeric",
          })}
        </time>
      </div>
    </article>
  );
}