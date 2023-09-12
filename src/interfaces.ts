export interface IDimentions {
  height: number;
  width: number;
}

export interface IHandleClassEnergia {
  tensao: number;
}
export interface IHandleClassRede {
  tipo: "ENET" | "DNET";
}
export interface IHandleClassSinal {
  tipo: "I/O" | "SI/O";
}

export type THandleClass = "energia" | "rede" | "sinal";

export type TClassProps<Class> = Class extends "energia"
  ? IHandleClassEnergia
  : Class extends "rede"
  ? IHandleClassRede
  : Class extends "sinal"
  ? IHandleClassSinal
  : never;

export interface IHandle<T> {
  id: string;
  name: string;
  color: string;
  description: string;
  class: T;
  classProps: TClassProps<T>;
}
