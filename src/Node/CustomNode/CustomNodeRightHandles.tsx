import { Stack } from "@mui/material";
import { CustomHandle } from "../../Handles/CustomHandle";
import { getConnectorColor } from "../../utils";
import { useFilterContext } from "../../FilterContext/useFilterContext";
import { ICustomNodeHandle } from "./interfaces";
import uuid from "react-uuid";

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
      {rightHandles.map((handle, index) => (
        <CustomHandle
          type="source"
          key={index}
          isConnectable={isConnectable}
          color={getConnectorColor(handle, selectedConnectors)}
          id={handle.name + "-" + index}
        />
      ))}
    </Stack>
  );
};
