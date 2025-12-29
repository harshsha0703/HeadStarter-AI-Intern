"use client";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import ResultCard from "@/components/ResultCard";

export default function Home() {
  const [resume, setResume] = useState("");
  const [job, setJob] = useState("");
  const [result, setResult] = useState<any>(null);

  const analyze = async () => {
    const res = await fetch("/api/analyze", {
      method: "POST",
      body: JSON.stringify({ resume, job }),
    });
    const data = await res.json();
    setResult(data);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>AI Resume Analyzer</h1>

      <TextField
        label="Resume Text"
        multiline
        rows={6}
        fullWidth
        value={resume}
        onChange={(e) => setResume(e.target.value)}
        sx={{ mb: 2 }}
      />

      <TextField
        label="Job Description"
        multiline
        rows={6}
        fullWidth
        value={job}
        onChange={(e) => setJob(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Button variant="contained" onClick={analyze}>
        Analyze Match
      </Button>

      {result && <ResultCard result={result} />}
    </div>
  );
}
