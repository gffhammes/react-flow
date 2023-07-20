import { memo } from "react";
import { CustomNodeContent } from "./CustomNodeContent";
import { useFilterContext } from "../FilterContext/useFilterContext";
import { CustomHandle } from "./Handles/CustomHandle";
import { Stack } from "@mui/material";
import { NodeContextMenu } from "./NodeContextMenu";
import { handlesOptions } from "./Handles/handles";

export interface IHandle {
  id: string;
  name: string;
  color: string;
}

export interface ICustomNodeProps {
  isConnectable: boolean;
  id: string;
}

const leftHandles: IHandle[] = [
  handlesOptions.blueHandle,
  handlesOptions.redHandle,
  handlesOptions.greenHandle,
];

const rightHandles: IHandle[] = [
  handlesOptions.blueHandle,
  handlesOptions.redHandle,
];

export const CustomNode = memo(({ isConnectable, id }: ICustomNodeProps) => {
  const { selectedConnectors } = useFilterContext();

  const getConnectorColor = (id: string, color: string) => {
    const isSelected = !!selectedConnectors.find(
      (connector) => connector.value === id
    );

    if (isSelected) return color;

    return "#000";
  };

  return (
    <NodeContextMenu nodeId={id}>
      <Stack
        sx={{ position: "absolute", height: "70%", width: "1rem", top: "15%" }}
        justifyContent="space-between"
      >
        {leftHandles.map((handle) => (
          <CustomHandle
            type="target"
            key={handle.id}
            isConnectable={isConnectable}
            color={getConnectorColor(handle.id, handle.color)}
            id={handle.id}
          />
        ))}
      </Stack>

      <CustomNodeContent />

      <Stack
        sx={{
          position: "absolute",
          height: "70%",
          width: "1rem",
          right: 0,
          top: "15%",
        }}
        justifyContent="space-between"
      >
        {rightHandles.map((handle) => (
          <CustomHandle
            type="source"
            key={handle.id}
            isConnectable={isConnectable}
            color={getConnectorColor(handle.id, handle.color)}
            id={handle.id}
          />
        ))}
      </Stack>
    </NodeContextMenu>
  );
});
