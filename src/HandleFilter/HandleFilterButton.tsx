import { Button, Popover } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useState } from "react";
import { HandleFilterContent } from "./HandleFilterContent";

export interface IHandleFilterButtonProps {}

export const HandleFilterButton = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Button startIcon={<FilterAltIcon />} onClick={handleClick}>
        filtros
      </Button>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          horizontal: "center",
          vertical: "top",
        }}
      >
        <HandleFilterContent />
      </Popover>
    </>
  );
};
