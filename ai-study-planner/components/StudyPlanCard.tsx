import { Card, CardContent, Typography } from "@mui/material";

export default function StudyPlanCard({ plan }: any) {
  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>
        <Typography variant="h6">Study Plan</Typography>

        {plan.days?.map((day: any, i: number) => (
          <div key={i} style={{ marginTop: 10 }}>
            <Typography fontWeight="bold">{day.day}</Typography>
            <Typography>{day.task}</Typography>
            <Typography variant="body2">
              Practice: {day.question}
            </Typography>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
