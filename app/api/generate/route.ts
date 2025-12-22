import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  // Simulate delay (real AI feel)
  await new Promise((res) => setTimeout(res, 800));

  return NextResponse.json({
    result: `🔥 Razemind AI (Mock)

Topic: ${prompt}

1. Create a short reel exposing a common mistake in this niche.
2. Start your video with a strong hook like “Most people don’t know this…”.
3. Show before vs after results in under 7 seconds.
4. Ask a controversial question to boost comments.
5. End with a CTA: “Follow for daily growth tips.”`,
  });
}