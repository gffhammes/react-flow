import { PropsWithChildren, useState } from "react";
import { FilterContext, IFilterContextValue } from "./FilterContext";
import { ISelectOption } from "../Form/SelectInput";
import { filterOptions } from "../Flow/context/FlowContextProvider";

export const FilterContextProvider = ({ children }: PropsWithChildren) => {
  const [selectedConnectors, setSelectedConnectors] =
    useState<ISelectOption[]>(filterOptions);

  const handleSelectedConnectorsChange = (
    connector: ISelectOption,
    checked: boolean
  ) => {
    setSelectedConnectors((selectedConnectors) => {
      if (!checked) {
        return selectedConnectors.filter(
          (selectedConnector) => selectedConnector.value !== connector.value
        );
      }

      return [...selectedConnectors, connector];
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
