import { Handle, HandleType, Position } from "reactflow";
import { useFlowContext } from "../Flow/context/useFlowContext";

export interface ITargetHandleProps {
  isConnectable: boolean;
  id: string;
  color: string;
  type: HandleType;
  tooltip: string;
}

const connectionCommonProps: React.CSSProperties = {
  height: "1rem",
  width: "1rem",
  position: "relative",
  top: 0,
  left: 0,
  transform: "none",
};

export const CustomHandle = ({
  isConnectable,
  color,
  id,
  type,
  tooltip,
}: ITargetHandleProps) => {
  const { isValidConnection } = useFlowContext();

  return (
    <Handle
      id={id}
      style={{
        background: color,
        ...connectionCommonProps,
      }}
      type={type}
      position={type === "target" ? Position.Left : Position.Right}
      isConnectable={isConnectable}
      isValidConnection={isValidConnection}
      title={tooltip}
    />
  );
};
