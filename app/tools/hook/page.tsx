"use client";

import { useState } from "react";

export default function HookTool() {
  const [platform, setPlatform] = useState("Instagram Reels");
  const [niche, setNiche] = useState("Gaming");
  const [audience, setAudience] = useState("Indian (Hinglish)");
  const [goal, setGoal] = useState("More Views");
  const [style, setStyle] = useState("Curiosity");
  const [output, setOutput] = useState<string[]>([]);

  const generateHooks = () => {
    // 🇮🇳 Hinglish + Indian psychology tuned hooks
    setOutput([
      "Bhai sach bolu to 90% log yahin galti karte hain",
      "Agar tum beginner ho, ye video skip mat karna",
      "Koi nahi batata ye trick, isliye views nahi aate",
      "99% creators ko ye cheez samajh hi nahi aati",
      "Maine ye galti 1 saal ki, tum mat karna",
      "Stop scrolling ❌ agar tum growth chahte ho",
    ]);
  };

  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "72px 20px",
      }}
    >
      {/* HEADER */}
      <h1 style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
        Viral Hook Generator
      </h1>
      <p style={{ marginTop: "12px", maxWidth: "640px" }}>
        Create Indian-audience-optimized hooks that stop scrolling and boost
        views.
      </p>

      {/* CONTEXT CARD */}
      <div
        style={{
          marginTop: "40px",
          background: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: "16px",
          padding: "24px",
        }}
      >
        <strong style={{ fontSize: "15px" }}>Content Context</strong>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <div>
            <label className="field-label">Platform</label>
            <select
              className="select-premium"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
            >
              <option>Instagram Reels</option>
              <option>YouTube Shorts</option>
              <option>YouTube Long</option>
            </select>
          </div>

          <div>
            <label className="field-label">Niche</label>
            <select
              className="select-premium"
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
            >
              <option>Gaming</option>
              <option>Motivation</option>
              <option>Finance</option>
              <option>Education</option>
              <option>Fitness</option>
            </select>
          </div>

          <div>
            <label className="field-label">Audience</label>
            <select
              className="select-premium"
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
            >
              <option>Indian (Hinglish)</option>
              <option>Indian (Hindi)</option>
              <option>Global (English)</option>
            </select>
          </div>

          <div>
            <label className="field-label">Goal</label>
            <select
              className="select-premium"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            >
              <option>More Views</option>
              <option>More Followers</option>
              <option>Authority</option>
            </select>
          </div>
        </div>
      </div>

      {/* STYLE */}
      <div
        style={{
          marginTop: "32px",
          background: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: "16px",
          padding: "24px",
        }}
      >
        <strong style={{ fontSize: "15px" }}>Hook Style</strong>

        <div style={{ display: "flex", gap: "20px", marginTop: "12px" }}>
          {["Curiosity", "Aggressive", "Emotional"].map((s) => (
            <label key={s} style={{ fontWeight: 600 }}>
              <input
                type="radio"
                checked={style === s}
                onChange={() => setStyle(s)}
              />{" "}
              {s}
            </label>
          ))}
        </div>
      </div>

      {/* GENERATE BUTTON */}
      <button
        onClick={generateHooks}
        style={{
          marginTop: "40px",
          width: "100%",
          padding: "16px",
          background: "#4f46e5",
          color: "#ffffff",
          border: "none",
          borderRadius: "14px",
          fontWeight: 800,
          fontSize: "15px",
          cursor: "pointer",
        }}
      >
        Generate Viral Hooks 🚀
      </button>

      {/* OUTPUT */}
      {output.length > 0 && (
        <div
          style={{
            marginTop: "40px",
            background: "#f8fafc",
            border: "1px solid #e5e7eb",
            borderRadius: "16px",
            padding: "24px",
          }}
        >
          <strong>Hooks ready to post 👇</strong>

          <ul style={{ marginTop: "16px" }}>
            {output.map((hook, i) => (
              <li
                key={i}
                style={{
                  marginBottom: "10px",
                  fontWeight: 600,
                }}
              >
                {hook}
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}