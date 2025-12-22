import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";

export async function POST(req: Request) {
  const { pantry } = await req.json();

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Return recipes in JSON array format" },
      { role: "user", content: pantry },
    ],
  });

  return NextResponse.json({
    recipes: JSON.parse(completion.choices[0].message.content || "[]"),
  });
}
