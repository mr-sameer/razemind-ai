"use client";

import { useEffect, useState } from "react";

type HookData = {
  type: string;
  opening: string;
  text: string;
  hint: string;
};
type WorkflowItem = {
  id: string;
  title: string; // 👈 NEW
  platform: "Instagram" | "YouTube";
  hook: HookData;
  caption: string;
  hashtags: string;
  createdAt: number;
};


export default function WorkflowPage() {
  const [hook, setHook] = useState<HookData | null>(null);
  const [caption, setCaption] = useState<string | null>(null);
  const [hashtags, setHashtags] = useState<string | null>(null);
  const [platform, setPlatform] = useState<"Instagram" | "YouTube">("Instagram");
  const [history, setHistory] = useState<WorkflowItem[]>([]);
  const [historyFilter, setHistoryFilter] = useState<
    "ALL" | "Instagram" | "YouTube"
  >("ALL");
  const [workflowTitle, setWorkflowTitle] = useState("");

  const platformHints = {
    Instagram: {
      captionLabel: "👇 Caption (Instagram style)",
      hashtagLabel: "#️⃣ Hashtags (end me daale)",
      emojiBoost: true,
    },
    YouTube: {
      captionLabel: "📝 Description",
      hashtagLabel: "🏷 Tags",
      emojiBoost: false,
    },
  };

  useEffect(() => {
    const h = localStorage.getItem("workflow_hook");
    const c = localStorage.getItem("workflow_caption");
    const t = localStorage.getItem("workflow_hashtags");

    if (h) setHook(JSON.parse(h));
    if (c) setCaption(c);
    if (t) setHashtags(t);

  }, []);

  /* ---------- LOAD HISTORY ---------- */
  useEffect(() => {
    const saved = localStorage.getItem("workflow_history");
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  /* 🔥 PLATFORM-WISE SMART FORMAT */
  const formattedPost =
    hook && caption && hashtags
      ? platform === "Instagram"
        ? `🎙️ ${hook.opening}

${hook.text}

👇 Caption
${caption}

#️⃣ Hashtags
${hashtags}`
        : `${hook.opening}

${hook.text}

${caption}

Tags:
${hashtags}`
      : "";

  const copyPost = () => {
    if (!formattedPost || !hook || !caption || !hashtags) return;

    navigator.clipboard.writeText(formattedPost);

    const newItem: WorkflowItem = {
      id: Date.now().toString(),
      title: workflowTitle || "Untitled Workflow",
      platform,
      hook,
      caption,
      hashtags,
      createdAt: Date.now(),
    };

    const updated = [newItem, ...history].slice(0, 5); // last 5 only
    setHistory(updated);
    localStorage.setItem("workflow_history", JSON.stringify(updated));

    alert("✅ Post copied & workflow saved");
  };

  /* 🔮 SMART CTA */
  const recommendedCTA =
    platform === "Instagram"
      ? hook?.type === "DIRECT"
        ? "👉 Follow for daily growth tips"
        : "👉 Save & follow for more"
      : hook?.type === "CURIOUS"
        ? "👉 Subscribe to know the full truth"
        : "👉 Subscribe for more videos like this";
  const filteredHistory =
    historyFilter === "ALL"
      ? history
      : history.filter((item) => item.platform === historyFilter);
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "72px 20px" }}>
      <h1 style={{ fontSize: 32, fontWeight: 800 }}>Creator Workflow</h1>
      <p style={{ marginTop: 8, maxWidth: 600 }}>
        Zero thinking required. Optimized content — ready to post.
      </p>

      {/* PLATFORM */}
      <div style={{ marginTop: 24 }}>
        <label className="field-label">Platform</label>
        <select
          className="select-premium"
          value={platform}
          onChange={(e) =>
            setPlatform(e.target.value as "Instagram" | "YouTube")
          }
        >
          <option>Instagram</option>
          <option>YouTube</option>
        </select>
      </div>
      {/* HOOK */}
      <Section title="🎯 Hook">
        {!hook && <Muted>No hook selected yet.</Muted>}
        {hook && (
          <Box>
            <Badge>[{hook.type}]</Badge>
            <strong>🎙️ {hook.opening}</strong>
            <div>{hook.text}</div>
            <Hint>💡 {hook.hint}</Hint>
          </Box>
        )}
      </Section>

      {/* CAPTION */}
      <Section title={platformHints[platform].captionLabel}>
        {!caption && <Muted>No caption added yet.</Muted>}
        {caption && (
          <Box>
            {platformHints[platform].emojiBoost && "🔥 "}
            {caption}
          </Box>
        )}
      </Section>

      {/* HASHTAGS */}
      <Section title={platformHints[platform].hashtagLabel}>
        {!hashtags && <Muted>No hashtags added yet.</Muted>}
        {hashtags && <Box>{hashtags}</Box>}
      </Section>

      {/* PREVIEW */}
      {formattedPost && (
        <Section title="👀 Final Post Preview">
          <Box>{formattedPost}</Box>
        </Section>
      )}

      {/* 🚀 AUTO CTA + ENGAGEMENT */}
      {hook && caption && hashtags && (
        <Section title="🚀 Auto Growth Insight">
          <Box>
            <strong>🔔 Recommended CTA</strong>
            <div style={{ marginTop: 8, fontWeight: 700 }}>
              {recommendedCTA}
            </div>

            <div style={{ marginTop: 16, fontSize: 14 }}>
              👀 Views Potential:{" "}
              <strong>
                {["DIRECT", "CURIOUS"].includes(hook.type)
                  ? "High"
                  : "Medium"}
              </strong>
              <br />
              ❤️ Engagement:{" "}
              <strong>
                {(caption?.length ?? 0) > 120 ? "High" : "Medium"}
              </strong>
              <br />
              👥 Growth:{" "}
              <strong>
                {platform === "Instagram" ? "Medium–High" : "Medium"}
              </strong>
            </div>
          </Box>
        </Section>
      )}
      {hook && caption && hashtags && (
        <div style={{ marginTop: 32 }}>
          <label className="field-label">
            Workflow Title (optional)
          </label>

          <input
            value={workflowTitle}
            onChange={(e) => setWorkflowTitle(e.target.value)}
            placeholder="e.g. FreeFire Reel – High Views"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #e5e7eb",
              marginTop: "6px",
            }}
          />
        </div>
      )}
      {/* COPY */}
      {formattedPost && (
        <button style={copyBtn} onClick={copyPost}>
          📋 Copy {platform} Post
        </button>
      )}

      {/* INTELLIGENCE */}
      {formattedPost && (
        <div style={guideBox}>
          <strong>🧠 Posting Intelligence</strong>
          <ul style={{ marginTop: 12, paddingLeft: 18 }}>
            <li>🎬 First 2 seconds = hook opening</li>
            <li>✍️ Caption first line must hit</li>
            <li>#️⃣ Hashtags always at the end</li>
            <li>⏰ Post at peak audience time</li>
          </ul>
        </div>
      )}
      {/* ---------------- HISTORY ---------------- */}
      {history.length > 0 && (
        <div style={{ marginTop: 56 }}>
          <h3 style={{ fontWeight: 800, fontSize: 20 }}>
            🕘 Recent Workflows
          </h3>
          <p style={{ marginTop: 4, fontSize: 14, color: "#64748b" }}>
            Reuse your previous successful content
          </p>
          {/* FILTER BUTTONS */}
          <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
            {["ALL", "Instagram", "YouTube"].map((p) => (
              <button
                key={p}
                onClick={() =>
                  setHistoryFilter(p as "ALL" | "Instagram" | "YouTube")
                }
                style={{
                  padding: "6px 12px",
                  borderRadius: 8,
                  border: "1px solid #e5e7eb",
                  background:
                    historyFilter === p ? "#4f46e5" : "#ffffff",
                  color: historyFilter === p ? "#fff" : "#334155",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {p}
              </button>
            ))}
          </div>
          <div
            style={{
              marginTop: 20,
              display: "grid",
              gap: 16,
            }}
          >
            {filteredHistory.map((item) => (
              <div
                key={item.id}
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: 16,
                  padding: 20,
                  background: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {/* META */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: 13,
                    color: "#64748b",
                  }}
                >
                  <span>
                    {item.platform} •{" "}
                    {new Date(item.createdAt).toLocaleDateString()}
                  </span>

                  <span
                    style={{
                      padding: "4px 10px",
                      borderRadius: 999,
                      background: "#eef2ff",
                      color: "#4f46e5",
                      fontWeight: 700,
                      fontSize: 12,
                    }}
                  >
                    Saved
                  </span>
                </div>

                {/* CONTENT */}
                <div style={{ fontWeight: 800, fontSize: 16 }}>
                  📌 {item.title}
                </div>

                <div style={{ marginTop: 4, color: "#64748b", fontSize: 14 }}>
                  🎙️ {item.hook.opening}
                </div>

                {/* ACTIONS */}
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    marginTop: 4,
                  }}
                >
                  <button
                    onClick={() => {
                      setHook(item.hook);
                      setCaption(item.caption);
                      setHashtags(item.hashtags);
                      setPlatform(item.platform);
                      setWorkflowTitle(item.title);
                    }}
                    style={{
                      padding: "10px 16px",
                      background: "#4f46e5",
                      color: "#ffffff",
                      borderRadius: 10,
                      border: "none",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    🔁 Reuse
                  </button>

                  <button
                    onClick={() => {
                      const filtered = history.filter(
                        (h) => h.id !== item.id
                      );
                      setHistory(filtered);
                      localStorage.setItem(
                        "workflow_history",
                        JSON.stringify(filtered)
                      );
                    }}
                    style={{
                      padding: "10px 16px",
                      background: "#f1f5f9",
                      color: "#0f172a",
                      borderRadius: 10,
                      border: "1px solid #e5e7eb",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    🗑 Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

/* UI HELPERS */
const Section = ({ title, children }: any) => (
  <div style={card}>
    <strong>{title}</strong>
    {children}
  </div>
);

const Box = ({ children }: any) => (
  <div style={box}>{children}</div>
);

const Muted = ({ children }: any) => (
  <p style={{ marginTop: 12, color: "#64748b" }}>{children}</p>
);

const Badge = ({ children }: any) => (
  <div style={{ fontSize: 12, fontWeight: 700, color: "#4f46e5" }}>
    {children}
  </div>
);

const Hint = ({ children }: any) => (
  <div style={{ marginTop: 6, fontSize: 13, color: "#64748b" }}>{children}</div>
);

const card = {
  marginTop: 32,
  background: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: 16,
  padding: 24,
};

const box = {
  marginTop: 12,
  background: "#f8fafc",
  padding: 16,
  borderRadius: 12,
  whiteSpace: "pre-line" as const,
};

const copyBtn = {
  marginTop: 28,
  width: "100%",
  padding: 16,
  background: "#4f46e5",
  color: "#fff",
  borderRadius: 14,
  border: "none",
  fontWeight: 800,
};

const guideBox = {
  marginTop: 40,
  background: "#eef2ff",
  borderRadius: 16,
  padding: 24,
};
