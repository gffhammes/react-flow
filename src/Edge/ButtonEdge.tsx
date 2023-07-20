import { BaseEdge, EdgeProps, getSmoothStepPath } from "reactflow";
import { handlesOptions } from "../CustomNode/Handles/handles";

export const ButtonEdge = ({
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  data,
}: EdgeProps) => {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const handleObject = Object.values(handlesOptions).find(
    (option) => option.id === data.handleId
  );

  console.log(handleObject);

  return (
    <BaseEdge
      path={edgePath}
      markerEnd={markerEnd}
      style={{
        ...style,
        strokeWidth: 2,
        stroke: handleObject?.color,
      }}
    />
  );
};
