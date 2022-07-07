import { keyframes, styled } from "../../themes/stitches.config";

const moveToTop = keyframes({
  "0%": {
    top: "100vh",
  },
  "100%": {
    top: "calc(50vh - 9rem)",
  },
});

const VerticalDivider = styled("div", {
  background: "linear-gradient(to top, $violet1, $violet8, $violet11)",
  width: "1px",
  height: "100%",
});

const Container = styled("div", {
  position: "fixed",
  top: "calc(50vh - 9rem)",
  bottom: 0,
  left: "$4",
  animation: `${moveToTop} 2500ms`,

  "@lg": {
    left: "calc(24vw - 2rem)",
  },
});

export { VerticalDivider, Container };
