import { Position } from "reactflow";
import { handlesOptions } from "../../Handles/handles";
import { ICustomNode } from "./interfaces";

const customNode1: ICustomNode = {
  name: "customNode1",
  dimentions: {
    height: 160,
    width: 160,
  },
  inputs: [
    { ...handlesOptions.blueHandle, position: Position.Left },
    { ...handlesOptions.greenHandle, position: Position.Left },
    { ...handlesOptions.redHandle, position: Position.Left },
  ],
  outputs: [
    { ...handlesOptions.blueHandle, position: Position.Right },
    { ...handlesOptions.greenHandle, position: Position.Right },
    { ...handlesOptions.redHandle, position: Position.Right },
  ],
};

export const customNodes: ICustomNode[] = [customNode1];
