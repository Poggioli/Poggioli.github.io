import { Link } from "react-router-dom";
import { styled } from "../../../themes/stitches.config";

const Label = styled(Link, {
  color: "$mauve11",
  textDecoration: "inherit",
  transition: "all 500ms ease",

  "&:hover": {
    color: "$violet11",
  },
});

export default Label;
