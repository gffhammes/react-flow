import { Box } from "@mui/material";
import { ISelectOption, SelectInput } from "../Form/SelectInput";
import { connectors } from "../connectors";
import { CheckboxFormGroup } from "../Form/CheckboxFormGroup";
import { useFilterContext } from "../FilterContext/useFilterContext";

const options: ISelectOption[] = connectors.map((connector) => ({
  label: connector.label,
  value: connector.color,
}));

export const Header = () => {
  const { selectedConnectors, handleSelectedConnectorsChange } =
    useFilterContext();

  const selected = options.filter(
    (option) =>
      !!selectedConnectors.find((connector) => connector.color === option.value)
  );

  return (
    <Box sx={{ width: "100%", backgroundColor: "white", p: 4 }}>
      <CheckboxFormGroup
        label="Conexão"
        options={options}
        selectedOptions={selected}
        handleChange={handleSelectedConnectorsChange}
      />
    </Box>
  );
};
