import { Button, Paper, Stack, Typography } from "@mui/material";
import { CheckboxFormGroup } from "../Form/CheckboxFormGroup";
import { useFilterContext } from "../FilterContext/useFilterContext";
import { filterOptions } from "../Flow/context/FlowContextProvider";
import { useFlowContext } from "../Flow/context/useFlowContext";
import { HeaderActions } from "./HeaderActions";

export const Header = () => {
  const { selectedConnectors, handleSelectedConnectorsChange } =
    useFilterContext();

  const selected = filterOptions.filter(
    (option) =>
      !!selectedConnectors.find((connector) => connector.value === option.value)
  );

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

      {/* <CheckboxFormGroup
        label="Conexão"
        options={filterOptions}
        selectedOptions={selected}
        handleChange={handleSelectedConnectorsChange}
      /> */}
    </Paper>
  );
};
