import { createContext } from "react";
import { IConnector } from "../connectors";
import { IOption } from "../Form/CheckboxFormGroup";

export interface IFilterContextValue {
  selectedConnectors: IConnector[];
  handleSelectedConnectorsChange: (
    connector: IOption,
    checked: boolean
  ) => void;
}

const initialValue: IFilterContextValue = {
  selectedConnectors: [],
  handleSelectedConnectorsChange: () => {},
};

export const FilterContext = createContext<IFilterContextValue>(initialValue);
