import { globalCss } from "./stitches.config";

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    fontFamily: "$ubuntu-mono",
  },

  "html, body": {
    height: "100%",
    background: "$violet1",
  },
});

export default globalStyles;
