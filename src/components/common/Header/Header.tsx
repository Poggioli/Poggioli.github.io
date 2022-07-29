import { Box, Container, Flex, Link, Text } from "@modulz/design-system";
import { FC } from "react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { AccessibleIconContainer } from "../AccessibleIconContainer";
import ExternalLink from "../ExternalLink";

export const Header: FC = () => {
  return (
    <Box
      as="header"
      css={{
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        backdropFilter: "blur(5px)",
        zIndex: "$1",
        borderBottomColor: "$blueA3",
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
      }}
    >
      <Container size={4}>
        <Flex align="center" justify="between" css={{ height: "$8" }}>
          <Link href="/" title="Início" variant="subtle">
            Home
          </Link>

          <Flex
            align="center"
            gap={{ "@initial": 4, "@bp2": 5 }}
            css={{ mb: -2 }}
          >
            <Link href="/#/about" title="Sobre João Pogiolli">
              <Text>Sobre</Text>
            </Link>

            <Link href="/#/experiences" title="Experiências de João Pogiolli">
              <Text>Experiências</Text>
            </Link>

            <ExternalLink
              href="https://www.linkedin.com/in/joaopogiolli/"
              title="Link para o Linkedin de João Pogiolli"
            >
              <AccessibleIconContainer label="Link para o Linkedin de João Pogiolli">
                <LinkedInLogoIcon width={24} height={24} />
              </AccessibleIconContainer>
            </ExternalLink>
            <ExternalLink
              href="https://github.com/Poggioli/"
              title="Link para o Github de João Pogiolli"
            >
              <AccessibleIconContainer label="Link para o Github de João Pogiolli">
                <GitHubLogoIcon width={24} height={24} />
              </AccessibleIconContainer>
            </ExternalLink>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
