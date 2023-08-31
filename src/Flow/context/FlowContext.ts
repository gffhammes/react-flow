import { createContext } from "react";
import {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  ReactFlowInstance,
} from "reactflow";

export interface IFlowContextValue {
  nodes: Node[];
  edges: Edge[];
  reactFlowInstance: ReactFlowInstance | undefined;
  setReactFlowInstance: React.Dispatch<
    React.SetStateAction<ReactFlowInstance | undefined>
  >;
  onNodesChange: (changes: NodeChange[]) => void;
  onEdgesChange: (changes: EdgeChange[]) => void;
  onConnect: (connection: Connection) => void;
  handleNewNode: (newNode: Node) => void;
  isValidConnection: (connection: Connection) => boolean;
  handleDeleteNode: (nodeId: string) => void;
  handleDeleteEdge: (edgeId: string) => void;
}

const initialValues: IFlowContextValue = {
  edges: [],
  nodes: [],
  reactFlowInstance: undefined,
  setReactFlowInstance: () => {},
  onNodesChange: () => {},
  onEdgesChange: () => {},
  onConnect: () => {},
  handleNewNode: () => {},
  handleDeleteNode: () => {},
  handleDeleteEdge: () => {},
  isValidConnection: () => false,
};

export const FlowContext = createContext<IFlowContextValue>(initialValues);
