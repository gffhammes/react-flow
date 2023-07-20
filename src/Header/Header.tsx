import { Paper } from "@mui/material";
import { CheckboxFormGroup } from "../Form/CheckboxFormGroup";
import { useFilterContext } from "../FilterContext/useFilterContext";
import { filterOptions } from "../Flow/context/FlowContextProvider";

export const Header = () => {
  const { selectedConnectors, handleSelectedConnectorsChange } =
    useFilterContext();

  const selected = filterOptions.filter(
    (option) =>
      !!selectedConnectors.find((connector) => connector.value === option.value)
  );

  return (
    <Paper sx={{ width: "100%", backgroundColor: "white", p: 4 }}>
      <CheckboxFormGroup
        label="Conexão"
        options={filterOptions}
        selectedOptions={selected}
        handleChange={handleSelectedConnectorsChange}
      />
    </Paper>
  );
};
