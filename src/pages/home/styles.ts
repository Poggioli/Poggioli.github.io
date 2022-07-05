import { css, styled } from "../../themes/stitches.config";

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

export {
  Container,
  WhoIAm,
  Title,
  TitleHighLight,
  SubTitle,
  Body,
  AnimationContainer,
};
