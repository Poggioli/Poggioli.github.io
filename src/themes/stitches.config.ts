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
  media: {
    sm: "(min-width: 576px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 992px)",
    xlg: "(min-width: 1200px)",
    xxlg: "(min-width: 1400px)",
  },
  theme: {
    colors: {
      ...violetDark,
      ...mauveDark,
    },
    fonts: {
      "ubuntu-mono": "Ubuntu Mono, -apple-system, system-ui, sans-serif",
    },
    fontSizes: {
      1: "0.625rem", // 10px
      2: "0.75rem", // 12px
      3: "0.875rem", // 14px
      4: "1rem", // 16px
      5: "1.125rem", // 18px
      6: "1.25rem", // 20px
      7: "1.5rem", // 24px
      8: "2rem", // 32px
      9: "3rem", // 48px
      10: "4rem", // 64px
    },
    fontWeights: {
      1: "300",
      2: "400",
      3: "500",
      4: "600",
      5: "700",
    },
    space: {
      1: "0.125rem", // 2px
      2: "0.25rem", // 4px
      3: "0.5rem", // 8px
      4: "1rem", // 16px
      5: "1.5rem", // 24px
      6: "2rem", // 32px
      7: "3rem", // 48px
      8: "4rem", // 64px
      9: "8rem", // 128px
      10: "16rem", // 256px
    },
  },
});
