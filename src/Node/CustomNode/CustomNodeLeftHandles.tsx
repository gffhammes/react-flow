import { Stack } from "@mui/material";
import { CustomHandle } from "../../Handles/CustomHandle";
import { handlesOptions } from "../../Handles/handles";
import { IHandle } from "../../Handles/interfaces";
import { getConnectorColor } from "../../utils";
import { useFilterContext } from "../../FilterContext/useFilterContext";

export const leftHandles: IHandle[] = [
  handlesOptions.blueHandle,
  handlesOptions.redHandle,
  handlesOptions.greenHandle,
  handlesOptions.purpleHandle,
];

export interface ICustomNodeLeftHandlesProps {
  isConnectable: boolean;
}

export const CustomNodeLeftHandles = ({
  isConnectable,
}: ICustomNodeLeftHandlesProps) => {
  const { selectedConnectors } = useFilterContext();

  return (
    <Stack
      sx={{
        position: "absolute",
        height: "70%",
        width: "1rem",
        top: "15%",
        left: 0,
        transform: "translate(-50%)",
      }}
      justifyContent="space-between"
    >
      {leftHandles.map((handle) => (
        <CustomHandle
          type="target"
          key={handle.id}
          isConnectable={isConnectable}
          color={getConnectorColor(handle, selectedConnectors)}
          id={handle.id}
        />
      ))}
    </Stack>
  );
};
