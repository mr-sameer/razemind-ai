"use client";

import { useState } from "react";

export default function HashtagTool() {
  // ✅ input properly defined (NO red underline)
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [credits, setCredits] = useState(10);
  const [plan] = useState<"free" | "pro">("free");

  const handleGenerate = async () => {
    if (!input.trim()) return;

    if (plan === "free" && credits <= 0) {
      setOutput("❌ Free credits over. Upgrade to continue.");
      return;
    }

    setOutput("Thinking...");

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // ✅ template string + input in scope
        prompt: `Generate 20 viral hashtags for: ${input}`,
      }),
    });

    const data = await res.json();

    if (plan === "free") setCredits((c) => c - 1);
    setOutput(data.result);
  };

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "80px 24px" }}>
      <h1 style={{ fontSize: "32px", fontWeight: 800 }}>
        Hashtag Generator
      </h1>

      <div style={{ marginTop: "12px", fontWeight: 600 }}>
        Credits left: {credits}
      </div>

      <textarea
        placeholder="Example: Travel reels for Instagram"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: "100%",
          height: "140px",
          marginTop: "24px",
          padding: "16px",
          borderRadius: "12px",
          border: "1px solid #e5e7eb",
        }}
      />

      <button
        onClick={handleGenerate}
        style={{
          marginTop: "20px",
          padding: "12px 22px",
          background: "#4f46e5",
          color: "#fff",
          borderRadius: "10px",
          border: "none",
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        Generate Hashtags
      </button>

      {output && (
        <div
          style={{
            marginTop: "32px",
            padding: "20px",
            background: "#f8fafc",
            borderRadius: "12px",
            whiteSpace: "pre-line",
          }}
        >
          {output}
        </div>
      )}
    </main>
  );
}