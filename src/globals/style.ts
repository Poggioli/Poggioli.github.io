import { globalCss } from "@modulz/design-system";

export const globalStyles = globalCss({
  
  "*, *::before, *::after": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  },

  "body, html": {
    height: "100%",
  },

  body: {
    minHeight: "100%",
    margin: 0,
    color: "$hiContrast",
    backgroundColor: "$blueA1",
    fontFamily: "$untitled",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    WebkitTextSizeAdjust: "100%",

    ".dark-theme &": {
      backgroundColor: "$mauve1",
    },
  },

  "#root": {
    // height: "100%",
    // minHeight: "100%",
    backgroundColor: "$blueA1",

    ".dark-theme &": {
      backgroundColor: "$mauve1",
    },
  },

  svg: {
    display: "block",
    verticalAlign: "middle",
    overflow: "visible",
  },

  "pre, code": { margin: 0, fontFamily: "$mono" },

  "::selection": {
    backgroundColor: "$blueA5",
    color: "$blue12",
  },

  "#__next": {
    position: "relative",
    zIndex: 0,
  },

  "h1, h2, h3, h4, h5": { fontWeight: 500 },
});
