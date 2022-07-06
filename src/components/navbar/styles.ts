import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { styled } from "../../themes/stitches.config";

const Nav = styled("nav", {
  padding: "$4",
  display: "flex",
  justifyContent: "space-between",
});

const ContainerIcons = styled("div", {
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  marginTop: "$5",

  " *": {
    marginLeft: "$6",
  },

  " :first-child": {
    marginLeft: 0,
  },

  "@md": {
    marginTop: 0,

    " *": {
      marginLeft: "$3",
    },

    " :first-child": {
      marginLeft: "$4",
    },
  },
});

const LinkIcon = styled("a", {
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",

  " *": {
    fontSize: "$10",
    color: "$violet11",
    transition: "all 500ms ease",

    "&:hover": {
      color: "$violet7",
    },

    "@md": {
      fontSize: "$7",
    },
  },
});

const LinkedinIcon = styled(FaLinkedinIn, {});

const GitHubIcon = styled(FaGithub, {});

export { Nav, LinkedinIcon, GitHubIcon, ContainerIcons, LinkIcon };
