import { memo } from "react";
import { CustomNodeContent } from "./CustomNodeContent";
import { NodeContextMenu } from "../NodeContextMenu";
import { CustomNodeLeftHandles } from "./CustomNodeLeftHandles";
import { CustomNodeRightHandles } from "./CustomNodeRightHandles";

export interface ICustomNodeProps {
  isConnectable: boolean;
  id: string;
}

export const CustomNode = memo(({ isConnectable, id }: ICustomNodeProps) => {
  return (
    <NodeContextMenu nodeId={id}>
      <CustomNodeLeftHandles isConnectable={isConnectable} />

      <CustomNodeContent />

      <CustomNodeRightHandles isConnectable={isConnectable} />
    </NodeContextMenu>
  );
});
