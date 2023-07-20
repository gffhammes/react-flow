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
import { ISelectOption } from "../../Form/SelectInput";
import { CustomNode } from "../../CustomNode/CustomNode";
import { ButtonEdge } from "../../Edge/ButtonEdge";
import { handlesOptions } from "../../CustomNode/Handles/handles";

export const options: ISelectOption[] = Object.values(handlesOptions).map(
  (connector) => ({
    label: connector.name,
    value: connector.id,
  })
);

export const customNode = "customNode";

export const nodeTypes = {
  customNode: CustomNode,
};

export const edgeTypes = {
  buttonedge: ButtonEdge,
};

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

export const FlowContextProvider = ({ children }: PropsWithChildren) => {
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
            type: "buttonedge",
            data: {
              handleId: connection.sourceHandle,
            },
          },
          eds
        )
      );
    },
    [setEdges]
  );

  const handleDeleteEdge = (edgeId: string) => {
    setEdges((edges) => edges.filter((edge) => edge.id !== edgeId));
  };

  const handleNewNode = (newNode: Node) => {
    setNodes((nodes) => nodes.concat(newNode));
  };

  const handleDeleteNode = (nodeId: string) => {
    setNodes((nodes) => nodes.filter((node) => node.id !== nodeId));
  };

  const isValidConnection = (connection: Connection) => {
    const getEdgeAlreadyHasConnection = () => {
      const hasSameTarget = !!edges.find(
        (edge) =>
          edge.targetHandle === connection.targetHandle &&
          edge.target === connection.target
      );

      const hasSameSource = !!edges.find(
        (edge) =>
          edge.sourceHandle === connection.sourceHandle &&
          edge.source === connection.source
      );

      return hasSameTarget || hasSameSource;
    };

    const edgeAlreadyHasConnection = getEdgeAlreadyHasConnection();

    return (
      connection.sourceHandle === connection.targetHandle &&
      !edgeAlreadyHasConnection
    );
  };

  const value: IFlowContextValue = {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    handleNewNode,
    isValidConnection,
    handleDeleteEdge,
    handleDeleteNode,
  };

  return (
    <ReactFlowProvider>
      <FlowContext.Provider value={value}>{children}</FlowContext.Provider>
    </ReactFlowProvider>
  );
};
