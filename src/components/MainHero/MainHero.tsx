import {
  Box,
  Container,
  Flex,
  Paragraph,
  Section,
  Text,
} from "@modulz/design-system";
import type { FC } from "react";

export const MainHero: FC = () => {
  return (
    <Section
      css={{
        minHeight: "calc(100vh - $8)",
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
        <Flex>
          <Box css={{ mb: "$6" }}>
            <Text
              as="h1"
              size={{ "@initial": 8, "@bp1": 9 }}
              css={{
                color: "transparent",
                WebkitBackgroundClip: "text",
                backgroundImage:
                  "radial-gradient(circle, $hiContrast, $colors$blueA12)",
                pb: "$4",
                px: "$2",
                mx: "-$2",
                fontWeight: 500,
                fontSize: "min(max($8, 11.2vw), $9)",
                letterSpacing: "max(min(-0.055em, -0.66vw), -0.07em)",
                "@media (min-width: 900px) and (min-height: 850px)": {
                  fontSize: "80px",
                  lineHeight: "0.85",
                },
              }}
            >
              João Pogiolli
              <br />
              Front - End
              <br />
              Developer
            </Text>
            <Box css={{ maxWidth: 500, mb: "$5" }}>
              <Paragraph size="2" as="p">
                Apaixonado por desenvolvimento Front-End, resolução de
                problemas, UI/UX, minha família, namorada, amigos e pássaros.
              </Paragraph>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Section>
  );
};
