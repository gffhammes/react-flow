import { PropsWithChildren, useState } from "react";
import { FilterContext, IFilterContextValue } from "./FilterContext";
import { IConnector } from "../connectors";
import { ISelectOption } from "../Form/SelectInput";
import { IOption } from "../Form/CheckboxFormGroup";

export const FilterContextProvider = ({ children }: PropsWithChildren) => {
  const [selectedConnectors, setSelectedConnectors] = useState<IConnector[]>(
    []
  );

  const handleSelectedConnectorsChange = (
    connector: IOption,
    checked: boolean
  ) => {
    setSelectedConnectors((selectedConnectors) => {
      if (!checked) {
        return selectedConnectors.filter(
          (selectedConnector) => selectedConnector.color !== connector.value
        );
      }

      return [
        ...selectedConnectors,
        { label: connector.label, color: connector.value as string },
      ];
    });
  };

  const value: IFilterContextValue = {
    selectedConnectors,
    handleSelectedConnectorsChange,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
