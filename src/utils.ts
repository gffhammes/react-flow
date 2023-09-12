import { ISelectOption } from "./Form/SelectInput";
import { IHandle, THandleClass } from "./interfaces";

export const disabledGrey = "#e3e3e3";

export const getConnectorColor = <T extends THandleClass>(
  handle: IHandle<T>,
  filteredConnectors: ISelectOption[]
) => {
  const isSelected = !!filteredConnectors.find(
    (connector) => connector.value === handle.id
  );

  if (isSelected) return handle.color;

  return disabledGrey;
};

export const getHandleType = (handleId: string) => {
  return handleId.split("-")[0];
};
