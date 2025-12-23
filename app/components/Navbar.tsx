"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getUser, logoutUser } from "@/lib/auth";

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [credits, setCredits] = useState<number | null>(null);

  useEffect(() => {
    // Mobile check
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);

    // ✅ LOAD USER CREDITS
    const user = getUser();
    if (user) {
      setCredits(user.credits);
    }

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

            {/* SHOW CTA ONLY IF NOT LOGGED IN */}
            {credits === null && (
              <Link
                href="/signup"
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
                Get Started
              </Link>
            )}

            {/* ✅ CREDITS BADGE (SAFE) */}
            {credits !== null && (
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
            )}

            {/* UPGRADE IF ZERO */}
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

            {/* LOGOUT */}
            {credits !== null && (
              <button
                onClick={() => {
                  logoutUser();
                  location.reload();
                }}
                style={{
                  background: "none",
                  border: "none",
                  color: "#64748b",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Logout
              </button>
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

          {credits === null && (
            <Link
              href="/signup"
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
          )}

          {credits !== null && (
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
          )}

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