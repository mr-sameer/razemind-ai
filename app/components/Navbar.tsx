"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path ? "#4f46e5" : "#334155";

  return (
    <nav
      style={{
        borderBottom: "1px solid #e5e7eb",
        background: "#ffffff",
      }}
    >
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
          }}
          className="desktop-menu"
        >
          <Link href="/tools" style={{ color: isActive("/tools"), fontWeight: 700 }}>
            Tools
          </Link>
          <Link
            href="/pricing"
            style={{ color: isActive("/pricing"), fontWeight: 700 }}
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
            }}
          >
            Get Started
          </Link>
        </div>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            fontSize: "22px",
            cursor: "pointer",
            display: "none",
          }}
          className="hamburger"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          style={{
            borderTop: "1px solid #e5e7eb",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
          className="mobile-menu"
        >
          <Link href="/tools" onClick={() => setOpen(false)}>
            Tools
          </Link>
          <Link href="/pricing" onClick={() => setOpen(false)}>
            Pricing
          </Link>
          <Link
            href="/login"
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
            Get Started
          </Link>
        </div>
      )}

      {/* RESPONSIVE CSS */}
      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }
          .hamburger {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}