import { useState, useCallback, useRef } from "react";
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Edge,
  Node,
  NodeChange,
  EdgeChange,
  Connection,
  Position,
} from "reactflow";
import "reactflow/dist/style.css";
import uuid from "react-uuid";
import { CustomNode } from "../CustomNode/CustomNode";
import { useFlowContext } from "./context/useFlowContext";
import { useFilterContext } from "../FilterContext/useFilterContext";

const nodeTypes = {
  customNode: CustomNode,
};

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
  const { selectedConnectors } = useFilterContext();

  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current!.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance?.project({
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

  const filteredEdges = edges.filter((edge) => {
    const mustShowEdge = !!selectedConnectors.find(
      (connector) => connector.color === edge.sourceHandle
    );

    return mustShowEdge;
  });

  return (
    <div style={{ height: "100%", width: "100%" }} ref={reactFlowWrapper}>
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={filteredEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        onDrop={onDrop}
        onDragOver={onDragOver}
        // onConnectStart={(e) => console.log(e)}
        // onConnectEnd={onConnectEnd}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};
