import { BaseEdge, EdgeProps, getSmoothStepPath } from "reactflow";
import { handlesOptions, handlesOptionsArray } from "../Handles/handles";
import { useFilterContext } from "../FilterContext/useFilterContext";
import { disabledGrey, getHandleType } from "../utils";

export const ButtonEdge = ({
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  targetHandleId,
}: EdgeProps) => {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  const { selectedConnectors } = useFilterContext();

  const handleType = getHandleType(targetHandleId ?? "");

  const isFiltered = !!selectedConnectors.find((connectorId) => {
    const connector = handlesOptionsArray.find(
      (option) => option.id === connectorId
    );

    const isFiltered = connector?.name === handleType;

    return isFiltered;
  });

  const handleObject = Object.values(handlesOptions).find((option) => {
    return option.name === handleType;
  });

  return (
    <BaseEdge
      path={edgePath}
      markerEnd={markerEnd}
      style={{
        ...style,
        strokeWidth: 2,
        stroke: isFiltered ? handleObject?.color : disabledGrey,
      }}
    />
  );
};
