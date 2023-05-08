import React from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import BotImage from "../../assets/bot_2.png";

import { SYSTEM_DEFAULT_THEME } from "../../Theme";

export const mainListItems = (
  <div>
    <ListItemButton>
      <ListItemIcon>
        <HomeIcon
          style={{
            color: SYSTEM_DEFAULT_THEME.PRIMARY_COLOR,
          }}
        />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon
          style={{
            color: SYSTEM_DEFAULT_THEME.PRIMARY_COLOR,
          }}
        />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <QueryStatsIcon
          style={{
            color: SYSTEM_DEFAULT_THEME.PRIMARY_COLOR,
          }}
        />
      </ListItemIcon>
      <ListItemText primary="Analytics" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        {/* <SmartToyIcon
          style={{
            color: SYSTEM_DEFAULT_THEME.PRIMARY_COLOR,
          }}
        /> */}
        <img src={BotImage} alt="bot" style={{ height: 25 }} />
      </ListItemIcon>

      <ListItemText primary="My Bots" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SettingsIcon
          style={{
            color: SYSTEM_DEFAULT_THEME.PRIMARY_COLOR,
          }}
        />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <HelpIcon
          style={{
            color: SYSTEM_DEFAULT_THEME.PRIMARY_COLOR,
          }}
        />
      </ListItemIcon>
      <ListItemText primary="Help" />
    </ListItemButton>
  </div>
);
