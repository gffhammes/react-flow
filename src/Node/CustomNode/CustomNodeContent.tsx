import { Box, Stack, Typography } from "@mui/material";
import { ISelectOption, SelectInput } from "../../Form/SelectInput";
import { useState } from "react";
import { IDimentions } from "../../interfaces";

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

export interface ICustomNodeContentProps {
  dimentions: IDimentions;
  name: string;
}

export const CustomNodeContent = ({
  dimentions,
  name,
}: ICustomNodeContentProps) => {
  const [selectedValue, setSelectedValue] = useState(options[0]);

  const handleChange = (newValue: ISelectOption) => {
    setSelectedValue(newValue);
  };

  return (
    <Box sx={{ ...dimentions, backgroundColor: "#f4f4f4", px: 4, py: 3 }}>
      <Stack spacing={4}>
        <Typography>{name}</Typography>

        {/* <SelectInput
          label="Selecione"
          options={options}
          value={selectedValue}
          onChange={handleChange}
        /> */}
      </Stack>
    </Box>
  );
};
