import {
  Box,
  Container,
  Flex,
  keyframes,
  Section,
  Text,
} from "@modulz/design-system";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { FC } from "react";

const moveUpAndDownMobile = keyframes({
  "0%": {
    bottom: "calc($9 + $7)",
  },

  "50%": {
    bottom: "calc($9 + $5)",
  },

  "100%": {
    bottom: "calc($9 + $7)",
  },
});

const moveUpAndDownDesktop = keyframes({
  "0%": {
    bottom: "calc($7 + $2)",
  },

  "50%": {
    bottom: "calc($7)",
  },

  "100%": {
    bottom: "calc($7 + $2)",
  },
});

export const AboutHero: FC = () => {
  return (
    <Section
      css={{
        minHeight: "calc(100vh - $8)",
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
              Um pouco mais
              <br />
              sobre mim
            </Text>
          </Box>
        </Flex>

        <Box
          css={{
            position: "absolute",
            right: "calc(50% - 18px)",
            animation: `${moveUpAndDownMobile} 1500ms linear infinite`,

            "@bp1": {
              right: "calc(50% - 18px)",
              animation: `${moveUpAndDownDesktop} 1500ms linear infinite`,
            },
          }}
        >
          <CaretDownIcon width={36} height={36} />
        </Box>
      </Container>
    </Section>
  );
};
