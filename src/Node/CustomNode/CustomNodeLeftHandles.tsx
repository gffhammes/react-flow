import { CustomHandle } from "../../Handles/CustomHandle";
import { getConnectorColor } from "../../utils";
import { useFilterContext } from "../../FilterContext/useFilterContext";
import { ICustomNodeHandle } from "./interfaces";
import { CustomNodeHandleWrapper } from "./CustomNodeHandleWrapper";

export interface ICustomNodeLeftHandlesProps {
  isConnectable: boolean;
  leftHandles: ICustomNodeHandle[];
}

export const CustomNodeLeftHandles = ({
  isConnectable,
  leftHandles,
}: ICustomNodeLeftHandlesProps) => {
  const { selectedConnectors } = useFilterContext();

  return (
    <CustomNodeHandleWrapper variant="left">
      {leftHandles.map((handle, index) => (
        <CustomHandle
          type="target"
          key={index}
          isConnectable={isConnectable}
          color={getConnectorColor(handle, selectedConnectors)}
          id={handle.name + "-" + index}
          tooltip={handle.description}
        />
      ))}
    </CustomNodeHandleWrapper>
  );
};
