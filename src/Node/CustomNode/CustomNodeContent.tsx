import { Box, Stack, Typography } from "@mui/material";
import { IDimentions } from "../../interfaces";
import { useMemo } from "react";

export interface ICustomNodeContentProps {
  dimentions?: IDimentions;
  shrinkMode?: boolean;
  name: string;
  tooltip: string;
}

export const CustomNodeContent = ({
  dimentions,
  shrinkMode = false,
  name,
  tooltip,
}: ICustomNodeContentProps) => {
  const dimentionsToUse = useMemo(() => {
    if (dimentions) {
      return {
        width: dimentions.width,
        height: "100%",
      };
    }

    if (shrinkMode) {
      return {
        height: "fit-content",
        width: "100%",
      };
    }

    return undefined;
  }, []);

  return (
    <Box
      sx={{
        ...dimentionsToUse,
        backgroundColor: "#c0c0c0",
        color: "black",
        px: 2,
        py: 2,
      }}
    > 
      <Stack spacing={4}>
        <Typography>{name}</Typography>
      </Stack>
    </Box>
  );
};
