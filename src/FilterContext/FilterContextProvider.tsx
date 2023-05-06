import { PropsWithChildren, useState } from "react";
import { FilterContext, IFilterContextValue } from "./FilterContext";
import { ISelectOption } from "../Form/SelectInput";
import { options } from "../Flow/context/FlowContextProvider";

export const FilterContextProvider = ({ children }: PropsWithChildren) => {
  const [selectedConnectors, setSelectedConnectors] =
    useState<ISelectOption[]>(options);

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
