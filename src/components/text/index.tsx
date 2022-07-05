import { styled } from "../../themes/stitches.config";

const Text = styled("span", {
  color: "$mauve12",

  variants: {
    fontSizes: {
      1: { fontSize: "$1" },
      2: { fontSize: "$2" },
      3: { fontSize: "$3" },
      4: { fontSize: "$4" },
      5: { fontSize: "$5" },
      6: { fontSize: "$6" },
      7: { fontSize: "$7" },
      8: { fontSize: "$8" },
      9: { fontSize: "$9" },
      10: { fontSize: "$10" },
    },
    fontWeights: {
      1: { fontWeight: "$1" },
      2: { fontWeight: "$2" },
      3: { fontWeight: "$3" },
      4: { fontWeight: "$4" },
      5: { fontWeight: "$5" },
    },
  },

  defaultVariants: {
    fontSizes: 4,
    fontWeights: 3,
  },
});

export default Text;
