import { memo } from "react";
import { CustomNodeContent } from "./CustomNodeContent";
import { NodeContextMenu } from "../NodeContextMenu";
import { CustomNodeLeftHandles } from "./CustomNodeLeftHandles";
import { CustomNodeRightHandles } from "./CustomNodeRightHandles";
import { NodeProps } from "reactflow";
import { ICustomNode } from "./interfaces";

export interface ICustomNodeProps extends NodeProps {
  nodeData: ICustomNode;
}

export const CustomNode = memo(
  ({ isConnectable, id, nodeData }: ICustomNodeProps) => {
    return (
      <NodeContextMenu nodeId={id}>
        <CustomNodeLeftHandles
          isConnectable={isConnectable}
          leftHandles={nodeData.inputs}
        />

        <CustomNodeContent
          dimentions={nodeData.dimentions}
          name={nodeData.name}
        />

        <CustomNodeRightHandles
          isConnectable={isConnectable}
          rightHandles={nodeData.outputs}
        />
      </NodeContextMenu>
    );
  }
);
