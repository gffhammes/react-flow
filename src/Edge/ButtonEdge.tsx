import { BaseEdge, EdgeProps, getSmoothStepPath } from "reactflow";
import { handlesOptions } from "../Handles/handles";
import { useFilterContext } from "../FilterContext/useFilterContext";
import { disabledGrey } from "../utils";

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

  const isFiltered = !!selectedConnectors.find(
    (connector) => connector.value === targetHandleId
  );

  const handleObject = Object.values(handlesOptions).find(
    (option) => option.id === targetHandleId
  );

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
