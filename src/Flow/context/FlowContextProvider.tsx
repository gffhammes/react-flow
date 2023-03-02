import { PropsWithChildren, useState, useCallback } from "react";
import { FlowContext, IFlowContextValue } from "./FlowContext";
import {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  Position,
  ReactFlowProvider,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import uuid from "react-uuid";

interface IFlowContextProviderProps extends PropsWithChildren {}

export const customNode = "customNode";

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

export const FlowContextProvider = ({
  children,
}: IFlowContextProviderProps) => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

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

  const handleNewNode = (newNode: Node) => {
    setNodes((nodes) => nodes.concat(newNode));
  };

  const value: IFlowContextValue = {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    handleNewNode,
  };

  return (
    <ReactFlowProvider>
      <FlowContext.Provider value={value}>{children}</FlowContext.Provider>
    </ReactFlowProvider>
  );
};
