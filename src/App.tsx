import "reactflow/dist/style.css";
import "./App.css";
import { Flow } from "./Flow";
import { Sidebar } from "./Sidebar";
import { Stack } from "@mui/material";
import { FlowContextProvider } from "./Flow/context/FlowContextProvider";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <FlowContextProvider>
        <Stack direction="row" sx={{ width: "100%", height: "100%" }}>
          <Flow />

          <Sidebar />
        </Stack>
      </FlowContextProvider>
    </div>
  );
}

export default App;
