import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Button from "../../components/ui_components/Button/Button";
import cardContent from "../../data/CardContentData";
import Card from "../../components/ui_components/Card/Card";
import {
  mainContainer,
  headerContainer,
  titleStyle,
  subTitleStyle,
  descriptionStyle,
  actionTitle,
  gridItemContainer,
  actionButtonContainer,
} from "./styles";

function UploadContentPage() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <div style={mainContainer}>
      <div>
        <Button
          name="Back"
          startIcon={<ArrowBackIosIcon sx={{ margin: 0 }} />}
          classname="back"
        />
      </div>
      <div style={headerContainer}>
        <Typography style={titleStyle}>Create Content Bot</Typography>
        <Typography style={subTitleStyle}>Paste link for create bot</Typography>
        <Typography style={descriptionStyle}>
          Create bot from your own content like your web site link, youtube
          links, web pages links
        </Typography>
        <Typography style={actionTitle}>
          Choose one option for create your chat bot
        </Typography>
      </div>
      <Grid container spacing={12}>
        {cardContent.map((item, index) => (
          <Grid item key={item.id} style={gridItemContainer}>
            <Card
              title={item.title}
              description={item.description}
              imgURL={item.imageURL}
              index={index}
              onClick={() => handleClick(index)}
              selectedCard={selectedCard}
            />
          </Grid>
        ))}
      </Grid>
      <div style={actionButtonContainer}>
        <Button name="Next" classname="primary" />
      </div>
    </div>
  );
}

export default UploadContentPage;
