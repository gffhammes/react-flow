import { IDimentions, IHandle } from "../../interfaces";

export interface ICustomNodeHandle<T = any> extends IHandle<T> {}

export interface ICustomNode {
  name: string;
  inputs: ICustomNodeHandle[];
  outputs: ICustomNodeHandle[];
  dimentions: IDimentions;
  description: string;
}
