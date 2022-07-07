import { css, styled } from "../../themes/stitches.config";

const AnimationContainer = styled("div", {
  "@md": {
    paddingLeft: "$9",
  },
});

const Box = styled("div", {});

const Flex = css({
  alignItems: "start",

  "@md": {
    flexDirection: "row !important",
    alignItems: "inherit",
  },
});

// eslint-disable-next-line import/prefer-default-export
export { AnimationContainer, Box, Flex };
