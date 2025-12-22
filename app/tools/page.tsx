"use client";

import Link from "next/link";

export default function ToolsHome() {
  const cards = [
    {
      title: "Content Ideas",
      desc: "Get viral content ideas tailored to your niche.",
      href: "/tools/ideas",
      emoji: "💡",
    },
    {
      title: "Caption Generator",
      desc: "Write engaging captions that boost reach.",
      href: "/tools/caption",
      emoji: "✍️",
    },
    {
      title: "Hashtag Generator",
      desc: "Generate high-reach hashtags instantly.",
      href: "/tools/hashtag",
      emoji: "#️⃣",
    },
    {
      title: "Hook Generator",
      desc: "Create scroll-stopping hooks for short videos.",
      href: "/tools/hook",
      emoji: "🎯",
    },
  ];

  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "80px 24px",
      }}
    >
      {/* Header */}
      <h1 style={{ fontSize: "36px", fontWeight: 800 }}>
        Razemind Tools
      </h1>
      <p style={{ marginTop: "10px", color: "#475569", maxWidth: "600px" }}>
        Choose a tool to grow faster on social media.
      </p>

      {/* Cards Grid */}
      <div
        style={{
          marginTop: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
        }}
      >
        {cards.map((c) => (
          <Link
            key={c.title}
            href={c.href}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "16px",
                padding: "24px",
                background: "#ffffff",
                transition: "all 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 10px 24px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "none";
              }}
            >
              <div style={{ fontSize: "28px" }}>{c.emoji}</div>
              <h3 style={{ marginTop: "12px", fontSize: "20px", fontWeight: 700 }}>
                {c.title}
              </h3>
              <p style={{ marginTop: "8px", color: "#475569" }}>
                {c.desc}
              </p>

              <div
                style={{
                  marginTop: "16px",
                  fontWeight: 700,
                  color: "#4f46e5",
                }}
              >
                Open →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}