import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import { ISelectOption } from "./SelectInput";

export interface ICheckboxFormGroupProps {
  label?: string;
  options: ISelectOption[];
  selectedOptions: ISelectOption[];
  handleChange: (options: ISelectOption, checked: boolean) => void;
}

export const CheckboxFormGroup = ({
  label,
  options,
  selectedOptions,
  handleChange,
}: ICheckboxFormGroupProps) => {
  return (
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
      {label && <FormLabel component="legend">{label}</FormLabel>}

      <FormGroup>
        {options.map((option) => {
          const isSelected = selectedOptions.includes(option);

          return (
            <FormControlLabel
              key={option.value}
              control={
                <Checkbox
                  checked={isSelected}
                  onChange={(e, checked) => handleChange(option, checked)}
                  name={option.label}
                />
              }
              label={option.label}
            />
          );
        })}
      </FormGroup>
    </FormControl>
  );
};
