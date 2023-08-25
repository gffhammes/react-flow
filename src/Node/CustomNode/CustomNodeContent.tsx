import { Box, Stack, Typography } from "@mui/material";
import { IDimentions } from "../../interfaces";

export interface ICustomNodeContentProps {
  dimentions?: IDimentions;
  shrinkMode?: boolean;
  name: string;
}

export const CustomNodeContent = ({
  dimentions,
  shrinkMode = false,
  name,
}: ICustomNodeContentProps) => {
  const dimentionsToUse =
    dimentions ??
    (shrinkMode
      ? {
          height: "fit-content",
          width: "100%",
        }
      : undefined);

  return (
    <Box
      sx={{
        ...dimentionsToUse,
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
