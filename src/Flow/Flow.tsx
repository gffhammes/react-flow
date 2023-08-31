import { useCallback, useRef, DragEventHandler } from "react";
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

export const Flow = () => {
  const reactFlowWrapper = useRef<any>(null);
  const {
    edges,
    nodes,
    reactFlowInstance,
    setReactFlowInstance,
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

      if (!reactFlowInstance) return;

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
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
