import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";

export async function POST(req: Request) {
  const { topic, deadline } = await req.json();

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "Create a study plan in JSON with daily tasks and practice questions.",
      },
      {
        role: "user",
        content: `Topic: ${topic}\nDeadline: ${deadline}`,
      },
    ],
  });

  return NextResponse.json(
    JSON.parse(completion.choices[0].message.content || "{}")
  );
}
