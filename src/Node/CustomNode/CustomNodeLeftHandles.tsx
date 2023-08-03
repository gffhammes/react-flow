import { Stack } from "@mui/material";
import { CustomHandle } from "../../Handles/CustomHandle";
import { getConnectorColor } from "../../utils";
import { useFilterContext } from "../../FilterContext/useFilterContext";
import { ICustomNodeHandle } from "./interfaces";

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
