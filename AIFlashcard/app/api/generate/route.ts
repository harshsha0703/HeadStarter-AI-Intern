import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";

export async function POST(req: Request) {
  const { topic } = await req.json();

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "Create flashcards in JSON with question and answer."
      },
      {
        role: "user",
        content: topic
      }
    ]
  });

  return NextResponse.json({
    flashcards: JSON.parse(completion.choices[0].message.content || "[]")
  });
}
