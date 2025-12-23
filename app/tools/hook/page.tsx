"use client";

import { useState } from "react";

type HookItem = {
  type: string;
  text: string;
  opening: string;
  hint: string;
};

export default function HookTool() {
  const [platform, setPlatform] = useState("Instagram Reels");
  const [niche, setNiche] = useState("Gaming");
  const [audience, setAudience] = useState("Indian (Hinglish)");
  const [goal, setGoal] = useState("More Views");
  const [style, setStyle] = useState("Curiosity");
  const saveToWorkflow = (hook: {
    type: string;
    opening: string;
    text: string;
    hint: string;
  }) => {
    localStorage.setItem("workflow_hook", JSON.stringify(hook));
    alert("✅ Hook added to workflow");
  };

  const [output, setOutput] = useState<HookItem[]>([]);

  const copyHook = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const generateHooks = () => {
    setOutput([
      {
        type: "MISTAKE",
        opening:
          "Bhai sach bolu to 90% creators ek hi galti repeat kar rahe hain",
        text: "90% creators yahin galti karte hain",
        hint: "Beginner audience ke liye best — awareness create karta hai",
      },
      {
        type: "CURIOUS",
        opening: "Ek aisi trick hai jo koi openly nahi batata",
        text: "Koi nahi batata ye trick, isliye views nahi aate",
        hint: "Scroll stop ke liye — jab retention low ho",
      },
      {
        type: "FEAR",
        opening:
          "Agar tum beginner ho, ye baat miss ki to growth ruk jaayegi",
        text: "Agar tum beginner ho, ye skip kiya to growth ruk jaayegi",
        hint: "Urgency create karne ke liye — CTA strong banta hai",
      },
      {
        type: "RESULT",
        opening: "Is ek cheez ne meri reach literally 3x kar di",
        text: "Is ek cheez ne meri reach 3x kar di",
        hint: "Proof-based hooks — authority build karte hain",
      },
      {
        type: "DIRECT",
        opening: "Stop scrolling, agar tum sach me grow karna chahte ho",
        text: "Stop scrolling ❌ agar tum growth chahte ho",
        hint: "Aggressive hooks — high-competition niches ke liye",
      },
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

        <div className="pill-group">
          {["Curiosity", "Aggressive", "Emotional"].map((s) => (
            <button
              key={s}
              type="button"
              className={`pill ${style === s ? "active" : ""}`}
              onClick={() => setStyle(s)}
            >
              {s}
            </button>
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

          <div className="hook-grid">
            {output.map((hook, i) => (
              <div key={i} className="hook-card">
                <button
                  className="copy-btn"
                  onClick={() => copyHook(hook.text)}
                >
                  Copy
                </button>
                <button
                  onClick={() => saveToWorkflow(hook)}
                  style={{
                    marginTop: "10px",
                    width: "100%",
                    padding: "8px",
                    borderRadius: "10px",
                    border: "1px solid #e5e7eb",
                    background: "#ffffff",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  ➕ Use in Workflow
                </button>
                {/* TYPE */}
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#4f46e5",
                    marginBottom: "6px",
                  }}
                >
                  [{hook.type}]
                </div>

                {/* 🎙️ OPENING LINE */}
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    marginBottom: "6px",
                  }}
                >
                  🎙️ {hook.opening}
                </div>

                {/* HOOK TEXT */}
                <div style={{ marginTop: "4px" }}>
                  ✍️ <strong>Caption:</strong> {hook.text}
                </div>

                {/* HINT */}
                <div
                  style={{
                    marginTop: "6px",
                    fontSize: "13px",
                    color: "#64748b",
                  }}
                >
                  💡 {hook.hint}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}