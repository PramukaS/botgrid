import React, { useState } from "react";
import {
  Card as ModifiedCard,
  CardContent,
  Typography,
  InputBase,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "../Button/IconButton";
import {
  cardContainer,
  isSelectedContainer,
  cardContentStyle,
  imageStyle,
  titleStyle,
  descriptionStyle,
  inputContainer,
  inputWrapper,
  iconButtonWrapper,
} from "./styles";

function Card({ title, description, imgURL, onClick, selectedCard, index }) {
  const [inputs, setInputs] = useState([""]);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleInputChange = (event, index) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    if (inputs.length < 2) {
      setInputs([...inputs, ""]);
    }
  };

  const handleRemoveInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  const isSelected = selectedCard === index;

  return (
    <ModifiedCard
      style={isSelected ? isSelectedContainer : cardContainer}
      onClick={handleClick}
    >
      <CardContent style={cardContentStyle}>
        <img src={imgURL} alt="cardImage" style={imageStyle} />
        <Typography style={titleStyle}>{title}</Typography>
        <Typography style={descriptionStyle}>{description}</Typography>
        <div style={inputContainer}>
          {inputs.map((input, index) => (
            <div className="input-container" key={index}>
              <InputBase
                size="small"
                placeholder="Paste link here"
                style={inputWrapper}
                type="text"
                value={input}
                onChange={(event) => handleInputChange(event, index)}
              />
              {index === 0 && (
                <IconButton
                  Icon={AddIcon}
                  classname="primary"
                  onClick={handleAddInput}
                  style={iconButtonWrapper}
                />
              )}
              {index !== 0 && (
                <IconButton
                  onClick={() => handleRemoveInput(index)}
                  Icon={RemoveIcon}
                  classname="primary"
                  style={iconButtonWrapper}
                />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </ModifiedCard>
  );
}

export default Card;
