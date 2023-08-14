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
  outputs: [handlesOptions.redHandle, handlesOptions.redHandle],
};

const customECS4708: ICustomNode = {
  name: "ECS-4708",
  dimentions: {
    height: 160,
    width: 160,
  },
  inputs: [
    handlesOptions.pcHandle,
    handlesOptions.pwHandle

  ],
  outputs: [
    handlesOptions.pcHandle,
    handlesOptions.pcHandle,
    handlesOptions.pcHandle,
    handlesOptions.pcHandle,
    handlesOptions.pcHandle,
    handlesOptions.pcHandle,
    handlesOptions.pcHandle,
    handlesOptions.pcHandle,
    handlesOptions.pcHandle,
    handlesOptions.pcHandle,
    handlesOptions.pcHandle,
    handlesOptions.pcHandle,
    handlesOptions.pcHandle,
    handlesOptions.pcHandle,
    handlesOptions.pcHandle,
    handlesOptions.pcHandle,
    handlesOptions.pcHandle,
    handlesOptions.pcHandle,
    handlesOptions.pcHandle,
    handlesOptions.pwHandle
    
  ],
};

export const customNodes: ICustomNode[] = [customECS4708, customNode1, customNode2];
