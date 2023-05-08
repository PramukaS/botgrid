import React, { useState } from "react";
import {
  Card as ModifiedCard,
  CardContent,
  Typography,
  InputBase,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Button from "../Button/Button";
import IconButton from "../Button/IconButton";

function Card({ title, description, imgURL }) {
  const [inputs, setInputs] = useState([""]);

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

  return (
    <ModifiedCard
      style={{
        width: 300,
        height: 400,
        justifyContent: "center",
        background: "#D0D0D0",
      }}
    >
      <CardContent style={{ textAlign: "center" }}>
        <img
          src={imgURL}
          alt="cardImage"
          style={{ height: 100, windth: 100 }}
        />
        <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
          {title}
        </Typography>
        <Typography sx={{ fontWeight: "medium", fontSize: 16 }}>
          {description}
        </Typography>
        <div>
          {inputs.map((input, index) => (
            <div className="input-container" key={index}>
              <InputBase
                size="small"
                placeholder="Paste link here"
                style={{
                  marginTop: 10,
                  color: "black",
                  fontSize: 16,
                  padding: "5px 10px 5px 20px",
                  borderRadius: 5,
                  backgroundColor: "white",
                  width: 200,
                }}
                type="text"
                value={input}
                onChange={(event) => handleInputChange(event, index)}
              />
              {index === 0 && (
                <IconButton
                  Icon={AddIcon}
                  classname="primary"
                  onClick={handleAddInput}
                  style={{ padding: 3 }}
                />
              )}
              {index !== 0 && (
                <IconButton
                  onClick={() => handleRemoveInput(index)}
                  Icon={RemoveIcon}
                  classname="primary"
                  style={{ padding: 3 }}
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
