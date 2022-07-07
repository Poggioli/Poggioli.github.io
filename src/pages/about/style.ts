import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
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

const Container = styled("section", {
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

const Body = css({
  color: "$violet11",
  marginTop: "$4",
});

const WrapperBody = styled("div", {
  animation: `${leftToRight} 3000ms, ${fadeIn} 3000ms`,
  maxWidth: "40rem",
});

const ContainerMainActions = styled("div", {
  display: "flex",
  flexDirection: "column",

  "@sm": {
    flexDirection: "row",
    alignItems: "center",
  },
});

const WrapperIcon = styled("div", {
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",

  " *": {
    marginLeft: "$4",
  },

  " :first-child": {
    marginLeft: 0,
  },
});

const WrapperResume = styled("div", {
  marginTop: "$4",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",

  "@sm": {
    marginTop: 0,
    marginLeft: "$6",
  },
});

const DownloadLabel = css({
  color: "$violet11",
  display: "inline-flex",
  alignItems: "center",
  transition: "all 500ms ease",

  " *": {
    fontSize: "$7",
  },

  "&:hover": {
    cursor: "pointer",
    color: "$violet7",

    " *": {
      "&:hover": {
        color: "$violet7",
      },
    },
  },
});

const LinkIcon = styled("a", {
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",

  " *": {
    fontSize: "$7",
    color: "$violet11",
    transition: "all 500ms ease",

    "&:hover": {
      color: "$violet7",
    },
  },
});

const LinkedinIcon = styled(FaLinkedinIn, {});

const DownloadIcon = styled(MdOutlineFileDownload, {});

const GitHubIcon = styled(FaGithub, {});

export {
  Body,
  Container,
  ContainerMainActions,
  DownloadIcon,
  DownloadLabel,
  GitHubIcon,
  LinkedinIcon,
  LinkIcon,
  Title,
  TitleHighLight,
  WrapperBody,
  WrapperIcon,
  WrapperResume,
};
