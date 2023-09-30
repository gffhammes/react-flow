import { Box, Typography } from "@mui/material";
import { handlesOptionsArray } from "../Handles/handles";
import { IHandle, THandleClass } from "../interfaces";
import { CheckboxGroupsWithParents } from "../Form/CheckboxGroupsWithParents";
import { useFilterContext } from "../FilterContext/useFilterContext";

export interface IHandleFilterContentProps {}

export const HandleFilterContent = () => {
  const { selectedConnectors, handleSelectedConnectorsChange } =
    useFilterContext();

  const groups: IHandleGroup[] = [];

  handlesOptionsArray.forEach((handle) => {
    const group = groups.find((group) => group.groupLabel === handle.class);

    if (group) {
      const groupIndex = groups.indexOf(group);

      groups[groupIndex].handles.push(handle);
    } else {
      groups.push({
        groupLabel: handle.class,
        handles: [handle],
      });
    }
  });

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="caption">FILTROS</Typography>

      <CheckboxGroupsWithParents<any>
        groups={groups.map((group) => ({
          options: group.handles,
          getOptionLabel: (option) => option.name,
          getOptionValue: (option) => option.id,
          label: group.groupLabel,
        }))}
        selectedOptions={selectedConnectors}
        handleChange={handleSelectedConnectorsChange}
      />
    </Box>
  );
};

export interface IHandleGroup {
  groupLabel: THandleClass;
  handles: IHandle<THandleClass>[];
}
