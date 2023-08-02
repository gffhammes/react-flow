import { Position } from "reactflow";
import { IDimentions, IHandle } from "../../interfaces";

export interface ICustomNodeHandle extends IHandle {
  position: Position;
}

export interface ICustomNode {
  name: string;
  inputs: ICustomNodeHandle[];
  outputs: ICustomNodeHandle[];
  dimentions: IDimentions;
}
