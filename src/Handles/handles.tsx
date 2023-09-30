import { IHandle } from "../interfaces";

const pcHandle: IHandle<"rede"> = {
  id: "5",
  name: "PC_PowerControl",
  color: "#000000",
  class: "rede",
  classProps: {
    tipo: "ENET",
  },
  description: "PC",
};

const pwHandle: IHandle<"rede"> = {
  id: "25",
  name: "PW_PowerWeld",
  color: "#946306",
  class: "rede",
  classProps: {
    tipo: "ENET",
  },
  description: "PW",
};

const pwm35Handle: IHandle<"rede"> = {
  id: "30",
  name: "PCM35_PowerControl",
  color: "#8C8C8C",
  class: "rede",
  classProps: {
    tipo: "ENET",
  },
  description: "PCM35",
};

const hacHandle: IHandle<"rede"> = {
  id: "40",
  name: "HAC_Hot120VAC",
  color: "#FE9601",
  class: "rede",
  classProps: {
    tipo: "ENET",
  },
  description: "HAC",
};

const acHandle: IHandle<"rede"> = {
  id: "50",
  name: "AC_Control120VAC",
  color: "#FC0201",
  class: "rede",
  classProps: {
    tipo: "ENET",
  },
  description: "AC",
};

const hdcHandle: IHandle<"rede"> = {
  id: "60",
  name: "HDC_Hot",
  color: "#FFC85A",
  class: "rede",
  classProps: {
    tipo: "ENET",
  },
  description: "HDC",
};

const dcuHandle: IHandle<"rede"> = {
  id: "70",
  name: "DC_Unswitched",
  color: "#0100FE",
  class: "rede",
  classProps: {
    tipo: "ENET",
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

const enHandle: IHandle<"sinal"> = {
  id: "100",
  name: "ENet",
  color: "#00FF04",
  class: "sinal",
  classProps: {
    tipo: "I/O",
  },
  description: "EN",
};

const enpbHandle: IHandle<"sinal"> = {
  id: "105",
  name: "ENet_Publ",
  color: "#00FF04",
  class: "sinal",
  classProps: {
    tipo: "I/O",
  },
  description: "ENpb",
};

const enpvHandle: IHandle<"energia"> = {
  id: "110",
  name: "ENet_Priv",
  color: "#30946C",
  class: "energia",
  classProps: {
    tensao: 110,
  },
  description: "ENpv",
};

const siHandle: IHandle<"rede"> = {
  id: "120",
  name: "SI",
  color: "#242424",
  class: "rede",
  classProps: {
    tipo: "ENET",
  },
  description: "SI",
};

const soHandle: IHandle<"rede"> = {
  id: "130",
  name: "SO",
  color: "#646464",
  class: "rede",
  classProps: {
    tipo: "ENET",
  },
  description: "SO",
};

const iHandle: IHandle<"rede"> = {
  id: "140",
  name: "I",
  color: "#242424",
  class: "rede",
  classProps: {
    tipo: "ENET",
  },
  description: "I",
};

const oHandle: IHandle<"rede"> = {
  id: "150",
  name: "O",
  color: "#646464",
  class: "rede",
  classProps: {
    tipo: "ENET",
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
