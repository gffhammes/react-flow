import { Paper } from "@mui/material";
import { customNode } from "../Flow/context/FlowContextProvider";
import { CustomNodeContent } from "../CustomNode/CustomNodeContent";

export const Sidebar = () => {
  const onDragStart = (event: any, nodeType: any) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <Paper elevation={10} component="aside" sx={{ p: 4 }}>
      <div onDragStart={(event) => onDragStart(event, customNode)} draggable>
        {/* Custom Node */}
        <CustomNodeContent />
      </div>
    </Paper>
  );
};
