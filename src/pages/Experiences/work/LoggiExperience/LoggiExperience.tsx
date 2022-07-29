import {
  Box,
  Container,
  Heading,
  Link,
  Paragraph,
  Section,
} from "@modulz/design-system";
import { FC } from "react";
import ExternalLink from "../../../../components/common/ExternalLink";
import { PageType, Pagination } from "../../../../components/common/Pagination";
import { Space } from "../../../../components/common/Space";
import { LoggiTriboProcessos } from "./TriboProcessos/LoggiTriboProcessos";

export const LoggiExperience: FC = () => {
  const previousPage: PageType = {
    href: "/#/experiences",
    title: "Experiências",
  };

  const nextPage: PageType = {
    href: "/#/experiences/ciandt",
    title: "CI&T",
  };

  return (
    <>
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
          <Box
            css={{
              width: "100%",
              maxWidth: "450px",
              mb: "$9",
              mx: "auto",

              "@bp2": {
                display: "inline-block",
                mr: "$9",
                float: "left",
              },
            }}
          >
            <img
              width="100%"
              src="/loggi-logo.svg"
              alt="Logo da empresa Loggi"
            />
          </Box>

          <Box>
            <Heading as="h1" css={{ fontSize: "$7", mb: "$3" }}>
              Minha trajetória na<Space />
              <ExternalLink variant="blue" href="https://loggi.com/">
                Loggi
              </ExternalLink>
            </Heading>
            <Paragraph size="2" as="p" css={{ textAlign: "justify" }}>
              Como Engenheiro de Software na Loggi atuo na tribo de bases, onde
              nosso escopo é a melhoria de processos dentro dos<Space />
              <ExternalLink
                href="https://wikipedia.org/wiki/Crossdocking"
                variant="contrast"
              >
                Crossdocking's
              </ExternalLink>
              <Space />e agências da Loggi.
            </Paragraph>
            <LoggiTriboProcessos />
          </Box>
        </Container>
      </Section>
      <Pagination previous={previousPage} next={nextPage} />
    </>
  );
};
