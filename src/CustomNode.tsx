import { memo } from "react";
import { Connection, Handle, Position } from "reactflow";
import { Box } from "@mui/material";
import { isValidConnection } from "./Flow";

const blue = "#1900ff";
const red = "#ec0b0b";
const green = "#16e70f";

export const CustomNode = memo(({ data, isConnectable }: any) => {
  const teste = (connection: Connection) => {
    console.log(connection);

    return isValidConnection(connection);
  };

  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{ background: blue, top: 10 }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
        isValidConnection={isValidConnection}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        style={{ background: red }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
        isValidConnection={isValidConnection}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="c"
        style={{ background: green, top: "auto", bottom: 10 }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
        isValidConnection={isValidConnection}
      />
      <Box sx={{ height: "10rem", backgroundColor: "#f4f4f4", px: 4 }}>
        Custom Node
      </Box>
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ top: 10, background: blue }}
        isConnectable={isConnectable}
        isValidConnection={teste}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ background: red }}
        isConnectable={isConnectable}
        isValidConnection={teste}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="c"
        style={{ bottom: 10, top: "auto", background: green }}
        isConnectable={isConnectable}
        isValidConnection={teste}
      />
    </>
  );
});
