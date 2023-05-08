import React from "react";
import { Button as ModifiedButton } from "@mui/material";
import { imageIconWrapper, buttonStyled, nameWrapper } from "./styles";

function Button({
  name,
  imgURL,
  style,
  classname,
  startIcon,
  endIcon,
  onClick,
}) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <ModifiedButton
      startIcon={startIcon}
      endIcon={endIcon}
      style={{ ...buttonStyled[classname], ...style }}
      className={classname}
      onClick={handleClick}
    >
      {imgURL && <img src={imgURL} alt="icon" style={imageIconWrapper} />}
      <div style={nameWrapper}>{name}</div>
    </ModifiedButton>
  );
}

export default Button;
