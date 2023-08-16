import { Box, Stack, Typography } from "@mui/material";
import { IDimentions } from "../../interfaces";

export interface ICustomNodeContentProps {
  dimentions: IDimentions;
  name: string;
}

export const CustomNodeContent = ({
  dimentions,
  name,
}: ICustomNodeContentProps) => {
  return (
    <Box
      sx={{
        ...dimentions,
        backgroundColor: "#f4f4f4",
        color: "black",
        px: 4,
        py: 3,
      }}
    >
      <Stack spacing={4}>
        <Typography>{name}</Typography>
      </Stack>
    </Box>
  );
};
