"use client";

import { useState } from "react";

export default function ToolsPage() {
    // ✅ ALL hooks INSIDE component
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [credits, setCredits] = useState(10);
    const [plan, setPlan] = useState<"free" | "pro">("free");

    const handleGenerate = async () => {
        if (!input.trim()) return;

        if (plan === "free" && credits <= 0) {
            setOutput("❌ Free credits over. Upgrade to Pro to continue.");
            return;
        }

        setOutput("Thinking...");

        const res = await fetch("/api/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt: input }),
        });

        const data = await res.json();

        if (plan === "free") {
            setCredits((c) => c - 1);
        }

        setOutput(data.result);
    };

    return (
        <main
            style={{
                maxWidth: "800px",
                margin: "0 auto",
                padding: "80px 24px",
            }}
        >
            <h1 style={{ fontSize: "32px", fontWeight: 800 }}>
                Content Idea Generator
            </h1>

            <p
                style={{
                    marginTop: "12px",
                    color: "#475569",
                    maxWidth: "600px",
                }}
            >
                Describe your niche or topic, and Razemind will generate
                content ideas that actually work.
            </p>

            {/* PLAN + CREDITS INFO */}
            <div
                style={{
                    marginTop: "16px",
                    fontWeight: 600,
                    color:
                        plan === "pro"
                            ? "#16a34a"
                            : credits > 0
                                ? "#0f172a"
                                : "red",
                }}
            >
                {plan === "pro"
                    ? "Pro Plan: Unlimited credits"
                    : `Credits left: ${credits}`}
            </div>
            {plan === "free" && credits <= 0 && (
                <div
                    style={{
                        marginTop: "20px",
                        padding: "16px",
                        borderRadius: "12px",
                        border: "1px solid #fde68a",
                        background: "#fffbeb",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "16px",
                    }}
                >
                    <div style={{ fontWeight: 600, color: "#92400e" }}>
                        You’ve used all free credits. Upgrade to Pro for unlimited access.
                    </div>

                    <a
                        href="/pricing"
                        style={{
                            padding: "10px 18px",
                            background: "#4f46e5",
                            color: "#ffffff",
                            borderRadius: "10px",
                            fontWeight: 700,
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                        }}
                    >
                        Upgrade
                    </a>
                </div>
            )}
            <textarea
                placeholder="Example: Free Fire gaming reels for Indian audience"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{
                    width: "100%",
                    height: "140px",
                    marginTop: "24px",
                    padding: "16px",
                    borderRadius: "12px",
                    border: "1px solid #e5e7eb",
                    fontSize: "15px",
                    outline: "none",
                    resize: "none",
                }}
            />

            <button
                onClick={handleGenerate}
                disabled={plan === "free" && credits <= 0}
                style={{
                    marginTop: "20px",
                    padding: "12px 22px",
                    background:
                        plan === "free" && credits <= 0 ? "#c7c9f2" : "#4f46e5",
                    color: "#ffffff",
                    borderRadius: "10px",
                    border: "none",
                    fontWeight: 700,
                    fontSize: "14px",
                    cursor:
                        plan === "free" && credits <= 0 ? "not-allowed" : "pointer",
                }}
            >
                Generate Idea
            </button>

            {output && (
                <div
                    style={{
                        marginTop: "40px",
                        padding: "20px",
                        borderRadius: "12px",
                        background: "#f8fafc",
                        border: "1px solid #e5e7eb",
                        whiteSpace: "pre-line",
                        fontSize: "15px",
                    }}
                >
                    {output}
                </div>
            )}
        </main>
    );
}