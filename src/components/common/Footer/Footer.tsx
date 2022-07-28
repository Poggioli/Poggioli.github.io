import { Box, Grid, Flex, Text, Link } from "@modulz/design-system";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { FC } from "react";
import ExternalLink from "../ExternalLink";

export const Footer: FC = () => {
  return (
    <Box as="footer" css={{ py: "$9" }}>
      <Grid
        css={{
          rowGap: "$7",
          columnGap: "$3",
          gridTemplateColumns: "repeat(2, 1fr)",
          "@bp1": { gridTemplateColumns: "repeat(3, 1fr)" },
          "@bp2": { gridTemplateColumns: "repeat(4, 1fr)" },
          "& ul": { listStyle: "none", margin: "0", padding: "0" },
        }}
      >
        <Flex
          align="start"
          direction="column"
          css={{ gridColumn: "1 / -1", "@bp2": { gridColumn: "auto" } }}
        >
          <Text
            as="h2"
            size="2"
            css={{
              fontWeight: "500",
              lineHeight: "20px",
              color: "$gray10",
              pr: "$8",
              mx: "auto",
              my: "auto",
            }}
          >
            <Link variant="subtle" href="/">
              JOÃO POGIOLLI
            </Link>
          </Text>
        </Flex>

        <Box>
          <Text as="h2" size="3" css={{ fontWeight: 500, lineHeight: "20px" }}>
            Seções
          </Text>
          <ul>
            <li>
              <Text as="p" size="3" css={{ mt: "$3", lineHeight: "20px" }}>
                <Link href="/#/about" variant="subtle">
                  Sobre
                </Link>
              </Text>
            </li>
            <li>
              <Text as="p" size="3" css={{ mt: "$3", lineHeight: "20px" }}>
                <Link href="/#/experiences" variant="subtle">
                  Experiências
                </Link>
              </Text>
            </li>
          </ul>
        </Box>

        <Box>
          <Text as="h2" size="3" css={{ fontWeight: 500, lineHeight: "20px" }}>
            Redes sociais
          </Text>
          <ul>
            <li>
              <Text as="p" size="3" css={{ mt: "$3", lineHeight: "20px" }}>
                <ExternalLink
                  href="https://github.com/Poggioli/"
                  variant="subtle"
                  css={{ display: "inline-flex", alignItems: "center" }}
                >
                  Github
                  <Flex as="span" css={{ color: "$slate8" }}>
                    <ArrowTopRightIcon />
                  </Flex>
                </ExternalLink>
              </Text>
            </li>

            <li>
              <Text as="p" size="3" css={{ mt: "$3", lineHeight: "20px" }}>
                <ExternalLink
                  href="https://www.linkedin.com/in/joaopogiolli/"
                  variant="subtle"
                  css={{ display: "inline-flex", alignItems: "center" }}
                >
                  LinkedIn
                  <Flex as="span" css={{ color: "$slate8" }}>
                    <ArrowTopRightIcon />
                  </Flex>
                </ExternalLink>
              </Text>
            </li>
          </ul>
        </Box>
      </Grid>
    </Box>
  );
};
