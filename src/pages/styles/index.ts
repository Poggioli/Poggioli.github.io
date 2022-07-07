import Text from "../../components/text";
import { keyframes, styled } from "../../themes/stitches.config";

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

const Section = styled("section", {
  display: "flex",
  flexDirection: "column",
});

const PageTitle = styled(Text, {
  display: "inline-block",
  marginBottom: "$4",
  animation: `${rotate} 3000ms, ${fadeIn} 2000ms`,
});

const HighLight = styled(Text, {
  color: "$violet11",
});

const Body = styled("div", {
  animation: `${leftToRight} 3000ms, ${fadeIn} 3000ms`,
});

const BodySubtitle = styled(Text, {
  display: "inline-block",
  color: "$violet11",
  marginBottom: "$4",
});

const BodyMoreInfo = styled(Text, {
  color: "$mauve11",
});

export { Section, PageTitle, HighLight, Body, BodySubtitle, BodyMoreInfo };
