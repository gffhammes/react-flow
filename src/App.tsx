import "reactflow/dist/style.css";
import "./App.css";
import { Flow } from "./Flow/Flow";
import { Sidebar } from "./Sidebar/Sidebar";
import { Stack } from "@mui/material";
import { FlowContextProvider } from "./Flow/context/FlowContextProvider";
import { Header } from "./Header/Header";
import { FilterContextProvider } from "./FilterContext/FilterContextProvider";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <FlowContextProvider>
        <FilterContextProvider>
          <Stack sx={{ height: "100%", width: "100%" }}>
            <Header />

            <Stack
              direction="row"
              sx={{ width: "100%", height: "100%", overflow: "hidden" }}
            >
              <Flow />

              <Sidebar />
            </Stack>
          </Stack>
        </FilterContextProvider>
      </FlowContextProvider>
    </div>
  );
}

export default App;
