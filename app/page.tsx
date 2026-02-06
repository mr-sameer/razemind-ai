import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      {/* HERO */}
      <section style={{ paddingTop: "18vh", paddingBottom: "96px" }}>
        <h1>
          AI that helps creators <br />
          grow on social media
        </h1>

        <p style={{ maxWidth: "640px", marginTop: "18px" }}>
          Razemind helps you generate hooks, captions, hashtags and
          workflows — so you focus on creating, not overthinking.
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <Link href="/tools" className="btn-primary">
            Try RazeMind
          </Link>

          <Link href="/pricing" className="btn-secondary">
            View Pricing
          </Link>
        </div>
      </section>

      {/* TOOLS */}
      <section style={{ paddingBottom: "120px" }}>
        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800 }}>
            Creator Tools
          </h2>
          <p style={{ marginTop: "8px", maxWidth: "520px" }}>
            Simple tools designed to remove confusion and boost
            engagement.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          <ToolCard
            title="Hook Generator"
            desc="Scroll-stopping openings optimized for Reels & Shorts."
            link="/tools/hook"
          />

          <ToolCard
            title="Caption Generator"
            desc="High-engagement captions with clear structure & CTA."
            link="/tools/caption"
          />

          <ToolCard
            title="Hashtag Generator"
            desc="Reach-focused hashtags without spam or shadowban risk."
            link="/tools/hashtag"
          />

          <ToolCard
            title="Workflow Builder"
            desc="All tools combined into one ready-to-post flow."
            link="/tools/workflow"
            highlight
          />
        </div>
      </section>

      {/* LOGIN CTA */}
      <section
        style={{
          paddingBottom: "120px",
          background: "#eef2ff",
          borderRadius: "24px",
          padding: "48px",
        }}
      >
        <h2 style={{ fontSize: "1.6rem", fontWeight: 800 }}>
          Save your workflows & grow faster
        </h2>

        <p style={{ marginTop: "12px", maxWidth: "520px" }}>
          Login to store workflow history, reuse high-performing
          content and track your progress.
        </p>

        <div style={{ marginTop: "24px" }}>
          <Link href="/login" className="btn-primary">
            Login to Continue
          </Link>
        </div>
      </section>
    </main>
  );
}

/* ---------------- TOOL CARD ---------------- */

function ToolCard({
  title,
  desc,
  link,
  highlight = false,
}: {
  title: string;
  desc: string;
  link: string;
  highlight?: boolean;
}) {
  return (
    <Link
      href={link}
      style={{
        background: "#ffffff",
        border: highlight
          ? "2px solid #4f46e5"
          : "1px solid #e5e7eb",
        borderRadius: "18px",
        padding: "24px",
        display: "block",
        textDecoration: "none",
        color: "#0f172a",
      }}
    >
      <div
        style={{
          fontWeight: 800,
          fontSize: "1.05rem",
          marginBottom: "8px",
        }}
      >
        {title}
      </div>

      <p style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
        {desc}
      </p>

      <div
        style={{
          marginTop: "16px",
          fontWeight: 700,
          color: "#4f46e5",
          fontSize: "0.9rem",
        }}
      >
        Open →
      </div>
    </Link>
  );
}