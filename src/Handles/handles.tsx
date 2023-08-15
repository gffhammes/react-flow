import { IHandle } from "../interfaces";

const blueHandle: IHandle = {
  id: "1",
  name: "Azul",
  color: "#1900ff",
};

const redHandle: IHandle = {
  id: "2",
  name: "Vermelho",
  color: "#ec0b0b",
};

const greenHandle: IHandle = {
  id: "3",
  name: "Verde",
  color: "#16e70f",
};

const purpleHandle: IHandle = {
  id: "4",
  name: "Roxo",
  color: "#8900e4",
};

const pcHandle: IHandle = {
  id: "5" ,
  name: "PC_PowerControl",
  color: "#000000",
};
const pwHandle: IHandle = {
  id: "25",
  name: "PW_PowerWeld",
  color: "#946306",
};
const pwm35Handle: IHandle = {
  id: "30",
  name: "PCM35_PowerControl",
  color: "#8C8C8C",
};
const hacHandle: IHandle = {
  id: "40",
  name: "HAC_Hot120VAC",
  color: "#FE9601",
};
const acHandle: IHandle = {
  id: "50",
  name: "AC_Control120VAC",
  color: "#FC0201",
};
const hdcHandle: IHandle = {
  id: "60",
  name: "HDC_Hot",
  color: "#FFC85A",
};
const dcuHandle: IHandle = {
  id: "70",
  name: "DC_Unswitched",
  color: "#0100FE",
};
const dcsHandle: IHandle = {
  id: "80",
  name: "DC_Switched",
  color: "#C80194",
};
const dnHandle: IHandle = {
  id: "90",
  name: "DNet",
  color: "#FFEE13",
};
const enpbHandle: IHandle = {
  id: "100",
  name: "ENet_Publ",
  color: "#00FF04",
};
const enpvHandle: IHandle = {
  id: "110",
  name: "ENet_Priv",
  color: "#30946C",
};
const siHandle: IHandle = {
  id: "120",
  name: "SI",
  color: "#242424",
};
const soHandle: IHandle = {
  id: "130",
  name: "SO",
  color: "#646464",
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
  enpbHandle,
  enpvHandle,
  siHandle,
  soHandle,
  blueHandle,
  redHandle,
  greenHandle,
  purpleHandle,
};
