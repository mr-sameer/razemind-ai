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
{history.length > 0 && (
  <div style={{ marginTop: 48 }}>
    <h3 style={{ fontWeight: 800 }}>🕘 Recent Workflows</h3>

    {history.map((item) => (
      <div
        key={item.id}
        style={{
          marginTop: 16,
          border: "1px solid #e5e7eb",
          borderRadius: 12,
          padding: 16,
          background: "#fff",
        }}
      >
        <div style={{ fontSize: 13, color: "#64748b" }}>
          {item.platform} • {new Date(item.createdAt).toLocaleString()}
        </div>

        <div style={{ marginTop: 8, fontWeight: 700 }}>
          🎙️ {item.hook.opening}
        </div>

        <div style={{ marginTop: 12, display: "flex", gap: 12 }}>
          {/* REUSE */}
          <button
            onClick={() => {
              setHook(item.hook);
              setCaption(item.caption);
              setHashtags(item.hashtags);
              setPlatform(item.platform);
            }}
          >
            🔁 Reuse
          </button>

          {/* DELETE */}
          <button
            onClick={() => {
              const filtered = history.filter((h) => h.id !== item.id);
              setHistory(filtered);
              localStorage.setItem(
                "workflow_history",
                JSON.stringify(filtered)
              );
            }}
          >
            🗑 Delete
          </button>
        </div>
      </div>
    ))}
  </div>
)}