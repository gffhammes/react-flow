import { Box, Typography } from "@mui/material";
import { handlesOptions } from "../Handles/handles";
import { IHandle, THandleClass } from "../interfaces";
import { useState } from "react";
import { CheckboxGroupsWithParents } from "../Form/CheckboxGroupsWithParents";

export interface IHandleFilterContentProps {}

export const HandleFilterContent = () => {
  const [selectedHadles, setSelectedHandles] = useState<string[]>([]);

  const handlesOptionsArray = Array.from(Object.values(handlesOptions));

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
        selectedOptions={selectedHadles}
        handleChange={(newValues) => setSelectedHandles(newValues)}
      />
    </Box>
  );
};

export interface IHandleGroup {
  groupLabel: THandleClass;
  handles: IHandle<THandleClass>[];
}
