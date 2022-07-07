import { MdClose, MdOutlineMoreVert } from "react-icons/md";
import { css, styled } from "../../themes/stitches.config";

const List = styled("ul", {
  listStyle: "none",
  display: "inline-flex",
  justifyContent: "end",
  alignItems: "end",
  flexDirection: "column",

  "@md": {
    flexDirection: "row",
    alignItems: "center",
  },
});

const ListItem = styled("li", {
  marginLeft: "$4",
  marginBottom: "$5",
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",

  " *:hover": {
    cursor: "pointer",
  },

  " a": {
    fontSize: "$9",

    "@md": {
      fontSize: "$6",
    },
  },

  "@md": {
    marginBottom: 0,
  },
});

const MenuIcon = styled(MdOutlineMoreVert, {
  color: "$mauve11",
  fontSize: "$8",

  "@md": {
    display: "none",
  },

  "&:hover": {
    cursor: "pointer",
  },
});

const BackDropOpened = css({
  opacity: 0.98,
});

const BackDrop = styled("div", {
  position: "fixed",
  backgroundColor: "$violet2",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100%",
  opacity: 0,
  pointerEvents: "none",
  transition: "all 1500ms ease",

  "@md": {
    display: "none",
  },
});

const ContainerOpened = css({
  left: 0,
});

const Container = styled("div", {
  position: "fixed",
  width: "100%",
  height: "100%",
  top: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "end",
  justifyContent: "space-between",
  padding: "$4 $4 $8 $4",
  opacity: 1,
  left: "100vw",
  transition: "all 1500ms ease",

  "@md": {
    position: "static",
    backgroundColor: "inherit",
    padding: "0",
    flexDirection: "row",
    width: "inherit",
    justifyContent: "end",
  },
});

const CloseIcon = styled(MdClose, {
  color: "$mauve11",
  fontSize: "$8",

  "@md": {
    display: "none",
  },
});

export {
  List,
  ListItem,
  MenuIcon,
  Container,
  CloseIcon,
  BackDrop,
  ContainerOpened,
  BackDropOpened,
};
