import { useState, useCallback, useRef } from "react";
import ReactFlow, { Controls, Background, Position } from "reactflow";
import "reactflow/dist/style.css";
import uuid from "react-uuid";
import { useFlowContext } from "./context/useFlowContext";
import { useFilterContext } from "../FilterContext/useFilterContext";
import { edgeTypes, nodeTypes } from "./context/FlowContextProvider";
import { EdgeContextMenu, IEdgeContextMenuRef } from "../Edge/EdgeContextMenu";

export const Flow = () => {
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  const reactFlowWrapper = useRef<any>(null);
  const {
    edges,
    nodes,
    onConnect,
    onEdgesChange,
    onNodesChange,
    handleNewNode,
  } = useFlowContext();
  const { selectedConnectors } = useFilterContext();
  const edgeContextMenuRef = useRef<IEdgeContextMenuRef>(null);

  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance?.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const newNode = {
        id: uuid(),
        type,
        position,
        data: { label: `${type} node` },
        targetPosition: Position.Left,
        sourcePosition: Position.Right,
      };

      handleNewNode(newNode);
    },
    [reactFlowInstance]
  );

  const filteredEdges = edges.filter((edge) => {
    const mustShowEdge = !!selectedConnectors.find(
      (connector) => connector.value === edge.sourceHandle
    );

    return mustShowEdge;
  });

  return (
    <div style={{ height: "100%", width: "100%" }} ref={reactFlowWrapper}>
      <ReactFlow
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        nodes={nodes}
        edges={filteredEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onEdgeContextMenu={(e, edge) => {
          e.preventDefault();
          // console.log(e, edge);

          edgeContextMenuRef.current?.handleOpen({
            mouseX: e.clientX,
            mouseY: e.clientY,
            edgeId: edge.id,
          });
        }}
        // onConnectStart={(e) => console.log(e)}
        // onConnectEnd={onConnectEnd}
      >
        <Background />
        <Controls />
      </ReactFlow>

      <EdgeContextMenu ref={edgeContextMenuRef} />
    </div>
  );
};
