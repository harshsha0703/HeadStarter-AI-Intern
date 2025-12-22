"use client";
import { useState } from "react";
import { Button, TextField } from "@mui/material";

export default function Home() {
  const [pantry, setPantry] = useState("");
  const [recipes, setRecipes] = useState<any[]>([]);

  const generateRecipes = async () => {
    const res = await fetch("/api/recipes", {
      method: "POST",
      body: JSON.stringify({ pantry }),
    });
    const data = await res.json();
    setRecipes(data.recipes);
  };

  return (
    <>
      <TextField
        label="Pantry Items"
        fullWidth
        value={pantry}
        onChange={(e) => setPantry(e.target.value)}
      />
      <Button onClick={generateRecipes}>Generate Recipes</Button>

      {recipes.map((r, i) => (
        <div key={i}>
          <h3>{r.name}</h3>
          <p>{r.description}</p>
        </div>
      ))}
    </>
  );
}
