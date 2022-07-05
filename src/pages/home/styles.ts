import { css, styled } from "../../themes/stitches.config";

const Container = styled("div", {
  margin: "0 $6",
  padding: "calc(50vh - 6.5rem) 0 0",

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

export { Container, WhoIAm, Title, TitleHighLight, SubTitle, Body };
