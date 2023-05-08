import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import Button from "../../components/ui_components/Button/Button";
import cardContent from "../../data/CardContentData";
import Card from "../../components/ui_components/Card/Card";

function UploadContentPage() {
  return (
    <Grid container justifyContent="left" spacing={2} style={{ marginTop: 10 }}>
      <Grid item xs={12}>
        <Typography sx={{ fontWeight: "bold", fontSize: 25 }}>
          Create Content Bot
        </Typography>
        <Typography sx={{ fontWeight: "bold", fontSize: 16 }}>
          Paste link for create bot
        </Typography>
        <Typography sx={{ fontWeight: "medium", fontSize: 18, marginTop: 5 }}>
          Create bot from your own content like your web site link, youtube
          links, web pages links
        </Typography>
        <Typography sx={{ fontWeight: "bold", fontSize: 18, marginTop: 2 }}>
          Choose one option for create your chat bot
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container direction="row" spacing={12}>
          {cardContent.map((item) => (
            <Grid item key={item.id}>
              <Card
                title={item.title}
                description={item.description}
                imgURL={item.imageURL}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Button name="Next" style={{ float: "right" }} classname="primary" />
      </Grid>
    </Grid>
  );
}

export default UploadContentPage;
