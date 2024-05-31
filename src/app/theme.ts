import { createTheme } from "@hitachivantara/uikit-react-core";

export const newTheme = createTheme({
  name: "myTheme",
  base: "ds5",
  inheritColorModes: false,
  colors: {
    modes: {
      sand: {
        backgroundColor: "#EAE7DC",
        positive: "#738f54",
        neutral: "#7699b8",
        warning: "#d9905f",
        negative: "#bf6060",
        neutral_20: "#a4aeba",
        positive_20: "#b2bda6",
        negative_20: "#d19090",
        primary: "#536f8f",
        primary_80: "#76a6db",
      },
    },
  },
  fontFamily: {
    body: "Courier New",
  },
});
