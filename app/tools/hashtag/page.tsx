"use client";

import { useState } from "react";

type HashtagGroup = {
  type: string;
  tags: string[];
  hint: string;
};

export default function HashtagTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<HashtagGroup[]>([]);
  const [credits, setCredits] = useState(10);
  const [plan] = useState<"free" | "pro">("free");
  const [platform, setPlatform] = useState<
    "Instagram Reels" | "YouTube Shorts" | "YouTube Long"
  >("Instagram Reels");

  const handleGenerate = async () => {
  if (!input.trim()) return;

  if (plan === "free" && credits <= 0) {
    setOutput([
      {
        type: "INFO",
        tags: [],
        hint: "❌ Free credits over. Upgrade to continue.",
      },
    ]);
    return;
  }

  let hashtags: HashtagGroup[] = [];

  if (platform === "Instagram Reels") {
    hashtags = [
      {
        type: "REACH",
        tags: ["#reels", "#viralreels", "#explorepage", "#trendingreels"],
        hint: "Instagram ke naye audience tak pahunchne ke liye",
      },
      {
        type: "NICHE",
        tags: ["#gamingindia", "#freefire", "#mobilegaming"],
        hint: "Instagram algorithm ko niche samjhane ke liye",
      },
      {
        type: "CONVERT",
        tags: ["#followformore", "#dailycontent"],
        hint: "Profile visits aur followers badhane ke liye",
      },
    ];
  }

  if (platform === "YouTube Shorts") {
    hashtags = [
      {
        type: "REACH",
        tags: ["#shorts", "#ytshorts", "#viralshorts"],
        hint: "YouTube Shorts feed me reach ke liye",
      },
      {
        type: "NICHE",
        tags: ["#freefire", "#gaming", "#shortsgaming"],
        hint: "YouTube ko video topic samjhane ke liye",
      },
      {
        type: "CONVERT",
        tags: ["#subscribe", "#dailyshorts"],
        hint: "Subscribers grow karne ke liye",
      },
    ];
  }

  if (platform === "YouTube Long") {
    hashtags = [
      {
        type: "REACH",
        tags: ["#youtube", "#newvideo"],
        hint: "Initial discovery ke liye",
      },
      {
        type: "NICHE",
        tags: ["#freefiregameplay", "#gamingvideo"],
        hint: "Search + recommendation ke liye",
      },
      {
        type: "CONVERT",
        tags: ["#subscribe", "#watchtillend"],
        hint: "Watch time aur subscribers ke liye",
      },
    ];
  }

  // ✅ UI OUTPUT
  setOutput(hashtags);

  // ✅ SAVE TO WORKFLOW (CORRECT PLACE)
  const allTags = hashtags.flatMap((g) => g.tags).join(" ");
  localStorage.setItem("workflow_hashtags", allTags);

  if (plan === "free") setCredits((c) => c - 1);
};
  // ✅ SAVE TO WORKFLOW

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "72px 20px",
      }}
    >
      {/* HEADER */}
      <h1 style={{ fontSize: "32px", fontWeight: 800 }}>
        Hashtag Generator
      </h1>

      <p style={{ marginTop: "8px", maxWidth: "600px" }}>
        Generate hashtags with clear purpose — reach, niche clarity, and
        conversion.
      </p>

      <div style={{ marginTop: "12px", fontWeight: 600 }}>
        Credits left: {credits}
      </div>
      <div style={{ marginTop: "24px" }}>
        <label className="field-label">Platform</label>
        <select
          className="select-premium"
          value={platform}
          onChange={(e) =>
            setPlatform(e.target.value as
              | "Instagram Reels"
              | "YouTube Shorts"
              | "YouTube Long")
          }
        >
          <option>Instagram Reels</option>
          <option>YouTube Shorts</option>
          <option>YouTube Long</option>
        </select>
      </div>
      {/* INPUT */}
      <textarea
        placeholder="Example: Free Fire gaming reels for Indian audience"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: "100%",
          height: "120px",
          marginTop: "24px",
          padding: "16px",
          borderRadius: "12px",
          border: "1px solid #e5e7eb",
        }}
      />

      {/* BUTTON */}
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
        Generate Hashtags 🚀
      </button>
      <div style={{ marginTop: "8px", fontSize: "13px", color: "#64748b" }}>
        Hashtags will be automatically added to workflow
      </div>
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
          <strong>Hashtags ready to use 👇</strong>

          <div className="hook-grid">
            {output.map((group, i) => (
              <div key={i} className="hook-card">
                {/* TYPE */}
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#4f46e5",
                    marginBottom: "6px",
                  }}
                >
                  [{group.type}]
                </div>

                {/* TAGS */}
                <div style={{ fontWeight: 600 }}>
                  {group.tags.join(" ")}
                </div>

                {/* HINT */}
                <div
                  style={{
                    marginTop: "6px",
                    fontSize: "13px",
                    color: "#64748b",
                  }}
                >
                  💡 {group.hint}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}