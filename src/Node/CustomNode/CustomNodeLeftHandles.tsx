import { Stack } from "@mui/material";
import { CustomHandle } from "../../Handles/CustomHandle";
import { getConnectorColor } from "../../utils";
import { useFilterContext } from "../../FilterContext/useFilterContext";
import { ICustomNodeHandle } from "./interfaces";
import uuid from "react-uuid";

export interface ICustomNodeLeftHandlesProps {
  isConnectable: boolean;
  leftHandles: ICustomNodeHandle[];
}

export const CustomNodeLeftHandles = ({
  isConnectable,
  leftHandles,
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
      {leftHandles.map((handle, index) => (
        <CustomHandle
          type="target"
          key={index}
          isConnectable={isConnectable}
          color={getConnectorColor(handle, selectedConnectors)}
          id={handle.name + "-" + index}
        />
      ))}
    </Stack>
  );
};
