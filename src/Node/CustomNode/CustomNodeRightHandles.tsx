import { CustomHandle } from "../../Handles/CustomHandle";
import { getConnectorColor } from "../../utils";
import { useFilterContext } from "../../FilterContext/useFilterContext";
import { ICustomNodeHandle } from "./interfaces";
import { CustomNodeHandleWrapper } from "./CustomNodeHandleWrapper";

export interface ICustomNodeRightHandlesProps {
  isConnectable: boolean;
  rightHandles: ICustomNodeHandle[];
}

export const CustomNodeRightHandles = ({
  isConnectable,
  rightHandles,
}: ICustomNodeRightHandlesProps) => {
  const { selectedConnectors } = useFilterContext();

  return (
    <CustomNodeHandleWrapper variant="right">
      {rightHandles.map((handle, index) => (
        <CustomHandle
          type="source"
          key={index}
          isConnectable={isConnectable}
          color={getConnectorColor(handle, selectedConnectors)}
          id={handle.name + "-" + index}
          tooltip={handle.name}
        />
      ))}
    </CustomNodeHandleWrapper>
  );
};
