import { handlesOptions } from "../../Handles/handles";
import { ICustomNode } from "./interfaces";

const customNode1: ICustomNode = {
  name: "customNode1",
  dimentions: {
    height: 160,
    width: 160,
  },
  inputs: [
    handlesOptions.blueHandle,
    handlesOptions.greenHandle,
    handlesOptions.redHandle,
  ],
  outputs: [
    handlesOptions.blueHandle,
    handlesOptions.greenHandle,
    handlesOptions.redHandle,
  ],
};

const customNode2: ICustomNode = {
  name: "customNode2",
  dimentions: {
    height: 160,
    width: 160,
  },
  inputs: [handlesOptions.redHandle],
  outputs: [handlesOptions.redHandle],
};

export const customNodes: ICustomNode[] = [customNode1, customNode2];
