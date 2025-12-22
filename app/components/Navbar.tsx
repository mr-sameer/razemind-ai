"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 🔹 MOCK CREDITS (later DB / auth se aayega)
  const [credits, setCredits] = useState(5);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const linkStyle = (path: string) => ({
    fontWeight: 700,
    textDecoration: "none",
    color: pathname === path ? "#4f46e5" : "#334155",
  });

  return (
    <nav style={{ borderBottom: "1px solid #e5e7eb", background: "#ffffff" }}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO */}
        <Link
          href="/"
          style={{
            fontWeight: 800,
            fontSize: "18px",
            color: "#0f172a",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          RazeMind<span style={{ color: "#4f46e5" }}>AI</span>
        </Link>

        {/* DESKTOP MENU */}
        {!isMobile && (
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <Link href="/tools" style={linkStyle("/tools")}>
              Tools
            </Link>
            <Link href="/pricing" style={linkStyle("/pricing")}>
              Pricing
            </Link>

            {/* CREDITS BADGE */}
            <div
              style={{
                padding: "6px 10px",
                borderRadius: "999px",
                fontSize: "13px",
                fontWeight: 700,
                background: credits > 0 ? "#eef2ff" : "#fee2e2",
                color: credits > 0 ? "#3730a3" : "#991b1b",
              }}
            >
              Credits: {credits}
            </div>

            {credits === 0 && (
              <Link
                href="/pricing"
                style={{
                  padding: "8px 14px",
                  background: "#4f46e5",
                  color: "#ffffff",
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: "13px",
                  textDecoration: "none",
                }}
              >
                Upgrade
              </Link>
            )}
          </div>
        )}

        {/* HAMBURGER */}
        {isMobile && (
          <button
            onClick={() => setOpen(!open)}
            style={{
              background: "none",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        )}
      </div>

      {/* MOBILE MENU */}
      {isMobile && open && (
        <div
          style={{
            borderTop: "1px solid #e5e7eb",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <Link href="/tools" onClick={() => setOpen(false)}>
            Tools
          </Link>
          <Link href="/pricing" onClick={() => setOpen(false)}>
            Pricing
          </Link>

          {/* MOBILE CREDITS */}
          <div
            style={{
              padding: "8px",
              borderRadius: "8px",
              fontWeight: 700,
              background: credits > 0 ? "#eef2ff" : "#fee2e2",
              color: credits > 0 ? "#3730a3" : "#991b1b",
              textAlign: "center",
            }}
          >
            Credits: {credits}
          </div>

          {credits === 0 && (
            <Link
              href="/pricing"
              onClick={() => setOpen(false)}
              style={{
                padding: "10px",
                background: "#4f46e5",
                color: "#fff",
                borderRadius: "8px",
                textAlign: "center",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Upgrade
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}