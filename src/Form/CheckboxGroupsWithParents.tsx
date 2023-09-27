import { Box } from "@mui/material";
import { CheckboxGroupWithParent } from "./CheckboxGroupWithParent";

interface ITeste<T> {
  options: T[];
  label: string;
  getOptionLabel: (option: T) => string;
  getOptionValue: (option: T) => string;
}

export interface ICheckboxGroupsWithParentsProps<T> {
  groups: ITeste<T>[];
  selectedOptions: string[];
  handleChange: (newValue: string[]) => void;
}

export const CheckboxGroupsWithParents = <T,>({
  groups,
  selectedOptions,
  handleChange,
}: ICheckboxGroupsWithParentsProps<T>) => {
  return (
    <>
      {groups.map((group) => {
        const groupSelectedOptions = selectedOptions.filter(
          (selectedOption) => {
            const optionExistsOnGroup = !!group.options.find((groupOption) => {
              const groupOptionValue = group.getOptionValue(groupOption);

              return groupOptionValue === selectedOption;
            });

            return optionExistsOnGroup;
          }
        );

        const handleGroupChange = (newValues: string[]) => {
          const selectedOptionsWithoutGroup = selectedOptions.filter(
            (selectedOption) => !groupSelectedOptions.includes(selectedOption)
          );

          const finalSelectedOptions = [
            ...selectedOptionsWithoutGroup,
            ...newValues,
          ];

          handleChange(finalSelectedOptions);
        };

        return (
          <Box key={group.label}>
            <CheckboxGroupWithParent
              options={group.options}
              parentLabel={group.label}
              getOptionLabel={group.getOptionLabel}
              getOptionValue={group.getOptionValue}
              selectedOptions={groupSelectedOptions}
              onChange={handleGroupChange}
            />
          </Box>
        );
      })}
    </>
  );
};
