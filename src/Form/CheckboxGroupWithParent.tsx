import { Box, Checkbox, FormControlLabel } from "@mui/material";

export interface ICheckboxGroupWithParentProps<T> {
  options: T[];
  getOptionLabel: (option: T) => string;
  getOptionValue: (option: T) => string;
  parentLabel: string;
  selectedOptions: string[];
  onChange: (value: string[]) => void;
}

export const CheckboxGroupWithParent = <T,>({
  options,
  parentLabel,
  getOptionLabel,
  getOptionValue,
  selectedOptions,
  onChange,
}: ICheckboxGroupWithParentProps<T>) => {
  const isAllOptionsSelected = selectedOptions.length === options.length;
  const isSomeOptionSelected = selectedOptions.length > 0;

  const handleParentChange = (checked: boolean) => {
    const allOptionsValue = options.map((option) => getOptionValue(option));

    if (checked) {
      onChange(allOptionsValue);
    } else {
      onChange([]);
    }
  };

  const handleChildrenChange = (value: string, checked: boolean) => {
    if (checked) {
      onChange([...selectedOptions, value]);
    } else {
      onChange(selectedOptions.filter((option) => option !== value));
    }
  };

  return (
    <div>
      <FormControlLabel
        label={parentLabel.toUpperCase()}
        control={
          <Checkbox
            checked={isAllOptionsSelected}
            indeterminate={isSomeOptionSelected && !isAllOptionsSelected}
            onChange={(e, checked) => handleParentChange(checked)}
          />
        }
      />

      <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
        {options.map((option) => {
          const optionLabel = getOptionLabel(option);
          const optionValue = getOptionValue(option);

          return (
            <FormControlLabel
              key={optionValue}
              label={optionLabel}
              control={
                <Checkbox
                  checked={selectedOptions.includes(optionValue)}
                  onChange={(e, checked) => {
                    handleChildrenChange(optionValue, checked);
                  }}
                />
              }
            />
          );
        })}
      </Box>
    </div>
  );
};
