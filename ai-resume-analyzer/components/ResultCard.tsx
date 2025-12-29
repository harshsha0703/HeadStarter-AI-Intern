import { Card, CardContent, Typography } from "@mui/material";

export default function ResultCard({ result }: any) {
  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>
        <Typography variant="h6">
          Match Score: {result.matchScore}%
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Summary: {result.summary}
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Missing Skills: {result.missingSkills?.join(", ")}
        </Typography>
      </CardContent>
    </Card>
  );
}
