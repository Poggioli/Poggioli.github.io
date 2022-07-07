import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { css, styled } from "../../themes/stitches.config";

const ContainerMainActions = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginBottom: "$6",

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
  transition: "color 500ms ease",

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

const Contents = styled("div", {
  paddingRight: "$4",

  ">*": {
    marginTop: "$8",
  },
});

const BodySubtitleStyle = css({
  maxWidth: "40rem",
});

export {
  ContainerMainActions,
  DownloadIcon,
  DownloadLabel,
  GitHubIcon,
  LinkedinIcon,
  LinkIcon,
  WrapperIcon,
  WrapperResume,
  Contents,
  BodySubtitleStyle,
};
