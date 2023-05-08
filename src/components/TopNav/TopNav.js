import React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Avatar, Badge, Tooltip } from "@mui/material";
import Button from "../ui_components/Button/Button";
import {
  appBarContainer,
  toolBarContainer,
  titleContainer,
  textStyle,
  actionContainer,
  iconStyle,
} from "./styles";
import { SYSTEM_DEFAULT_THEME } from "../../Theme";
import SearchBar from "../ui_components/SearchBar/SearchBar";
import AvatarImage from "../../assets/avatar.jpg";
import BotImage from "../../assets/bot_1.svg";
import BotImage2 from "../../assets/bot_2.svg";

const drawerWidth = 200;

const AppBar = styled(MuiAppBar)(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const TopNav = ({ open, handleDrawerOpen }) => {
  return (
    <AppBar position="fixed" open={open} style={appBarContainer}>
      <Toolbar style={toolBarContainer}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            color: SYSTEM_DEFAULT_THEME.PRIMARY_COLOR,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <div style={titleContainer}>
          <img src={BotImage} alt="bot" style={{ marginRight: 20 }} />
          <Typography variant="h5" noWrap component="div" style={textStyle}>
            BOT GRID
          </Typography>
        </div>
        <SearchBar />
        <div style={actionContainer}>
          <Button name="Create" classname="primary" imgURL={BotImage2} />
          <Tooltip title="Chat with Bot">
            <Badge badgeContent={4} color="error">
              <QuestionAnswerOutlinedIcon style={iconStyle} />
            </Badge>
          </Tooltip>
          <Tooltip title="help">
            <HelpOutlineOutlinedIcon style={iconStyle} />
          </Tooltip>
          <Tooltip title="Notification">
            <NotificationsNoneOutlinedIcon style={iconStyle} />
          </Tooltip>
          <Tooltip title="Profile">
            <Avatar alt="Remy Sharp" src={AvatarImage} />
          </Tooltip>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
