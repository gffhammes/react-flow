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
  id: "20" ,
  name: "PC - Power Control",
  color: "#000000",
};
const pwHandle: IHandle = {
  id: "25",
  name: "PW - Power Weld",
  color: "#946306",
};
const pwm35Handle: IHandle = {
  id: "30",
  name: "PCM35 - Power Control",
  color: "#8C8C8C",
};
const hacHandle: IHandle = {
  id: "40",
  name: "HAC - Hot 120VAC",
  color: "#FE9601",
};
const acHandle: IHandle = {
  id: "50",
  name: "AC - Control 120VAC",
  color: "#FC0201",
};


export const handlesOptions = {
  pcHandle,
  pwHandle,
  pwm35Handle,
  hacHandle,
  acHandle,
  blueHandle,
  redHandle,
  greenHandle,
  purpleHandle,
};
