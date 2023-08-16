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
        height: "100%",
        width: "1rem",
        right: 0,
        transform: "translate(50%)",
        top: "5%",
      }}
      justifyContent="normal"
    >
      {rightHandles.map((handle, index) => (
        <CustomHandle
          type="source"
          key={index}
          isConnectable={isConnectable}
          color={getConnectorColor(handle, selectedConnectors)}
          id={handle.name + "-" + index}
          tooltip={handle.name}
        />
      ))}
    </Stack>
  );
};
