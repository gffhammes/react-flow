import { PropsWithChildren, useState } from "react";
import { FilterContext, IFilterContextValue } from "./FilterContext";

export const FilterContextProvider = ({ children }: PropsWithChildren) => {
  const [selectedConnectors, setSelectedConnectors] = useState<string[]>([]);

  const handleSelectedConnectorsChange = (newValue: string[]) =>
    setSelectedConnectors(newValue);

  const value: IFilterContextValue = {
    selectedConnectors,
    handleSelectedConnectorsChange,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
