import { Menu, MenuItem } from "@mui/material";
import {
  MouseEventHandler,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import { useFlowContext } from "../Flow/context/useFlowContext";

export interface IMouseCoordinates {
  mouseX: number;
  mouseY: number;
}

export interface IEdgeContextMenuProps {}

export interface IEdgeContextMenuRef {
  handleOpen: (args: IMouseCoordinates & { edgeId: string }) => void;
}

export const EdgeContextMenu = forwardRef<IEdgeContextMenuRef>((props, ref) => {
  const { handleDeleteEdge } = useFlowContext();
  const [contextMenu, setContextMenu] = useState<IMouseCoordinates | null>(
    null
  );
  const [edgeId, setEdgeId] = useState("");

  const handleContextMenu: MouseEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();

    setContextMenu((contextMenu) =>
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : null
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  useImperativeHandle(
    ref,
    () => ({
      handleOpen: ({ edgeId, ...coordinates }) => {
        setContextMenu(coordinates);
        setEdgeId(edgeId);
      },
    }),
    []
  );

  return (
    <div onContextMenu={handleContextMenu} style={{ cursor: "context-menu" }}>
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        <MenuItem
          onClick={() => {
            handleDeleteEdge(edgeId);
            handleClose();
          }}
        >
          Excluir
        </MenuItem>
      </Menu>
    </div>
  );
});
