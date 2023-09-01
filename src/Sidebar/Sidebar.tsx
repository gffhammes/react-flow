import { Paper, Stack } from "@mui/material";
import { CustomNodeContent } from "../Node/CustomNode/CustomNodeContent";
import { customNodes } from "../Node/CustomNode/customNodes";

export const Sidebar = () => {
  const onDragStart = (event: any, nodeType: any) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <Paper
      variant="outlined"
      square
      component="aside"
      sx={{ p: 4, height: "100%", overflow: "auto" }}
    >
      <Stack spacing={2}>
        {customNodes.map((customNode) => {
          return (
            <div
              key={customNode.name}
              onDragStart={(event) => onDragStart(event, customNode.name)}
              draggable
            >
              <div id="custom-node">
                <CustomNodeContent name={customNode.name} shrinkMode />
              </div>
            </div>
          );
        })}
      </Stack>
    </Paper>
  );
};
