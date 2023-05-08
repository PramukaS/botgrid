import React from "react";
import { IconButton as ModifiedIconButton } from "@mui/material";
import { iconButtonStyled } from "./styles";

function IconButton({ Icon, onClick, classname, style }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <ModifiedIconButton
      style={{ ...iconButtonStyled[classname], ...style }}
      className={classname}
      onClick={handleClick}
    >
      {Icon && <Icon />}
    </ModifiedIconButton>
  );
}

export default IconButton;
