import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You are a helpful customer support assistant answering questions clearly and professionally.",
      },
      ...messages,
    ],
  });

  return NextResponse.json({
    reply: completion.choices[0].message,
  });
}
