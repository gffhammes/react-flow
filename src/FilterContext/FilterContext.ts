import { createContext } from "react";
import { ISelectOption } from "../Form/SelectInput";

export interface IFilterContextValue {
  selectedConnectors: ISelectOption[];
  handleSelectedConnectorsChange: (
    connector: ISelectOption,
    checked: boolean
  ) => void;
}

const initialValue: IFilterContextValue = {
  selectedConnectors: [],
  handleSelectedConnectorsChange: () => {},
};

export const FilterContext = createContext<IFilterContextValue>(initialValue);
