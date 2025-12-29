"use client";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import ChatMessage from "@/components/ChatMessage";

export default function Home() {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ messages: [...messages, userMessage] }),
    });

    const data = await res.json();
    setMessages((prev) => [...prev, data.reply]);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>AI Customer Support Chatbot</h1>

      <div style={{ marginBottom: 20 }}>
        {messages.map((msg, i) => (
          <ChatMessage key={i} message={msg} />
        ))}
      </div>

      <TextField
        fullWidth
        label="Ask a question..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Button variant="contained" onClick={sendMessage}>
        Send
      </Button>
    </div>
  );
}
