import { memo } from "react";
import { Connection, Handle, Position } from "reactflow";
import { Box } from "@mui/material";
import { useFlowContext } from "./Flow/context/useFlowContext";

const blue = "#1900ff";
const red = "#ec0b0b";
const green = "#16e70f";

export const CustomNode = memo(({ data, isConnectable }: any) => {
  const { isValidConnection } = useFlowContext();

  const connectionCommonProps = {
    height: "1rem",
    width: "1rem",
  };

  const leftConnectionCommonProps = {
    ...connectionCommonProps,
    left: 0,
    transform: "translateX(-50%)",
  };

  const rightConnectionCommonProps = {
    ...connectionCommonProps,
    right: 0,
    transform: "translateX(50%)",
  };

  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        id={blue}
        style={{ background: blue, top: 10, ...leftConnectionCommonProps }}
        isConnectable={isConnectable}
        isValidConnection={isValidConnection}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={red}
        style={{
          background: red,
          ...leftConnectionCommonProps,
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        isConnectable={isConnectable}
        isValidConnection={isValidConnection}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={green}
        style={{
          background: green,
          top: "auto",
          bottom: 10,
          ...leftConnectionCommonProps,
        }}
        isConnectable={isConnectable}
        isValidConnection={isValidConnection}
      />
      <Box sx={{ height: "10rem", backgroundColor: "#f4f4f4", px: 4 }}>
        Custom Node
      </Box>
      <Handle
        type="source"
        position={Position.Right}
        id={blue}
        style={{
          top: 10,
          background: blue,
          ...rightConnectionCommonProps,
        }}
        isConnectable={isConnectable}
        isValidConnection={isValidConnection}
      />
      <Handle
        type="source"
        position={Position.Right}
        id={red}
        style={{
          background: red,
          ...rightConnectionCommonProps,
          top: "50%",
          transform: "translate(50%, -50%)",
        }}
        isConnectable={isConnectable}
        isValidConnection={isValidConnection}
      />
      <Handle
        type="source"
        position={Position.Right}
        id={green}
        style={{
          bottom: 10,
          top: "auto",
          background: green,
          ...rightConnectionCommonProps,
        }}
        isConnectable={isConnectable}
        isValidConnection={isValidConnection}
      />
    </>
  );
});
