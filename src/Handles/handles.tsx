import { IHandle } from "../interfaces";

const pcHandle: IHandle<"energia"> = {
  id: "5",
  name: "PC_PowerControl",
  color: "#000000",
  class: "energia",
  classProps: {
    tensao: 440,
  },
  description: "PC",
};

const pwHandle: IHandle<"energia"> = {
  id: "25",
  name: "PW_PowerWeld",
  color: "#946306",
  class: "energia",
  classProps: {
    tensao: 440,
  },
  description: "PW",
};

const pwm35Handle: IHandle<"energia"> = {
  id: "30",
  name: "PCM35_PowerControl",
  color: "#8C8C8C",
  class: "energia",
  classProps: {
    tensao: 440,
  },
  description: "PCM35",
};

const hacHandle: IHandle<"energia"> = {
  id: "40",
  name: "HAC_Hot120VAC",
  color: "#FE9601",
  class: "energia",
  classProps: {
    tensao: 120,
  },
  description: "HAC",
};

const acHandle: IHandle<"energia"> = {
  id: "50",
  name: "AC_Control120VAC",
  color: "#FC0201",
  class: "energia",
  classProps: {
    tensao: 120,
  },
  description: "AC",
};

const hdcHandle: IHandle<"energia"> = {
  id: "60",
  name: "HDC_Hot",
  color: "#FFC85A",
  class: "energia",
  classProps: {
    tensao: 24,
  },
  description: "HDC",
};

const dcuHandle: IHandle<"energia"> = {
  id: "70",
  name: "DC_Unswitched",
  color: "#0100FE",
  class: "energia",
  classProps: {
    tensao: 24,
  },
  description: "DCu",
};

const dcsHandle: IHandle<"energia"> = {
  id: "80",
  name: "DC_Switched",
  color: "#C80194",
  class: "energia",
  classProps: {
    tensao: 110,
  },
  description: "DCs",
};

const dnHandle: IHandle<"rede"> = {
  id: "90",
  name: "DNet",
  color: "#FFEE13",
  class: "rede",
  classProps: {
    tipo: "ENET",
  },
  description: "DN",
};

const enHandle: IHandle<"rede"> = {
  id: "100",
  name: "ENet",
  color: "#00FF04",
  class: "rede",
  classProps: {
    tipo: "ENET",
  },
  description: "EN",
};

const enpbHandle: IHandle<"rede"> = {
  id: "105",
  name: "ENet_Publ",
  color: "#00FF04",
  class: "rede",
  classProps: {
    tipo: "ENET",
  },
  description: "ENpb",
};

const enpvHandle: IHandle<"rede"> = {
  id: "110",
  name: "ENet_Priv",
  color: "#30946C",
  class: "rede",
  classProps: {
    tipo: "ENET",
  },
  description: "ENpv",
};

const siHandle: IHandle<"sinal"> = {
  id: "120",
  name: "SI",
  color: "#242424",
  class: "sinal",
  classProps: {
    tipo: "SI/O",
  },
  description: "SI",
};

const soHandle: IHandle<"sinal"> = {
  id: "130",
  name: "SO",
  color: "#646464",
  class: "sinal",
  classProps: {
    tipo: "SI/O",
  },
  description: "SO",
};

const iHandle: IHandle<"sinal"> = {
  id: "140",
  name: "I",
  color: "#242424",
  class: "sinal",
  classProps: {
    tipo: "I/O",
  },
  description: "I",
};

const oHandle: IHandle<"sinal"> = {
  id: "150",
  name: "O",
  color: "#646464",
  class: "sinal",
  classProps: {
    tipo: "I/O",
  },
  description: "O",
};

export const handlesOptions = {
  pcHandle,
  pwHandle,
  pwm35Handle,
  hacHandle,
  acHandle,
  hdcHandle,
  dcuHandle,
  dcsHandle,
  dnHandle,
  enHandle,
  enpbHandle,
  enpvHandle,
  siHandle,
  soHandle,
  iHandle,
  oHandle,
};

export const handlesOptionsArray = Array.from(Object.values(handlesOptions));
