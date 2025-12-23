"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ToolsHome() {
  const [mounted, setMounted] = useState(false);
  const [hasHook, setHasHook] = useState(false);
  const [hasCaption, setHasCaption] = useState(false);
  const [hasHashtags, setHasHashtags] = useState(false);

  useEffect(() => {
    setMounted(true);

    setHasHook(!!localStorage.getItem("workflow_hook"));
    setHasCaption(!!localStorage.getItem("workflow_caption"));
    setHasHashtags(!!localStorage.getItem("workflow_hashtags"));
  }, []);

  // ⛔ Prevent hydration mismatch
  if (!mounted) return null;

  const cards = [
    {
      title: "Creator Workflow",
      desc: "Hook → Caption → Hashtags. Everything ready to post in one flow.",
      href: "/tools/workflow",
      emoji: "🚀",
      highlight: true,
      progress: [
        { label: "Hook", done: hasHook },
        { label: "Caption", done: hasCaption },
        { label: "Hashtags", done: hasHashtags },
      ],
    },
    {
      title: "Content Ideas",
      desc: "Get viral content ideas tailored to your niche.",
      href: "/tools/ideas",
      emoji: "💡",
    },
    {
      title: "Hook Generator",
      desc: "Create scroll-stopping hooks for short videos.",
      href: "/tools/hook",
      emoji: "🎯",
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
  ];

  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "80px 24px",
      }}
    >
      <h1 style={{ fontSize: "36px", fontWeight: 800 }}>
        Razemind Tools
      </h1>
      <p style={{ marginTop: "10px", color: "#475569", maxWidth: "600px" }}>
        Choose a tool to grow faster on social media.
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
        }}
      >
        {cards.map((c) => (
          <Link key={c.title} href={c.href} style={{ textDecoration: "none" }}>
            <div
              style={{
                border: c.highlight
                  ? "2px solid #4f46e5"
                  : "1px solid #e5e7eb",
                borderRadius: "16px",
                padding: "24px",
                background: "#ffffff",
              }}
            >
              <div style={{ fontSize: "28px" }}>{c.emoji}</div>

              <h3 style={{ marginTop: "12px", fontSize: "20px", fontWeight: 800 }}>
                {c.title}
              </h3>

              <p style={{ marginTop: "8px", color: "#475569" }}>
                {c.desc}
              </p>

              {c.progress && (
                <div style={{ marginTop: "12px", fontSize: "13px" }}>
                  {c.progress.map((p) => (
                    <div key={p.label}>
                      {p.done ? "✅" : "⬜"} {p.label}
                    </div>
                  ))}
                </div>
              )}

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