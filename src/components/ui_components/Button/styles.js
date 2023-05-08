import { SYSTEM_DEFAULT_THEME } from "../../../Theme";

export const imageIconWrapper = {
  height: 20,
  marginLeft: 10,
};

export const nameWrapper = {
  primary: {
    margin: "0px 10px 0px 10px",
  },
  back: {
    margin: "0px",
  },
};

export const buttonStyled = {
  primary: {
    backgroundColor: SYSTEM_DEFAULT_THEME.PRIMARY_COLOR,
    color: SYSTEM_DEFAULT_THEME.WHITE_COLOR,
  },
  secondary: {
    backgroundColor: SYSTEM_DEFAULT_THEME.SECONDARY_COLOR,
  },
  back: {
    background: "none",
    color: "black",
  },
};

export const iconButtonStyled = {
  primary: {
    backgroundColor: SYSTEM_DEFAULT_THEME.PRIMARY_COLOR,
    color: SYSTEM_DEFAULT_THEME.WHITE_COLOR,
    borderRadius: SYSTEM_DEFAULT_THEME.ICON_BUTTON_BORDER_RADIUS,
  },
  secondary: {
    backgroundColor: SYSTEM_DEFAULT_THEME.SECONDARY_COLOR,
  },
};
