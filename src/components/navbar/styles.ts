import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { styled } from "../../themes/stitches.config";

const Nav = styled("nav", {
  zIndex: 2,
  position: "fixed",
  width: "100vw",
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

const LinearGradient = styled("div", {
  background: "linear-gradient(to top, transparent, $violet1 70%)",
  width: "100vw",
  height: "5rem",
  marginTop: "-1px",
});

const Container = styled("div", {
  padding: "$4",
  display: "flex",
  justifyContent: "space-between",
  background: "$violet1",
});

export {
  Nav,
  LinkedinIcon,
  GitHubIcon,
  ContainerIcons,
  LinkIcon,
  LinearGradient,
  Container,
};
