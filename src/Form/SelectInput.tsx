import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { MouseEventHandler, ReactNode, useState } from "react";

interface ISelectInputProps {
  value: string;
  onChange: (event: SelectChangeEvent<any>, child: ReactNode) => void;
}

const getIsClickAway = (e: any) => {
  const isClickAway = e.target.classList.contains("MuiModal-backdrop");

  return isClickAway;
};

export const SelectInput = ({ value, onChange }: ISelectInputProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClickCapture: MouseEventHandler<HTMLDivElement> = (e: any) => {
    const isClickAway = getIsClickAway(e);

    if (isClickAway) {
      handleClose();
    }
  };

  const handleClick = (e: any) => {
    const isClickAway = getIsClickAway(e);
    console.log(isClickAway);
    if (!isClickAway) {
      handleOpen();
    }
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Age"
        onChange={onChange}
        open={open}
        onClose={handleClose}
        onClick={handleClick}
        onClickCapture={handleClickCapture}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};
