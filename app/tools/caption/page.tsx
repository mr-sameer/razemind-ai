"use client";

import { useState, useEffect } from "react";

export default function CaptionTool() {
  const [platform, setPlatform] = useState("Instagram Reels");
  const [goal, setGoal] = useState("More Views");
  const [tone, setTone] = useState("Hinglish");
  const [cta, setCta] = useState("Follow for more");
  const [caption, setCaption] = useState("");
  const [hook, setHook] = useState<any>(null);
  const [variants, setVariants] = useState<string[]>([]);
  const [aiVersion, setAiVersion] = useState<string | null>(null);

  /* 🔁 Reset */
  const resetToAI = () => {
    if (!aiVersion) return;
    setCaption(aiVersion);
  };

  /* 🔹 Load hook from workflow */
  useEffect(() => {
    const savedHook = localStorage.getItem("workflow_hook");
    if (savedHook) setHook(JSON.parse(savedHook));
  }, []);

  /* ✨ Generate Caption */
  const generateCaption = () => {
    const baseHook = hook
      ? `${hook.opening}\n${hook.text}`
      : "Bhai sach bolu to ye cheez ignore mat karo";

    const tonePrefix =
      tone === "Professional"
        ? "Here’s a clear breakdown:"
        : tone === "Casual"
        ? "Dekho simple si baat hai,"
        : "Bhai sach bolu to";

    const short = `${tonePrefix}
${baseHook}

👉 ${cta}`;

    const balanced = `${tonePrefix}
${baseHook}

Is type ka content ${
      goal === "More Views"
        ? "zyada views laata hai"
        : goal === "More Followers"
        ? "followers badhata hai"
        : "authority build karta hai"
    }.

${
      platform === "Instagram Reels"
        ? "Reels algorithm isko push karta hai."
        : "Shorts feed me ye better perform karta hai."
    }

👉 ${cta}`;

    const ctaHeavy = `${tonePrefix}
${baseHook}

Agar tum serious ho growth ke liye,
to ye cheez daily follow karo.

${
      goal === "Authority"
        ? "Consistency se trust build hota hai."
        : "Isse reach + engagement dono improve hote hain."
    }

💬 Comment karo agar relate hua  
⭐ Save karo future ke liye  
👉 ${cta}`;

    setVariants([short, balanced, ctaHeavy]);
  };

  /* 💾 Save to workflow */
  const saveCaption = () => {
    if (!caption.trim()) return;
    localStorage.setItem("workflow_caption", caption);
    alert("✅ Caption saved to workflow");
  };

  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "72px 20px" }}>
      <h1 style={{ fontSize: "32px", fontWeight: 800 }}>
        Caption Generator
      </h1>

      <p style={{ marginTop: "8px", maxWidth: "620px" }}>
        AI captions aligned with your hook, platform & goal.
      </p>

      {/* CONTEXT */}
      <div style={{ marginTop: "40px", border: "1px solid #e5e7eb", borderRadius: "16px", padding: "24px" }}>
        <strong>Content Context</strong>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginTop: "20px" }}>
          <select value={platform} onChange={(e) => setPlatform(e.target.value)} className="select-premium">
            <option>Instagram Reels</option>
            <option>YouTube Shorts</option>
          </select>

          <select value={goal} onChange={(e) => setGoal(e.target.value)} className="select-premium">
            <option>More Views</option>
            <option>More Followers</option>
            <option>Authority</option>
          </select>

          <select value={tone} onChange={(e) => setTone(e.target.value)} className="select-premium">
            <option>Hinglish</option>
            <option>Casual</option>
            <option>Professional</option>
          </select>

          <select value={cta} onChange={(e) => setCta(e.target.value)} className="select-premium">
            <option>Follow for more</option>
            <option>Comment your thoughts</option>
            <option>Save this post</option>
          </select>
        </div>
      </div>

      {/* GENERATE */}
      <button onClick={generateCaption} style={{ marginTop: "32px", width: "100%", padding: "16px", background: "#4f46e5", color: "#fff", borderRadius: "14px", border: "none", fontWeight: 800 }}>
        ✨ Generate Caption
      </button>

      {/* VARIANTS */}
      {variants.length > 0 && (
        <div style={{ marginTop: "32px", border: "1px solid #e5e7eb", borderRadius: "16px", padding: "24px" }}>
          <strong>Choose a caption</strong>

          <div style={{ marginTop: "16px", display: "grid", gap: "16px" }}>
            {variants.map((v, i) => (
              <div key={i} style={{ background: "#f8fafc", padding: "16px", borderRadius: "12px" }}>
                <div style={{ fontSize: "12px", fontWeight: 700, color: "#4f46e5" }}>
                  {i === 0 ? "SHORT" : i === 1 ? "BALANCED" : "CTA-HEAVY"}
                </div>

                <div style={{ whiteSpace: "pre-line", marginTop: "8px" }}>{v}</div>

                <button
                  onClick={() => {
                    setCaption(v);
                    setAiVersion(v);
                  }}
                  style={{ marginTop: "12px", padding: "8px 14px", background: "#4f46e5", color: "#fff", borderRadius: "8px", border: "none", fontWeight: 700 }}
                >
                  Use this
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* EDITOR */}
      <div style={{ marginTop: "40px", border: "1px solid #e5e7eb", borderRadius: "16px", padding: "24px" }}>
        <strong>Caption Editor</strong>

        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Generated caption will appear here..."
          style={{ width: "100%", height: "220px", marginTop: "16px", padding: "16px", borderRadius: "12px", border: "1px solid #e5e7eb" }}
        />

        <button onClick={saveCaption} style={{ marginTop: "16px", padding: "12px 20px", background: "#0f172a", color: "#fff", borderRadius: "10px", border: "none", fontWeight: 700 }}>
          Save to Workflow
        </button>

        {aiVersion && (
          <button onClick={resetToAI} style={{ marginTop: "12px", padding: "10px 16px", background: "#f1f5f9", borderRadius: "10px", border: "1px solid #e5e7eb", fontWeight: 700 }}>
            ↩ Reset to AI version
          </button>
        )}
      </div>
    </main>
  );
}