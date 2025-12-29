"use client";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import StudyPlanCard from "@/components/StudyPlanCard";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [deadline, setDeadline] = useState("");
  const [plan, setPlan] = useState<any>(null);

  const generatePlan = async () => {
    const res = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({ topic, deadline }),
    });
    const data = await res.json();
    setPlan(data);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>AI Study Planner</h1>

      <TextField
        label="Study Topic"
        fullWidth
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        sx={{ mb: 2 }}
      />

      <TextField
        label="Deadline (e.g. 2 weeks)"
        fullWidth
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Button variant="contained" onClick={generatePlan}>
        Generate Study Plan
      </Button>

      {plan && <StudyPlanCard plan={plan} />}
    </div>
  );
}
