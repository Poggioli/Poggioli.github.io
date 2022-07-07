import { styled } from "./themes/stitches.config";

const Container = styled("div", {
  margin: "0 $6",
  padding: "calc(50vh - 11rem) 0 0",

  "@sm": {
    margin: "0 $8",
  },

  "@lg": {
    margin: "0 25vw",
  },
});

export default Container;
