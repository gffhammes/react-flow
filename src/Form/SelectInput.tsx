import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";

export type TValue = string | number;

export interface ISelectOption {
  label: string;
  value: TValue;
}

interface ISelectInputProps {
  value: ISelectOption;
  options: ISelectOption[];
  label: string;

  onChange: (newValue: ISelectOption) => void;
}

export const SelectInput = ({
  value,
  options,
  label,
  onChange,
}: ISelectInputProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = (e: any) => {
    const isClickAway = getIsClickAway(e);

    if (isClickAway) {
      handleClose();
    } else {
      handleOpen();
    }
  };

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value.value}
        label={label}
        onChange={(e, child: any) => {
          const selectedOption = options.find(
            (option) => option.value === child.props.value
          );
          onChange(selectedOption!);
        }}
        open={open}
        onClose={handleClose}
        onClick={handleClick}
        onClickCapture={handleClick}
      >
        {options.map((option) => {
          return (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

const getIsClickAway = (e: any) => {
  const isClickAway = e.target.classList.contains("MuiModal-backdrop");

  return isClickAway;
};
