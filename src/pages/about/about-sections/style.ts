import Text from "../../../components/text";
import { styled } from "../../../themes/stitches.config";

const Container = styled("div");
const AboutTitle = styled(Text, {});
const InfoContainer = styled("div", {
  display: "grid",
  gridTemplate: "1fr/repeat(2, 1fr)",
  gridGap: "2rem",
  gridRowGap: "1rem",
  marginTop: "$4",

  "@sm": {
    gridTemplate: "1fr/repeat(3, 1fr)",
  },

  "@xlg": {
    gridTemplate: "1fr/repeat(4, 1fr)",
  },
});
const Info = styled(Text, {
  color: "$mauve11",
  lineHeight: "1.3",
});

export { Container, AboutTitle, InfoContainer, Info };
