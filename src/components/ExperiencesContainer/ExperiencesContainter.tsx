import { Section, Container, Box, Grid } from "@modulz/design-system";
import { FC } from "react";
import { CardCIandT } from "./CIandT/CardCIandT";
import { CardLoggi } from "./Loggi/CardLoggi";
import { Skills } from "./SkillsAndLanguages/Skills";
import { Languages } from "./SkillsAndLanguages/Languages";

export const ExperiencesContainer: FC = () => {
  return (
    <Section
      css={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "$4",
        "@media (min-width: 900px) and (min-height: 850px)": {
          paddingTop: "min($9, calc($5 + 0.35 * (100vh - 850px)))",
        },
      }}
    >
      <Container
        size="3"
        css={{
          width: "100%",
        }}
      >
        <Grid
          css={{
            rowGap: "$7",
            columnGap: "$3",
            gridTemplateColumns: "repeat(1, 1fr)",
            "@bp1": { gridTemplateColumns: "repeat(2, 1fr)" },
            "@bp2": { gridTemplateColumns: "repeat(3, 1fr)" },
            "& ul": { listStyle: "none", margin: "0", padding: "0" },
          }}
        >
          <CardLoggi />
          <CardCIandT />
        </Grid>
        <Box css={{ mt: "$9" }}>
          <Skills />
          <Box css={{ mt: "$9" }}>
            <Languages />
          </Box>
        </Box>
      </Container>
    </Section>
  );
};
