import { styled } from "../../themes/stitches.config";
import Text from "../text";

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
});
const Level = styled(Text, {
  color: "$mauve11",
});

export { Container, Level };
