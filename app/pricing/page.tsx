"use client";

export default function PricingPage() {
  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "80px 24px",
      }}
    >
      {/* Header */}
      <h1 style={{ fontSize: "36px", fontWeight: 800, textAlign: "center" }}>
        Simple, Transparent Pricing
      </h1>

      <p
        style={{
          marginTop: "12px",
          textAlign: "center",
          color: "#475569",
        }}
      >
        Start free. Upgrade when you’re ready to grow faster.
      </p>

      {/* Cards */}
      <div
        style={{
          marginTop: "56px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "32px",
        }}
      >
        {/* FREE PLAN */}
        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "16px",
            padding: "32px",
            background: "#ffffff",
          }}
        >
          <h2 style={{ fontSize: "22px", fontWeight: 700 }}>Free</h2>
          <p style={{ marginTop: "8px", color: "#475569" }}>
            For trying Razemind
          </p>

          <div style={{ marginTop: "24px", fontSize: "32px", fontWeight: 800 }}>
            ₹0
          </div>

          <ul style={{ marginTop: "24px", color: "#334155" }}>
            <li>✔ 10 AI credits</li>
            <li>✔ Basic content ideas</li>
            <li>✔ Limited tools</li>
            <li>✖ No priority access</li>
          </ul>

          <button
            style={{
              marginTop: "28px",
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #e5e7eb",
              background: "#ffffff",
              fontWeight: 700,
              cursor: "default",
            }}
          >
            Current Plan
          </button>
        </div>

        {/* PRO PLAN */}
        <div
          style={{
            border: "2px solid #4f46e5",
            borderRadius: "16px",
            padding: "32px",
            background: "#f8fafc",
          }}
        >
          <h2 style={{ fontSize: "22px", fontWeight: 700 }}>Pro</h2>
          <p style={{ marginTop: "8px", color: "#475569" }}>
            For serious creators
          </p>

          <div style={{ marginTop: "24px", fontSize: "32px", fontWeight: 800 }}>
            ₹299<span style={{ fontSize: "14px", fontWeight: 500 }}>/month</span>
          </div>

          <ul style={{ marginTop: "24px", color: "#334155" }}>
            <li>✔ Unlimited AI credits</li>
            <li>✔ Advanced prompts</li>
            <li>✔ All tools unlocked</li>
            <li>✔ Priority access</li>
          </ul>

          <button
            onClick={() => alert("Upgrade coming soon 🚀")}
            style={{
              marginTop: "28px",
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              background: "#4f46e5",
              color: "#ffffff",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Upgrade to Pro
          </button>
        </div>
      </div>
    </main>
  );
}