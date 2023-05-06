import { memo } from "react";
import { Connection, Handle, HandleType, Position } from "reactflow";
import { useFlowContext } from "../Flow/context/useFlowContext";
import { CustomNodeContent } from "./CustomNodeContent";
import { useFilterContext } from "../FilterContext/useFilterContext";

const blue = "#1900ff";
const red = "#ec0b0b";
const green = "#16e70f";

interface IHandle {
  type: HandleType;
  position: Position;
  id: string;
  style: React.CSSProperties;
}

const connectionCommonProps = {
  height: "1rem",
  width: "1rem",
};

const leftConnectionCommonProps = {
  ...connectionCommonProps,
  left: 0,
  transform: "translateX(-50%)",
};

const rightConnectionCommonProps = {
  ...connectionCommonProps,
  right: 0,
  transform: "translateX(50%)",
};

export const CustomNode = memo(({ data, isConnectable }: any) => {
  const { isValidConnection } = useFlowContext();
  const { selectedConnectors } = useFilterContext();

  const handles: IHandle[] = [
    {
      type: "target",
      position: Position.Left,
      id: blue,
      style: {
        background: blue,
        top: 10,
        ...leftConnectionCommonProps,
      },
    },
    {
      type: "target",
      position: Position.Left,
      id: red,
      style: {
        background: red,
        ...leftConnectionCommonProps,
        top: "50%",
        transform: "translate(-50%, -50%)",
      },
    },
    {
      type: "target",
      position: Position.Left,
      id: green,
      style: {
        background: green,
        top: "auto",
        bottom: 10,
        ...leftConnectionCommonProps,
      },
    },
    {
      type: "source",
      position: Position.Right,
      id: blue,
      style: {
        top: 10,
        background: blue,
        ...rightConnectionCommonProps,
      },
    },
    {
      type: "source",
      position: Position.Right,
      id: red,
      style: {
        background: red,
        ...rightConnectionCommonProps,
        top: "50%",
        transform: "translate(50%, -50%)",
      },
    },
    {
      type: "source",
      position: Position.Right,
      id: green,
      style: {
        bottom: 10,
        top: "auto",
        background: green,
        ...rightConnectionCommonProps,
      },
    },
  ];

  // const filteredHandles = handles.filter(
  //   (handle) =>
  //     !!selectedConnectors.find((connector) => connector.color === handle.id)
  // );

  const leftHandles = handles.filter((handle) => handle.type === "target");
  const rightHandles = handles.filter((handle) => handle.type === "source");

  return (
    <>
      {leftHandles.map((handle) => (
        <Handle
          key={handle.id}
          {...handle}
          isConnectable={isConnectable}
          isValidConnection={isValidConnection}
        />
      ))}

      <CustomNodeContent />

      {rightHandles.map((handle) => (
        <Handle
          key={handle.id}
          {...handle}
          isConnectable={isConnectable}
          isValidConnection={isValidConnection}
        />
      ))}
    </>
  );
});
