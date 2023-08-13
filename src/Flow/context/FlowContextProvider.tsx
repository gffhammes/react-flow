import { PropsWithChildren, useState, useCallback } from "react";
import { FlowContext, IFlowContextValue } from "./FlowContext";
import {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  NodeTypes,
  ReactFlowProvider,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import { ISelectOption } from "../../Form/SelectInput";
import { CustomNode } from "../../Node/CustomNode/CustomNode";
import { ButtonEdge } from "../../Edge/ButtonEdge";
import { handlesOptions } from "../../Handles/handles";
import { customNodes } from "../../Node/CustomNode/customNodes";
import { getHandleType } from "../../utils";

export const filterOptions: ISelectOption[] = Object.values(handlesOptions).map(
  (connector) => ({
    label: connector.name,
    value: connector.id,
  })
);

export const nodeTypes: NodeTypes = customNodes.reduce(
  (accumulator, customNode) => {
    return {
      ...accumulator,
      [customNode.name]: (props) => (
        <CustomNode {...props} nodeData={customNode} />
      ),
    };
  },
  {} as NodeTypes
);

export const edgeTypes = {
  buttonedge: ButtonEdge,
};

const initialNodes: Node[] = [];

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

    const sourceType = getHandleType(connection.sourceHandle ?? "");
    const targetType = getHandleType(connection.targetHandle ?? "");

    const isSameTypeHandles = sourceType === targetType;

    return isSameTypeHandles && !edgeAlreadyHasConnection;
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
