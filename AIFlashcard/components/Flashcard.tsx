import { Card, CardContent, Typography } from "@mui/material";

export default function Flashcard({ q, a }: { q: string; a: string }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{q}</Typography>
        <Typography color="text.secondary">{a}</Typography>
      </CardContent>
    </Card>
  );
}
