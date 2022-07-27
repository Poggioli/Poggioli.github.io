import { Box, Grid, Text } from "@modulz/design-system";
import { FC } from "react";

export const Languages: FC = () => {
  return (
    <>
      <Text
        as="h2"
        size={{ "@initial": 7, "@bp1": 8 }}
        css={{
          display: "inline-flex",
          alignItems: "baseline",
          color: "transparent",
          WebkitBackgroundClip: "text",
          backgroundImage:
            "radial-gradient(circle, $hiContrast, $colors$blueA12)",
          pb: "$5",
          fontWeight: 500,
          letterSpacing: "max(min(-0.055em, -0.66vw), -0.07em)",
          "@media (min-width: 900px) and (min-height: 850px)": {
            fontSize: "$8",
            lineHeight: "0.85",
          },
        }}
      >
        Idiomas
      </Text>

      <Grid
        css={{
          rowGap: "$4",
          columnGap: "$3",
          gridTemplateColumns: "repeat(1, 1fr)",
          "@bp1": { gridTemplateColumns: "repeat(2, 1fr)", rowGap: "$7" },
          "@bp2": { gridTemplateColumns: "repeat(3, 1fr)", rowGap: "$5" },
          "@bp3": { gridTemplateColumns: "repeat(4, 1fr)", rowGap: "$3" },
          "& ul": { listStyle: "none", margin: "0", padding: "0" },
        }}
      >
        <Box>
          <Text as="h3" size={{ "@initial": 5, "@bp1": 6 }} css={{ mt: "$3" }}>
            Fluente
          </Text>
          <Text
            as="p"
            size={4}
            css={{
              mt: "$4",
              color: "$slate11",
              lineHeight: "23px",
            }}
          >
            pt-BR Português
          </Text>
        </Box>
        <Box>
          <Text as="h3" size={{ "@initial": 5, "@bp1": 6 }} css={{ mt: "$3" }}>
            Intermediário
          </Text>
          <Text
            as="p"
            size={4}
            css={{
              mt: "$4",
              color: "$slate11",
              lineHeight: "23px",
            }}
          >
            en-US Inglês
          </Text>
        </Box>
      </Grid>
    </>
  );
};
