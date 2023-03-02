import { createContext } from "react";
import { Connection, Edge, EdgeChange, Node, NodeChange } from "reactflow";

export interface IFlowContextValue {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: (changes: NodeChange[]) => void;
  onEdgesChange: (changes: EdgeChange[]) => void;
  onConnect: (connection: Connection) => void;
  handleNewNode: (newNode: Node) => void;
  isValidConnection: (connection: Connection) => boolean;
}

const initialValues: IFlowContextValue = {
  edges: [],
  nodes: [],
  onNodesChange: () => {},
  onEdgesChange: () => {},
  onConnect: () => {},
  handleNewNode: () => {},
  isValidConnection: () => false,
};

export const FlowContext = createContext<IFlowContextValue>(initialValues);
