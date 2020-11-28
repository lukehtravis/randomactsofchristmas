import { createMuiTheme } from "@material-ui/core/styles";

const christmasTheme = createMuiTheme({
  palette: {
    primary: {
      lightGreen: "#146B3A",
      darkGreen: "#165B33",
      yellow: "#F8B229",
      lightRed: "#EA4630",
      darkRed: "#BB2528",
      main: "#fff",
    },
  },
  typography: {
    fontFamily: "Christmas",
    p: {
      fontFamily: "Christmas",
    },
  },
});

christmasTheme.overrides = {
  MuiCssBaseline: {
    "@global": {
      h1: {
        ...christmasTheme.typography,
      },
      h2: {
        ...christmasTheme.typography,
      },
      h3: {
        ...christmasTheme.typography,
      },
      a: {
        ...christmasTheme.typography,
      },
      hr: {
        border: "0",
        height: "0",
        borderTop: "1px solid rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
      },
      p: {
        fontFamily: christmasTheme.typography.p.fontFamily,
      },
    },
  },
};

export default christmasTheme;
