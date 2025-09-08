import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Skills() {
  const skills = [
    { name: "Creativity", value: 100 },
    { name: "Advertising", value: 84 },
    { name: "Design", value: 72 },
  ];

  return (
    <Box sx={{ width: "300px" }} className="md:w-[500px]! w-full!">
      {skills.map((skill) => (
        <Box key={skill.name} sx={{ mb: 3 }} className="mb-[40px]!">
          <Box
            className="mb-[20px]"
            display="flex"
            justifyContent="space-between"
          >
            <Typography className="font-bold!" variant="body1">
              {skill.name}
            </Typography>
            <Typography className="font-bold!" variant="body1">
              {skill.value}%
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={skill.value}
            sx={{
              height: 4,
              borderRadius: 2,
              backgroundColor: "#e0e0e0",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#000",
              },
            }}
          />
        </Box>
      ))}
    </Box>
  );
}
