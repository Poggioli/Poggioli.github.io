import { css, keyframes, styled } from "../../themes/stitches.config";

// help https://ramlmn.github.io/visualizing-matrix3d/
const rotate = keyframes({
  "0%": {
    transform: "matrix3d(1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, -48, 0, 1)",
  },
  "100%": {
    transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
  },
});

const fadeIn = keyframes({
  "0%": {
    opacity: 0,
  },
  "20%": {
    opacity: 0,
  },
  "80%": {
    opacity: 1,
  },
});

const leftToRight = keyframes({
  "0%": {
    transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -200, 0, 0, 1)",
  },
  "20%": {
    transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -100, 0, 0, 1)",
  },
  "100%": {
    transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
  },
});

const Container = styled("div", {
  margin: "0 $6",
  padding: "calc(50vh - 15rem) 0 0",

  "@sm": {
    margin: "0 $8",
  },

  "@lg": {
    margin: "0 25vw",
  },
});

const WhoIAm = styled("div", {
  display: "flex",
  flexDirection: "column",
});

const Title = css({
  display: "inline-block",
  marginBottom: "$4",
  animation: `${rotate} 3000ms, ${fadeIn} 2000ms`,
});

const TitleHighLight = css({
  color: "$violet11",
});

const SubTitle = css({
  display: "inline-block",
  color: "$violet11",
  marginBottom: "$4",
});

const Body = css({
  color: "$mauve11",
});

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

const WrapperBody = styled("div", {
  animation: `${leftToRight} 3000ms, ${fadeIn} 3000ms`,
});

export {
  Container,
  WhoIAm,
  Title,
  TitleHighLight,
  SubTitle,
  Body,
  AnimationContainer,
  WrapperBody,
};
