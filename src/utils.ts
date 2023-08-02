import { ISelectOption } from "./Form/SelectInput";
import { IHandle } from "./Handles/interfaces";

export const disabledGrey = "#e3e3e3";

export const getConnectorColor = (
  handle: IHandle,
  filteredConnectors: ISelectOption[]
) => {
  const isSelected = !!filteredConnectors.find(
    (connector) => connector.value === handle.id
  );

  if (isSelected) return handle.color;

  return disabledGrey;
};
