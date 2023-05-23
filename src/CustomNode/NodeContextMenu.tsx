import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MouseEventHandler, PropsWithChildren, useState } from "react";
import { useFlowContext } from "../Flow/context/useFlowContext";

export interface INodeContextMenuProps extends PropsWithChildren {
  nodeId: string;
}

export const NodeContextMenu = ({
  children,
  nodeId,
}: INodeContextMenuProps) => {
  const { handleDeleteNode } = useFlowContext();

  const [contextMenu, setContextMenu] = useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);

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

  return (
    <div onContextMenu={handleContextMenu} style={{ cursor: "context-menu" }}>
      {children}

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
            handleDeleteNode(nodeId);
            handleClose();
          }}
        >
          Excluir
        </MenuItem>
      </Menu>
    </div>
  );
};
