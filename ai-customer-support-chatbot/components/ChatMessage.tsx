import { Card, CardContent, Typography } from "@mui/material";

export default function ChatMessage({ message }: any) {
  return (
    <Card
      sx={{
        mb: 1,
        backgroundColor: message.role === "user" ? "#e3f2fd" : "#f5f5f5",
      }}
    >
      <CardContent>
        <Typography>{message.content}</Typography>
      </CardContent>
    </Card>
  );
}
