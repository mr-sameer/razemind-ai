import Link from "next/link";

export default function Navbar() {
  return (
    <div
      style={{
        height: "68px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px",
        borderBottom: "1px solid #e5e7eb",
        background: "#ffffff",
      }}
    >
      {/* Brand */}
      <Link
        href="/"
        style={{
          fontWeight: 800,
          fontSize: "18px",
          textDecoration: "none",
          color: "#0f172a",
        }}
      >
        RazeMind<span style={{ color: "#4f46e5" }}>AI</span>
      </Link>

      {/* Menu */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link
          href="/tools"
          style={{
            marginRight: "32px",
            fontWeight: 700,
            textDecoration: "none",
            color: "#334155",
          }}
        >
          Tools
        </Link>

        <Link
          href="/pricing"
          style={{
            marginRight: "48px",
            fontWeight: 700,
            textDecoration: "none",
            color: "#334155",
          }}
        >
          Pricing
        </Link>

        <Link
          href="/login"
          style={{
            padding: "10px 20px",
            background: "#4f46e5",
            color: "#ffffff",
            borderRadius: "8px",
            fontWeight: 700,
            fontSize: "13px",
            textDecoration: "none",
          }}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}