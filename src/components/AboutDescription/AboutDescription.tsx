import { Section, Container, Box } from "@modulz/design-system";
import { FC } from "react";
import { Childhood } from "./Childhood/Childhood";
import { University } from "./University/University";
import { Youth } from "./Youth/Youth";

export const AboutDescription: FC = () => {
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
        <Childhood />
        <Box
          css={{
            m: "$9 0 0 auto",
            width: "fit-content",
          }}
        >
          <Youth />
        </Box>

        <Box
          css={{
            mt: "$9",
            width: "fit-content",
          }}
        >
          <University />
        </Box>
      </Container>
    </Section>
  );
};
