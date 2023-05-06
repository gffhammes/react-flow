import { memo } from "react";
import { CustomNodeContent } from "./CustomNodeContent";
import { useFilterContext } from "../FilterContext/useFilterContext";
import { CustomHandle } from "./Handles/CustomHandle";
import { Stack } from "@mui/material";

const blue = "#1900ff";
const red = "#ec0b0b";
const green = "#16e70f";
const grey = "#e3e3e3";

interface IHandle {
  id: string;
  color: string;
}

export const CustomNode = memo(({ isConnectable }: any) => {
  const { selectedConnectors } = useFilterContext();

  const handles: IHandle[] = [
    {
      id: blue,
      color: blue,
    },
    {
      id: red,
      color: red,
    },
    {
      id: green,
      color: green,
    },
  ];

  const getIsSelectedConnector = (id: string) => {
    return !!selectedConnectors.find((connector) => connector.value === id);
  };

  const getConnectorColor = (id: string, color: string) => {
    const isSelected = getIsSelectedConnector(id);

    if (isSelected) return color;

    return grey;
  };

  return (
    <>
      <Stack
        sx={{ position: "absolute", height: "100%", width: "1rem" }}
        justifyContent="space-between"
      >
        {handles.map((handle) => (
          <CustomHandle
            type="target"
            key={handle.id}
            isConnectable={isConnectable}
            color={getConnectorColor(handle.id, handle.color)}
            id={handle.id}
          />
        ))}
      </Stack>

      <CustomNodeContent />

      <Stack
        sx={{
          position: "absolute",
          height: "100%",
          width: "1rem",
          right: 0,
          top: 0,
        }}
        justifyContent="space-between"
      >
        {handles.map((handle) => (
          <CustomHandle
            type="source"
            key={handle.id}
            isConnectable={isConnectable}
            color={getConnectorColor(handle.id, handle.color)}
            id={handle.id}
          />
        ))}
      </Stack>
    </>
  );
});
