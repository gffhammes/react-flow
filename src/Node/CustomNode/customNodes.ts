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
  inputs: [handlesOptions.redHandle,handlesOptions.pcHandle,],
  outputs: [handlesOptions.redHandle, handlesOptions.redHandle,handlesOptions.pcHandle,],
};

const customECS4708: ICustomNode = {
  name: "ECS-4708",
  dimentions: {
    height: 600,
    width: 150,
  },
  inputs: [
    handlesOptions.pcHandle
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
    handlesOptions.hacHandle,
    handlesOptions.hacHandle,
    handlesOptions.hacHandle,
    handlesOptions.hacHandle,
    handlesOptions.hacHandle,
    handlesOptions.hacHandle,
    handlesOptions.acHandle,
    handlesOptions.acHandle,
    handlesOptions.acHandle,
    handlesOptions.acHandle,
    handlesOptions.acHandle,
    handlesOptions.acHandle,
    handlesOptions.acHandle,
    handlesOptions.acHandle
  ],
};

const customECS4710: ICustomNode = {
  name: "ECS-4710",
  dimentions: {
    height: 160,
    width: 150,
  },
  inputs: [
    handlesOptions.pcHandle
  ],
  outputs: [
    handlesOptions.pwHandle,
    handlesOptions.pwHandle,
    handlesOptions.pwHandle,
    handlesOptions.pwHandle,
    handlesOptions.pwHandle,
    handlesOptions.pwHandle,
    handlesOptions.pwHandle,
    handlesOptions.pwHandle,
    handlesOptions.pwHandle
  ],
};

const customECS5022: ICustomNode = {
  name: "ECS-5022",
  dimentions: {
    height: 70,
    width: 150,
  },
  inputs: [
    handlesOptions.hdcHandle,
    handlesOptions.enpbHandle,
    handlesOptions.enpvHandle,

  ],
  outputs: [
    handlesOptions.hdcHandle,
    handlesOptions.enpbHandle,
    handlesOptions.enpvHandle,
  ],
};

const customWDSG16COMBOSPOT: ICustomNode = {
  name: "WDS-G16-COMBO_SPOT",
  dimentions: {
    height: 120,
    width: 200,
  },
  inputs: [
    handlesOptions.pcHandle,
    handlesOptions.pwHandle,
    handlesOptions.enpbHandle,
    handlesOptions.enpbHandle,
  ],
  outputs: [
  ],
};

const customWDSG16CARRYSPOT: ICustomNode = {
  name: "WDS-G16-CARRY_SPOT",
  dimentions: {
    height: 120,
    width: 200,
  },
  inputs: [
    handlesOptions.pcHandle,
    handlesOptions.pwHandle,
    handlesOptions.enpbHandle,
    handlesOptions.enpbHandle,
  ],
  outputs: [
  ],
};


const customPWSH: ICustomNode = {
  name: "PWS-Hot",
  dimentions: {
    height: 50,
    width: 150,
  },
  inputs: [
    handlesOptions.hacHandle,
  ],
  outputs: [
    handlesOptions.hdcHandle,
  ],
};
const customPWS: ICustomNode = {
  name: "PWS",
  dimentions: {
    height: 50,
    width: 150,
  },
  inputs: [
    handlesOptions.acHandle,
  ],
  outputs: [
    handlesOptions.dcuHandle,
  ],
};
const customTHAC: ICustomNode = {
  name: "T-HAC",
  dimentions: {
    height: 30,
    width: 150,
  },
  inputs: [
    handlesOptions.hacHandle,
  ],
  outputs: [
    handlesOptions.hacHandle,
    handlesOptions.hacHandle,
  ],
};
const customTAC: ICustomNode = {
  name: "T-AC",
  dimentions: {
    height: 30,
    width: 150,
  },
  inputs: [
    handlesOptions.acHandle,
  ],
  outputs: [
    handlesOptions.acHandle,
    handlesOptions.acHandle,
  ],
};
const customTHDC: ICustomNode = {
  name: "T-HDC",
  dimentions: {
    height: 30,
    width: 150,
  },
  inputs: [
    handlesOptions.hdcHandle,
  ],
  outputs: [
    handlesOptions.hdcHandle,
    handlesOptions.hdcHandle,
  ],
};
const customTDCU: ICustomNode = {
  name: "T-DCU",
  dimentions: {
    height: 30,
    width: 150,
  },
  inputs: [
    handlesOptions.dcuHandle,
  ],
  outputs: [
    handlesOptions.dcuHandle,
    handlesOptions.dcuHandle,
  ],
};
const customACAUX4000: ICustomNode = {
  name: "ACAUX4000",
  dimentions: {
    height: 70,
    width: 150,
  },
  inputs: [
    handlesOptions.acHandle,
  ],
  outputs: [
    handlesOptions.acHandle,
    handlesOptions.acHandle,
    handlesOptions.acHandle,
    handlesOptions.acHandle,
  ],
};
const customDCAUX4000: ICustomNode = {
  name: "DCAUX4000",
  dimentions: {
    height: 70,
    width: 150,
  },
  inputs: [
    handlesOptions.dcuHandle,
  ],
  outputs: [
    handlesOptions.dcuHandle,
    handlesOptions.dcuHandle,
    handlesOptions.dcuHandle,
    handlesOptions.dcuHandle,
  ],
};
const customLS: ICustomNode = {
  name: "SCANNER",
  dimentions: {
    height: 70,
    width: 150,
  },
  inputs: [
    handlesOptions.dcuHandle,
  ],
  outputs: [
    handlesOptions.siHandle,
  ],
};
const customLC: ICustomNode = {
  name: "LC",
  dimentions: {
    height: 70,
    width: 150,
  },
  inputs: [
  ],
  outputs: [
    handlesOptions.siHandle,
  ],
};
const customSBK: ICustomNode = {
  name: "SKB",
  dimentions: {
    height: 120,
    width: 150,
  },
  inputs: [
    handlesOptions.dcuHandle,
    handlesOptions.enpvHandle,
    handlesOptions.siHandle,
    handlesOptions.siHandle,
    handlesOptions.siHandle,
    handlesOptions.siHandle,
  ],
  outputs: [
    handlesOptions.dcuHandle,
    handlesOptions.enpvHandle,
    handlesOptions.dcsHandle,
    handlesOptions.dcsHandle,
    handlesOptions.dcsHandle,
    handlesOptions.dcsHandle,
  ],
};
const customPM: ICustomNode = {
  name: "PM",
  dimentions: {
    height: 70,
    width: 150,
  },
  inputs: [
    handlesOptions.enpvHandle,
    handlesOptions.dcsHandle,
  ],
  outputs: [
  ],
};
const customBK: ICustomNode = {
  name: "BK",
  dimentions: {
    height: 70,
    width: 150,
  },
  inputs: [
    handlesOptions.dcuHandle,
    handlesOptions.enpvHandle,
  ],
  outputs: [
    handlesOptions.dcuHandle,
    handlesOptions.enpvHandle,
  ],
};
const customSTA: ICustomNode = {
  name: "Station",
  dimentions: {
    height: 120,
    width: 150,
  },
  inputs: [
    handlesOptions.dcuHandle,
    handlesOptions.enpvHandle,
    handlesOptions.dcsHandle,
  ],
  outputs: [
  ],
};

export const customNodes: ICustomNode[] = [
  customECS4708,
  customECS4710,
  customECS5022,
  customWDSG16COMBOSPOT,
  customWDSG16CARRYSPOT,
  customSTA,
  customPWSH,
  customPWS,
  customSBK,
  customLS,
  customLC,
  customPM,
  customBK,
  customTHAC,
  customTAC,
  customTHDC,
  customTDCU,
  customACAUX4000,
  customDCAUX4000,
  customNode1,
  customNode2
];
