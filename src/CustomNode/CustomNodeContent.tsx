import { Box } from "@mui/material";
import { ISelectOption, SelectInput } from "../Form/SelectInput";
import { useState } from "react";

const options: ISelectOption[] = [
  {
    label: "Cachorro",
    value: 0,
  },
  {
    label: "Gato",
    value: 1,
  },
  {
    label: "Papagaio",
    value: 2,
  },
];

export const CustomNodeContent = () => {
  const [selectedValue, setSelectedValue] = useState(options[0]);

  const handleChange = (newValue: ISelectOption) => {
    setSelectedValue(newValue);
  };

  return (
    <Box
      sx={{
        height: "10rem",
        width: "15rem",
        backgroundColor: "#f4f4f4",
        px: 4,
        py: 3,
      }}
    >
      <SelectInput
        label="Selecione"
        options={options}
        value={selectedValue}
        onChange={handleChange}
      />
    </Box>
  );
};
