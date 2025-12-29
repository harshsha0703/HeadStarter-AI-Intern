import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";

export async function POST(req: Request) {
  const { resume, job } = await req.json();

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "Analyze the resume against the job description and return JSON with matchScore, missingSkills, and summary.",
      },
      {
        role: "user",
        content: `Resume:\n${resume}\n\nJob:\n${job}`,
      },
    ],
  });

  return NextResponse.json(
    JSON.parse(completion.choices[0].message.content || "{}")
  );
}
