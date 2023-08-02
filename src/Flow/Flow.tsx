import { useState, useCallback, useRef, DragEventHandler } from "react";
import ReactFlow, {
  Controls,
  Background,
  Position,
  ConnectionLineType,
} from "reactflow";
import "reactflow/dist/style.css";
import uuid from "react-uuid";
import { useFlowContext } from "./context/useFlowContext";
import { edgeTypes, nodeTypes } from "./context/FlowContextProvider";
import { EdgeContextMenu, IEdgeContextMenuRef } from "../Edge/EdgeContextMenu";
import { customNodeDimentions } from "../Node/CustomNode/CustomNodeContent";
import { IDimentions } from "../interfaces";

export const Flow = () => {
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  const reactFlowWrapper = useRef<any>(null);
  const {
    edges,
    nodes,
    onConnect,
    onEdgesChange,
    onNodesChange,
    handleNewNode,
  } = useFlowContext();
  const edgeContextMenuRef = useRef<IEdgeContextMenuRef>(null);

  const onDragOver: DragEventHandler<HTMLDivElement> = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop: DragEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      const getNodeDimentions = (): IDimentions => {
        switch (type) {
          case "customNode":
            return customNodeDimentions;

          default:
            return {
              height: 0,
              width: 0,
            };
        }
      };

      const nodeDimentions = getNodeDimentions();

      const position = reactFlowInstance?.project({
        x: event.clientX - reactFlowBounds.left - nodeDimentions.width / 2,
        y: event.clientY - reactFlowBounds.top - nodeDimentions.height / 2,
      });

      const newNode = {
        id: uuid(),
        type,
        position,
        data: { label: `${type} node` },
        targetPosition: Position.Left,
        sourcePosition: Position.Right,
      };

      handleNewNode(newNode);
    },
    [reactFlowInstance]
  );

  return (
    <div style={{ height: "100%", width: "100%" }} ref={reactFlowWrapper}>
      <ReactFlow
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        onDrop={onDrop}
        onDragOver={onDragOver}
        connectionLineType={ConnectionLineType.SmoothStep}
        onEdgeContextMenu={(e, edge) => {
          e.preventDefault();

          edgeContextMenuRef.current?.handleOpen({
            mouseX: e.clientX,
            mouseY: e.clientY,
            edgeId: edge.id,
          });
        }}
      >
        <Background />
        <Controls />
      </ReactFlow>

      <EdgeContextMenu ref={edgeContextMenuRef} />
    </div>
  );
};
