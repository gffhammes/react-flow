import "reactflow/dist/style.css";
import "./App.css";
import { Flow } from "./Flow";
import { Sidebar } from "./Sidebar";
import { Stack } from "@mui/material";
import { ReactFlowProvider } from "reactflow";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <ReactFlowProvider>
        <Stack direction="row" sx={{ width: "100%", height: "100%" }}>
          <Flow />

          <Sidebar />
        </Stack>
      </ReactFlowProvider>
    </div>
  );
}

export default App;
