import { Box } from "@mui/material";
import { customNode } from "./Flow";

export const Sidebar = () => {
  const onDragStart = (event: any, nodeType: any) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      <div onDragStart={(event) => onDragStart(event, customNode)} draggable>
        Custom Node
      </div>
    </aside>
  );
};
