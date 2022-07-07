import { styled } from "./themes/stitches.config";

const Container = styled("div", {
  margin: "0 $6",
  padding: "calc(50vh - 3.5rem) 0 $9 0",

  "@sm": {
    margin: "0 $8 0 $8",
  },

  "@lg": {
    margin: "0 12vw 0 24vw",
  },
});

export default Container;
