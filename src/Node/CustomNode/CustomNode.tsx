import { memo } from "react";
import { CustomNodeContent } from "./CustomNodeContent";
import { NodeContextMenu } from "../NodeContextMenu";
import { CustomNodeLeftHandles } from "./CustomNodeLeftHandles";
import { CustomNodeRightHandles } from "./CustomNodeRightHandles";
import { NodeProps } from "reactflow";
import { ICustomNode } from "./interfaces";
import { Box } from "@mui/material";
import { useFilterContext } from "../../FilterContext/useFilterContext";

export interface ICustomNodeProps extends NodeProps {
  nodeData: ICustomNode;
}

export const CustomNode = memo(
  ({ isConnectable, id, nodeData }: ICustomNodeProps) => {
    const { selectedConnectors } = useFilterContext();

    const nodeHandles = [...nodeData.inputs, ...nodeData.outputs];

    const nodeHandlesIds = nodeHandles.map((handle) => {
      return handle.id;
    });

    const uniqueNodeHandlesIds = [...new Set(nodeHandlesIds)];

    const isNodeActive =
      selectedConnectors.length === 0
        ? true
        : !!uniqueNodeHandlesIds.find((nodeHandleId) =>
            selectedConnectors.includes(nodeHandleId)
          );

    console.log(isNodeActive);

    return (
      <NodeContextMenu nodeId={id}>
        <Box display="grid" gridTemplateColumns="auto auto auto">
          <CustomNodeLeftHandles
            isConnectable={isConnectable}
            leftHandles={nodeData.inputs}
          />

          <CustomNodeContent
            dimentions={nodeData.dimentions}
            name={nodeData.name}
            isActive={isNodeActive}
          />

          <CustomNodeRightHandles
            isConnectable={isConnectable}
            rightHandles={nodeData.outputs}
          />
        </Box>
      </NodeContextMenu>
    );
  }
);
