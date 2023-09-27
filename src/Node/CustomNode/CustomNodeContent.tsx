import { Box, Stack, Typography } from "@mui/material";
import { IDimentions } from "../../interfaces";
import { useMemo } from "react";
import { disabledGrey } from "../../utils";

export interface ICustomNodeContentProps {
  dimentions?: IDimentions;
  shrinkMode?: boolean;
  name: string;
  isActive?: boolean;
}

export const CustomNodeContent = ({
  dimentions,
  shrinkMode = false,
  name,
  isActive,
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
        backgroundColor: isActive ? "#8d8d8d" : disabledGrey,
        color: "black",
        px: 2,
        py: 2,
      }}
    >
      <Stack spacing={4}>
        <Typography color={isActive ? "unset" : "grey"}>{name}</Typography>
      </Stack>
    </Box>
  );
};
