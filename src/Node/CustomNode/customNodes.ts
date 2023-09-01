import { handlesOptions } from "../../Handles/handles";
import { ICustomNode } from "./interfaces";

const customECS4708: ICustomNode = {
  name: "ECS-4708",
  dimentions: {
    height: 600,
    width: 110,
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
    width: 110,
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
    width: 110,
  },
  inputs: [
    handlesOptions.hdcHandle,
    // handlesOptions.enpbHandle,
    // handlesOptions.enpvHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
  ],
  outputs: [
    handlesOptions.hdcHandle,
    // handlesOptions.enpbHandle,
    // handlesOptions.enpvHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
  ],
};
const customECS5054: ICustomNode = {
  name: "ECS-5054",
  dimentions: {
    height: 160,
    width: 110,
  },
  inputs: [
    handlesOptions.dcuHandle,
    // handlesOptions.enpvHandle,
    handlesOptions.enHandle,
  ],
  outputs: [
    handlesOptions.dcuHandle,
    // handlesOptions.enpvHandle,
    handlesOptions.enHandle,
    handlesOptions.oHandle,
    handlesOptions.oHandle,
    handlesOptions.oHandle,
    handlesOptions.oHandle,
    handlesOptions.oHandle,
    handlesOptions.oHandle,
    handlesOptions.oHandle,
  ],
};
const customECS5049: ICustomNode = {
  name: "ECS-5049",
  dimentions: {
    height: 130,
    width: 110,
  },
  inputs: [
    handlesOptions.dcuHandle,
    // handlesOptions.enpvHandle,
    handlesOptions.enHandle,
  ],
  outputs: [
    handlesOptions.dcuHandle,
    // handlesOptions.enpvHandle,
    handlesOptions.enHandle,
    handlesOptions.oHandle,
    handlesOptions.oHandle,
    handlesOptions.oHandle,
    handlesOptions.oHandle,
    handlesOptions.oHandle,
  ],
};
const customECS5063: ICustomNode = {
  name: "ECS-5063",
  dimentions: {
    height: 60,
    width: 110,
  },
  inputs: [
  ],
  outputs: [
    handlesOptions.siHandle,
    handlesOptions.siHandle,
    handlesOptions.siHandle,
  ],
};
const customWDSG16COMBOSPOT: ICustomNode = {
  name: "WDS-G16-COMBO_SPOT",
  dimentions: {
    height: 80,
    width: 140,
  },
  inputs: [
    handlesOptions.pcHandle,
    handlesOptions.pwHandle,
    // handlesOptions.enpbHandle,
    // handlesOptions.enpbHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
  ],
  outputs: [
  ],
};

const customWDSG16CARRYSPOT: ICustomNode = {
  name: "WDS-G16-CARRY_SPOT",
  dimentions: {
    height: 80,
    width: 140,
  },
  inputs: [
    handlesOptions.pcHandle,
    handlesOptions.pwHandle,
    // handlesOptions.enpbHandle,
    // handlesOptions.enpbHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
  ],
  outputs: [
  ],
};


const customPWSH: ICustomNode = {
  name: "PWS-Hot",
  dimentions: {
    height: 40,
    width: 100,
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
    height: 40,
    width: 70,
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
    height: 40,
    width: 90,
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
    height: 40,
    width: 80,
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
    height: 40,
    width: 90,
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
    height: 40,
    width: 90,
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
    width: 130,
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
    width: 130,
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
    height: 50,
    width: 100,
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
    height: 50,
    width: 50,
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
    width: 70,
  },
  inputs: [
    handlesOptions.dcuHandle,
    // handlesOptions.enpvHandle,
    handlesOptions.enHandle,
    handlesOptions.siHandle,
    handlesOptions.siHandle,
    handlesOptions.siHandle,
    handlesOptions.siHandle,
  ],
  outputs: [
    handlesOptions.dcuHandle,
    // handlesOptions.enpvHandle,
    handlesOptions.enHandle,
    handlesOptions.dcsHandle,
    handlesOptions.dcsHandle,
    handlesOptions.dcsHandle,
    handlesOptions.dcsHandle,
  ],
};
const customPM: ICustomNode = {
  name: "PM",
  dimentions: {
    height: 50,
    width: 50,
  },
  inputs: [
    // handlesOptions.enpvHandle,
    handlesOptions.enHandle,
    handlesOptions.dcsHandle,
  ],
  outputs: [
  ],
};
const customBK: ICustomNode = {
  name: "BK",
  dimentions: {
    height: 50,
    width: 50,
  },
  inputs: [
    handlesOptions.dcuHandle,
    // handlesOptions.enpvHandle,
    handlesOptions.enHandle,
  ],
  outputs: [
    handlesOptions.dcuHandle,
    // handlesOptions.enpvHandle,
    handlesOptions.enHandle,
  ],
};
const customStackLight03: ICustomNode = {
  name: "SL03",
  dimentions: {
    height: 60,
    width: 70,
  },
  inputs: [
    handlesOptions.oHandle,
    handlesOptions.oHandle,
    handlesOptions.oHandle,
  ],
  outputs: [
  ],
};
const customStackLight02: ICustomNode = {
  name: "SL02",
  dimentions: {
    height: 50,
    width: 70,
  },
  inputs: [
    handlesOptions.oHandle,
    handlesOptions.oHandle,
  ],
  outputs: [
  ],
};
const customStackLight01: ICustomNode = {
  name: "SL01",
  dimentions: {
    height: 40,
    width: 70,
  },
  inputs: [
    handlesOptions.oHandle,
  ],
  outputs: [
  ],
};

const customSTA: ICustomNode = {
  name: "Station",
  dimentions: {
    height: 60,
    width: 100,
  },
  inputs: [
    handlesOptions.dcuHandle,
    // handlesOptions.enpvHandle,
    handlesOptions.enHandle,
    handlesOptions.dcsHandle,
  ],
  outputs: [
  ],
};
const customSW12: ICustomNode = {
  name: "Switch12",
  dimentions: {
    height: 210,
    width: 100,
  },
  inputs: [
    handlesOptions.hdcHandle,
    handlesOptions.enHandle,
  ],
  outputs: [
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
  ],
};
const customSW28: ICustomNode = {
  name: "Switch28",
  dimentions: {
    height: 490,
    width: 100,
  },
  inputs: [
    handlesOptions.hdcHandle,
    handlesOptions.enHandle,
  ],
  outputs: [
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
    handlesOptions.enHandle,
  ],
};
export const customNodes: ICustomNode[] = [
  customECS4708,
  customECS4710,
  customECS5022,
  customECS5049,
  customECS5054,
  customECS5063,
  customSW12,
  customSW28,
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
  customStackLight01,
  customStackLight02,
  customStackLight03,
];
