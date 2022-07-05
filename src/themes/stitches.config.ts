import { createStitches } from "@stitches/react";
import { violetDark, mauveDark } from "@radix-ui/colors";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...violetDark,
      ...mauveDark,
    },
  },
});
