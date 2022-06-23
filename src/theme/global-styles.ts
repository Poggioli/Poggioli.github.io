import { globalCss } from "@stitches/react";

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  'body, html': {
    maxHeight: '100vh',
    maxWidth: '100vw',
    height: '100%',
    width: '100%'
  }
});

export default globalStyles;
