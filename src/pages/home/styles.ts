import { styled } from "../../themes/stitches.config";

const AnimationContainer = styled("div", {
  position: "fixed",
  bottom: 0,
  left: 0,

  "@lg": {
    right: 0,
  },

  "@xlg": {
    left: "50vw",
  },
});

// eslint-disable-next-line import/prefer-default-export
export { AnimationContainer };
