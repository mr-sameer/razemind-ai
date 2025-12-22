import Link from "next/link";

export default function Navbar() {
  return (
    <div
      style={{
        minHeight: "68px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 16px",
        borderBottom: "1px solid #e5e7eb",
        background: "#ffffff",
        flexWrap: "wrap", // ✅ KEY FIX
        rowGap: "12px",   // ✅ mobile spacing
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
          whiteSpace: "nowrap", // ✅ logo break nahi hoga
        }}
      >
        RazeMind<span style={{ color: "#4f46e5" }}>AI</span>
      </Link>

      {/* Menu */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",        // ✅ marginRight remove
          flexWrap: "wrap",   // ✅ mobile wrap
        }}
      >
        <Link
          href="/tools"
          style={{
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
            padding: "10px 18px",
            background: "#4f46e5",
            color: "#ffffff",
            borderRadius: "8px",
            fontWeight: 700,
            fontSize: "13px",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}