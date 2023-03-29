import { Box } from "@mui/material";
import { SelectInput } from "../Form/SelectInput";

export const CustomNodeContent = () => {
  return (
    <Box sx={{ height: "30rem", backgroundColor: "#f4f4f4", px: 4, py: 3 }}>
      Custom Node
      <SelectInput value="" onChange={() => {}} />
    </Box>
  );
};
