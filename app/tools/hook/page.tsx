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
    // 🔥 MOCK OUTPUT (AI baad me connect karenge)
    setOutput([
      "Nobody tells gamers this secret 🤫",
      "Stop scrolling if you play games 🎮",
      "I tried this gaming trick for 7 days… shocking result",
      "90% gamers make this mistake daily",
      "This one habit is killing your gameplay",
    ]);
  };

  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "64px 16px" }}>
      <h1>Viral Hook Generator</h1>
      <p>Create scroll-stopping hooks made for social media growth.</p>

      {/* CONTEXT ENGINE */}
      <div style={{ marginTop: "32px", display: "grid", gap: "16px" }}>
        <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
          <option>Instagram Reels</option>
          <option>YouTube Shorts</option>
          <option>YouTube Long</option>
        </select>

        <select value={niche} onChange={(e) => setNiche(e.target.value)}>
          <option>Gaming</option>
          <option>Motivation</option>
          <option>Finance</option>
          <option>Education</option>
          <option>Fitness</option>
        </select>

        <select value={audience} onChange={(e) => setAudience(e.target.value)}>
          <option>Indian (Hinglish)</option>
          <option>Global (English)</option>
          <option>Gen-Z</option>
        </select>

        <select value={goal} onChange={(e) => setGoal(e.target.value)}>
          <option>More Views</option>
          <option>More Followers</option>
          <option>Authority</option>
        </select>
      </div>

      {/* STYLE */}
      <div style={{ marginTop: "24px" }}>
        <strong>Hook Style</strong>
        <div style={{ display: "flex", gap: "16px", marginTop: "8px" }}>
          {["Curiosity", "Aggressive", "Emotional"].map((s) => (
            <label key={s}>
              <input
                type="radio"
                name="style"
                value={s}
                checked={style === s}
                onChange={() => setStyle(s)}
              />{" "}
              {s}
            </label>
          ))}
        </div>
      </div>

      {/* GENERATE */}
      <button
        onClick={generateHooks}
        style={{
          marginTop: "32px",
          padding: "14px",
          width: "100%",
          background: "#4f46e5",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          fontWeight: 700,
        }}
      >
        Generate Viral Hooks
      </button>

      {/* OUTPUT */}
      {output.length > 0 && (
        <div style={{ marginTop: "32px" }}>
          <h3>Hooks you can post today 👇</h3>
          <ul style={{ marginTop: "12px" }}>
            {output.map((hook, i) => (
              <li key={i} style={{ marginBottom: "8px" }}>
                {hook}
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}