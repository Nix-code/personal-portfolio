import { createTheme, Theme } from "@mui/material";

export const Colors: Record<string, string> = {
  primary: "#395a65",
  backgroundLightGray: "#fdfdfd",
  backgroundLightBlack: "#253b43",
  accentOrange: "#df7261",
  backgroundDarkGray: "#d8d9da",
  textShaft: "#cfa29d",
  textBlack: "#000000",
  plumPlate: "linear-gradient(to right, #667eea, #764ba2)",
  cloudyKnoxville: "linear-gradient(to right,#fdfbfb, #ebedee)",
  premiumDark: "linear-gradient(to right, #434343, #000000)",
  royal: "linear-gradient(#1b2e34,#3c5b63)",
  terminal: "#20C20E",
  almost: "#d2e7ff",
  textGray: "#343d46",
  // Terminal Layout theme
  terminalBackgroundColor: "rgb(253, 246, 228)",
  navBackgroundColor: "#ccc",
  terminalOrangeDot: "#fc5b57",
  terminalYellowDot: "#e5bf3c",
  terminalGreenDot: "#57c038",
  aboutPrimaryTextColor: "#7D7C7C",
  aboutPrimaryColor: "#9AD2B2",

  // Work experience
  workPrimaryTitle: "#595959",

  // Footer color
  footerBackGroundColor: "#C7D0FF",
};

const baseTheme: Theme = createTheme({
  palette: {
    primary: {
      main: Colors.textShaft,
    },
    secondary: {
      main: Colors.accentOrange,
    },
    background: {
      default: Colors.backgroundLightGray,
      paper: Colors.backgroundLightBlack,
    },
    text: {
      primary: Colors.textBlack,
      secondary: Colors.textShaft,
    },
  },
});

export default baseTheme;
