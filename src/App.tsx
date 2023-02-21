import "reactflow/dist/style.css";
import "./App.css";
import { Flow } from "./Flow";
import { Nodes } from "./Nodes";
import { Stack } from "@mui/material";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <Stack direction="row" sx={{ width: "100%", height: "100%" }}>
        <Flow />

        <Nodes />
      </Stack>
    </div>
  );
}

export default App;
