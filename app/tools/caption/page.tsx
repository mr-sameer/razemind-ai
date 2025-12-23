"use client";

import { useState } from "react";

export default function CaptionTool() {
  const [caption, setCaption] = useState("");

  const saveCaption = () => {
    if (!caption.trim()) return;
    localStorage.setItem("workflow_caption", caption);
    alert("✅ Caption saved to workflow");
  };

  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "72px 20px",
      }}
    >
      <h1 style={{ fontSize: "32px", fontWeight: 800 }}>
        Caption Editor
      </h1>

      <p style={{ marginTop: "8px", maxWidth: "600px" }}>
        Write or edit your caption. This will be used in your posting workflow.
      </p>

      <textarea
        placeholder="Write your caption here..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        style={{
          width: "100%",
          height: "200px",
          marginTop: "24px",
          padding: "16px",
          borderRadius: "12px",
          border: "1px solid #e5e7eb",
          fontSize: "15px",
          resize: "vertical",
        }}
      />

      <button
        onClick={saveCaption}
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
        Save to Workflow
      </button>
    </main>
  );
}