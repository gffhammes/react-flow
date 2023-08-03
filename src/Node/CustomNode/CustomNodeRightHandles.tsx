import { Stack } from "@mui/material";
import { CustomHandle } from "../../Handles/CustomHandle";
import { getConnectorColor } from "../../utils";
import { useFilterContext } from "../../FilterContext/useFilterContext";
import { ICustomNodeHandle } from "./interfaces";

export interface ICustomNodeRightHandlesProps {
  isConnectable: boolean;
  rightHandles: ICustomNodeHandle[];
}

export const CustomNodeRightHandles = ({
  isConnectable,
  rightHandles,
}: ICustomNodeRightHandlesProps) => {
  const { selectedConnectors } = useFilterContext();

  return (
    <Stack
      sx={{
        position: "absolute",
        height: "70%",
        width: "1rem",
        right: 0,
        transform: "translate(50%)",
        top: "15%",
      }}
      justifyContent="space-between"
    >
      {rightHandles.map((handle) => (
        <CustomHandle
          type="source"
          key={handle.id}
          isConnectable={isConnectable}
          color={getConnectorColor(handle, selectedConnectors)}
          id={handle.id}
        />
      ))}
    </Stack>
  );
};
