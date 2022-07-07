import { MdLaunch } from "react-icons/md";
import { Link } from "react-router-dom";
import { styled } from "../../themes/stitches.config";
import Text from "../text";

const Container = styled("div");

const Pos = styled(Text, {
  color: "$violet11",
});

const Company = styled(Text, {
  marginTop: "$3",
  display: "inline-flex",
  alignItems: "center",
  color: "$mauve11",
});

const CompanyLink = styled(Text, {
  marginTop: "$3",
  display: "inline-flex",
  alignItems: "center",
  transition: "color 500ms ease",
  color: "$mauve11",
  textDecoration: "none",

  "&:hover": {
    cursor: "pointer",
    color: "$violet12",
  },
});

const Techs = styled(Text, {
  marginTop: "$3",
  color: "$mauve11",
});

const DurationTime = styled(Text, {
  color: "$mauve11",
  marginTop: "$2",
});

const SeeMore = styled(Link);

const GotToIcon = styled(MdLaunch, {
  marginLeft: "$4",
  fontWeight: "$3",
  fontSize: "$4",
});

export {
  Container,
  Pos,
  Company,
  Techs,
  DurationTime,
  SeeMore,
  GotToIcon,
  CompanyLink,
};
