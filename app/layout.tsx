import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: {
    default: "Best Tutoring in Noida — Verified Student Reviews | Gyanam Education",
    template: "%s | Gyanam Education Reviews",
  },
  description:
    "Read 2,450+ verified reviews from students and parents. See why Gyanam Education is consistently ranked #1 for best tutoring in Noida, Delhi NCR — JEE, NEET, CBSE, CUET & more. 4.9/5 rating.",
  keywords: [
    "best tutoring in Noida",
    "home tutor Noida",
    "best tutor platform Noida",
    "JEE coaching Noida",
    "NEET coaching Noida",
    "CBSE tutor Noida",
    "1 on 1 tutoring Noida",
    "Gyanam Education reviews",
    "tutor Noida Sector 62",
    "home tutor Delhi NCR",
    "best coaching center Noida",
    "online tutor Noida",
    "CUET coaching Noida",
    "ICSE tutor Noida",
  ],
  authors: [{ name: "Gyanam Education", url: "https://gyanam.net" }],
  creator: "Gyanam Education",
  publisher: "Gyanam Education",
  alternates: {
    canonical: "https://reviews.gyanam.net",
  },
  openGraph: {
    title: "Best Tutoring in Noida — 4.9/5 from 2,450+ Verified Reviews | Gyanam",
    description:
      "Verified student reviews for Gyanam Education, the #1 ranked home tutor platform in Noida. Read real stories from JEE, NEET, CBSE, and CUET achievers.",
    url: "https://reviews.gyanam.net",
    siteName: "Gyanam Education Reviews",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://reviews.gyanam.net/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gyanam Education — Best Tutoring in Noida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Tutoring in Noida — Verified Reviews | Gyanam Education",
    description:
      "2,450+ real student reviews. 4.9/5 rating. Trusted by JEE, NEET & board toppers across Noida.",
    images: ["https://reviews.gyanam.net/og-image.png"],
    creator: "@gyanamedu",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable}`}
        style={{ fontFamily: "var(--font-plus-jakarta, var(--font-primary))" }}
      >
        {/* ── HEADER ── */}
        <header
          style={{
            background: "rgba(10,10,10,0.92)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            position: "sticky",
            top: 0,
            zIndex: 50,
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 24px",
              height: "72px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Logo */}
            <a
              href="https://gyanam.net"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
              }}
              aria-label="Gyanam Education Home"
            >
              <span
                style={{
                  fontWeight: 900,
                  fontSize: "1.75rem",
                  color: "white",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  transition: "color 0.2s",
                }}
              >
                Gyanam
                <span style={{ color: "var(--clr-accent)" }}>.</span>
              </span>
              <span
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: "var(--clr-accent)",
                  textTransform: "uppercase",
                  background: "rgba(249,115,22,0.12)",
                  padding: "2px 8px",
                  borderRadius: "99px",
                  border: "1px solid rgba(249,115,22,0.25)",
                  marginTop: "2px",
                }}
              >
                Reviews
              </span>
            </a>

            {/* Nav */}
            <nav style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <a
                href="#reviews"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.65)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                Reviews
              </a>
              <a
                href="#faq"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.65)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                FAQ
              </a>
              <a
                href="https://gyanam.net"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                }}
              >
                Main Site →
              </a>
              <a
                href="#write-review"
                className="btn-primary"
                style={{ fontSize: "0.875rem", padding: "10px 20px" }}
              >
                Write a Review
              </a>
            </nav>
          </div>
        </header>

        {/* ── MAIN ── */}
        <main style={{ minHeight: "100vh" }}>{children}</main>

        {/* ── FOOTER ── */}
        <footer
          style={{
            background: "var(--clr-dark)",
            color: "white",
            borderTop: "1px solid var(--clr-dark-border)",
          }}
        >
          {/* Top grid */}
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "64px 24px 48px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "48px",
            }}
          >
            {/* Brand */}
            <div>
              <p
                style={{
                  fontWeight: 900,
                  fontSize: "1.5rem",
                  letterSpacing: "-0.03em",
                  marginBottom: "12px",
                }}
              >
                Gyanam<span style={{ color: "var(--clr-accent)" }}>.</span>
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.7,
                  maxWidth: "220px",
                }}
              >
                The most trusted home tutor platform in Noida, serving 2,450+
                students across Delhi NCR.
              </p>
              <address
                style={{
                  marginTop: "16px",
                  fontStyle: "normal",
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.4)",
                  lineHeight: 1.7,
                }}
              >
                Gyanam Education
                <br />
                Noida, Uttar Pradesh — 201301
                <br />
                India
              </address>
            </div>

            {/* Subjects */}
            <div>
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--clr-accent)",
                  marginBottom: "16px",
                }}
              >
                Subjects
              </p>
              {[
                { label: "JEE Coaching Noida", href: "https://gyanam.net" },
                { label: "NEET Coaching Noida", href: "https://gyanam.net" },
                { label: "CBSE Tutor Noida", href: "https://gyanam.net" },
                { label: "CUET Coaching Noida", href: "https://gyanam.net" },
                { label: "ICSE Tutor Noida", href: "https://gyanam.net" },
                { label: "SSC Coaching Noida", href: "https://gyanam.net" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    marginBottom: "8px",
                    transition: "color 0.2s",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Locations */}
            <div>
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--clr-accent)",
                  marginBottom: "16px",
                }}
              >
                Locations in Noida
              </p>
              {[
                "Noida Sector 15",
                "Noida Sector 18",
                "Noida Sector 30",
                "Noida Sector 44",
                "Noida Sector 50",
                "Noida Sector 62",
                "Noida Sector 76",
                "Greater Noida",
                "Noida Extension",
              ].map((loc) => (
                <p
                  key={loc}
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.5)",
                    marginBottom: "8px",
                  }}
                >
                  {loc}
                </p>
              ))}
            </div>

            {/* Links */}
            <div>
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--clr-accent)",
                  marginBottom: "16px",
                }}
              >
                Quick Links
              </p>
              {[
                { label: "Main Website", href: "https://gyanam.net" },
                { label: "Read Reviews", href: "#reviews" },
                { label: "Write a Review", href: "#write-review" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    marginBottom: "8px",
                    transition: "color 0.2s",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              borderTop: "1px solid var(--clr-dark-border)",
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "20px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <p
              style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.3)" }}
            >
              © {new Date().getFullYear()} Gyanam Education. All rights reserved.
              Best tutoring in Noida.
            </p>
            <a
              href="https://gyanam.net"
              style={{
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.3)",
                textDecoration: "none",
              }}
            >
              gyanam.net
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}