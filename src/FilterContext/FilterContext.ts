import { createContext } from "react";

export interface IFilterContextValue {
  selectedConnectors: string[];
  handleSelectedConnectorsChange: (newValue: string[]) => void;
}

const initialValue: IFilterContextValue = {
  selectedConnectors: [],
  handleSelectedConnectorsChange: () => {},
};

export const FilterContext = createContext<IFilterContextValue>(initialValue);
