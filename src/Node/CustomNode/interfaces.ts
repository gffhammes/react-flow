import { IDimentions, IHandle } from "../../interfaces";

export interface ICustomNodeHandle extends IHandle {}

export interface ICustomNode {
  name: string;
  inputs: ICustomNodeHandle[];
  outputs: ICustomNodeHandle[];
  dimentions: IDimentions;
}
