export default function Home() {
  return (
    <main className="container">
      <section style={{ paddingTop: "22vh", paddingBottom: "120px" }}>

        <h1>
          AI that helps creators <br />
          grow on social media
        </h1>

        <p style={{ maxWidth: "620px", marginTop: "18px" }}>
          Razemind helps you generate content ideas, captions,
          hashtags, and hooks — so you can focus on creating,
          not overthinking.
        </p>

        {/* BUTTONS */}
        <div style={{ marginTop: "48px" }}>
  <a
    href="/tools"
    style={{
      display: "inline-block",
      padding: "12px 26px",
      background: "#4f46e5",
      color: "#ffffff",
      borderRadius: "8px",
      fontWeight: 700,
      fontSize: "14px",
      textDecoration: "none",
      marginRight: "32px",   // ✅ REAL MARGIN
    }}
  >
    Try RazeMind
  </a>

  <a
    href="/pricing"
    style={{
      display: "inline-block",
      padding: "12px 26px",
      background: "#ffffff",
      color: "#0f172a",
      border: "1px solid #e5e7eb",
      borderRadius: "8px",
      fontWeight: 700,
      fontSize: "14px",
      textDecoration: "none",
    }}
  >
    View Pricing
  </a>
</div>

      </section>
    </main>
  );
}