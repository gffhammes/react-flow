import { Box } from "@mui/material";

export const Sidebar = () => {
  const onDragStart = (event: any, nodeType: any) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      <div className="description">
        You can drag these nodes to the pane on the right.
      </div>
      <div onDragStart={(event) => onDragStart(event, "input")} draggable>
        Input Node
      </div>
      <div onDragStart={(event) => onDragStart(event, "default")} draggable>
        Default Node
      </div>
      <div onDragStart={(event) => onDragStart(event, "output")} draggable>
        Output Node
      </div>
    </aside>
  );
};
