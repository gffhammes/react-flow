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
} from "reactflow";
import "reactflow/dist/style.css";
import uuid from "react-uuid";

const initialNodes: Node[] = [
  {
    id: uuid(),
    data: { label: "Hello" },
    position: { x: 200, y: 200 },
    type: "input",
  },
  {
    id: uuid(),
    data: { label: "World" },
    position: { x: 400, y: 400 },
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
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
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
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  return (
    <div style={{ height: "100%", width: "100%" }} ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        onDrop={onDrop}
        onDragOver={onDragOver}
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
