import { Paper, Stack, Typography } from "@mui/material";
import { HeaderActions } from "./HeaderActions";

export const Header = () => {
  return (
    <Paper variant="outlined" square sx={{ width: "100%", px: 4, py: 2 }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap={2}
      >
        <Typography fontSize={32}>ReactFlow</Typography>

        <HeaderActions />
      </Stack>
    </Paper>
  );
};
