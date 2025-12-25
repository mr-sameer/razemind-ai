"use client";

import { useEffect, useState } from "react";

type HookData = {
  type: string;
  opening: string;
  text: string;
  hint: string;
};

export default function WorkflowPage() {
  const [hook, setHook] = useState<HookData | null>(null);
  const [caption, setCaption] = useState<string | null>(null);
  const [hashtags, setHashtags] = useState<string | null>(null);
  const fullPost =
    hook && caption && hashtags
      ? `🎙️ ${hook.opening}

${hook.text}

${caption}

${hashtags}`
      : "";
  const copyFullPost = () => {
    if (!fullPost) return;
    navigator.clipboard.writeText(fullPost);
    alert("✅ Full post copied! Ready to paste 🚀");
  };


  useEffect(() => {
    const savedHook = localStorage.getItem("workflow_hook");
    const savedCaption = localStorage.getItem("workflow_caption");
    const savedHashtags = localStorage.getItem("workflow_hashtags");

    if (savedHook) setHook(JSON.parse(savedHook));
    if (savedCaption) setCaption(savedCaption);
    if (savedHashtags) setHashtags(savedHashtags);
  }, []);

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "72px 20px",
      }}
    >
      <h1 style={{ fontSize: "32px", fontWeight: 800 }}>
        Creator Workflow
      </h1>

      <p style={{ marginTop: "8px", maxWidth: "600px" }}>
        Your selected hook, caption and hashtags — ready to post.
      </p>

      {/* 🎯 HOOK */}
      <div style={{ marginTop: "40px", background: "#fff", border: "1px solid #e5e7eb", borderRadius: "16px", padding: "24px" }}>
        <strong>🎯 Hook</strong>

        {!hook && <p style={{ marginTop: "12px", color: "#64748b" }}>No hook selected yet.</p>}

        {hook && (
          <div style={{ marginTop: "16px", background: "#f8fafc", padding: "16px", borderRadius: "12px" }}>
            <div style={{ fontSize: "12px", fontWeight: 700, color: "#4f46e5" }}>
              [{hook.type}]
            </div>
            <div style={{ fontWeight: 700, marginTop: "6px" }}>🎙️ {hook.opening}</div>
            <div style={{ marginTop: "6px" }}>{hook.text}</div>
            <div style={{ marginTop: "8px", fontSize: "13px", color: "#64748b" }}>
              💡 {hook.hint}
            </div>
          </div>
        )}
      </div>

      {/* ✍️ CAPTION */}
      <div style={{ marginTop: "32px", background: "#fff", border: "1px solid #e5e7eb", borderRadius: "16px", padding: "24px" }}>
        <strong>✍️ Caption</strong>

        {!caption && <p style={{ marginTop: "12px", color: "#64748b" }}>No caption added yet.</p>}

        {caption && (
          <div style={{ marginTop: "12px", background: "#f8fafc", padding: "16px", borderRadius: "12px", whiteSpace: "pre-line" }}>
            {caption}
          </div>
        )}
      </div>

      {/* #️⃣ HASHTAGS */}
      <div style={{ marginTop: "32px", background: "#fff", border: "1px solid #e5e7eb", borderRadius: "16px", padding: "24px" }}>
        <strong>#️⃣ Hashtags</strong>

        {!hashtags && <p style={{ marginTop: "12px", color: "#64748b" }}>No hashtags added yet.</p>}

        {hashtags && (
          <div style={{ marginTop: "12px", background: "#f8fafc", padding: "16px", borderRadius: "12px" }}>
            {hashtags}
          </div>
        )}
      </div>

      {/* 📋 COPY FULL POST */}
      {hook && caption && hashtags && (
        <button
          onClick={copyFullPost}
          style={{
            marginTop: "24px",
            width: "100%",
            padding: "16px",
            background: "#4f46e5",
            color: "#fff",
            borderRadius: "14px",
            border: "none",
            fontWeight: 800,
            fontSize: "15px",
            cursor: "pointer",
          }}
        >
          📋 Copy Full Post
        </button>
      )}
      <div
        style={{
          marginTop: "40px",
          background: "#eef2ff",
          borderRadius: "16px",
          padding: "24px",
        }}
      >
        <strong>🧠 How to Post This Content</strong>

        <ol style={{ marginTop: "12px", paddingLeft: "18px" }}>
          <li>🎬 Start your reel with the hook opening line</li>
          <li>🗣 Continue speaking the hook text naturally</li>
          <li>✍️ Paste the caption in description</li>
          <li>#️⃣ Add hashtags at the end of caption</li>
          <li>🚀 Post during your usual high-engagement time</li>
        </ol>
      </div>
    </main>
  );
}