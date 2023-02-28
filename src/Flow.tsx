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
import { CustomNode } from "./CustomNode";

const nodeTypes = {
  customNode: CustomNode,
};

export const customNode = "customNode";

export const isValidConnection = (connection: Connection) => {
  return connection.sourceHandle === connection.targetHandle;
};
// export const onConnectStart = (_: any, { nodeId, handleType }: any) =>
//   console.log("on connect start", { nodeId, handleType });
// export const onConnectEnd = (event: any) =>
//   console.log("on connect end", event);

const initialNodes: Node[] = [
  {
    id: uuid(),
    data: { label: "Hello" },
    position: { x: 200, y: 200 },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    type: customNode,
  },
  {
    id: uuid(),
    data: { label: "World" },
    position: { x: 600, y: 200 },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    type: customNode,
  },
];

const initialEdges: Edge[] = [];

export const Flow = () => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  const reactFlowWrapper = useRef<any>(null);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection: Connection) => {
      console.log(connection);
      setEdges((eds) =>
        addEdge(
          {
            ...connection,
            style: {
              strokeWidth: 2,
              stroke: connection.sourceHandle ?? "",
            },
          },
          eds
        )
      );
    },
    [setEdges]
  );

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

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  return (
    <div style={{ height: "100%", width: "100%" }} ref={reactFlowWrapper}>
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
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

      {/* 
      <div
        onClick={() => {
          onNodesChange([
            {
              type: "add",
              item: {
                id: uuid(),
                data: { label: "World" },
                position: { x: 100, y: 100 },
              },
            },
          ]);
        }}
        style={{ position: "absolute", bottom: 0, right: 0 }}
      >
        <button>ADD NODE</button>
      </div> */}
    </div>
  );
};
