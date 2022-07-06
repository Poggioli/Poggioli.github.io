import { css } from "../../../themes/stitches.config";

const MenuItemStyle = css({
  color: "$mauve11",
  textDecoration: "inherit",
  transition: "all 500ms ease",

  "&:hover": {
    color: "$violet11",
  },
});

export default MenuItemStyle;
