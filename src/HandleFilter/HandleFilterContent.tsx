import { Box, Typography } from "@mui/material";
import { handlesOptions } from "../Handles/handles";
import { IHandle, THandleClass } from "../interfaces";
import { CheckboxGroupWithParent } from "../Form/CheckboxGroupWithParent";
import { useState } from "react";

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

      {groups.map((group) => (
        <Box key={group.groupLabel}>
          <CheckboxGroupWithParent
            options={group.handles}
            parentLabel={group.groupLabel}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
            selectedOptions={selectedHadles}
            onChange={(value) => setSelectedHandles(value)}
          />
        </Box>
      ))}
    </Box>
  );
};

export interface IHandleGroup {
  groupLabel: THandleClass;
  handles: IHandle<THandleClass>[];
}
