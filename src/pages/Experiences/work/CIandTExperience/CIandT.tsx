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
import { CIandTBradesco } from "./Bradesco/CIandTBradesco";
import { CIandTGoogle } from "./Google/CIandTGoogle";
import { CIandTItau } from "./Itau/CIandTItau";

export const CIandTExperience: FC = () => {
  const previousPage: PageType = {
    href: "/#/experiences/loggi",
    title: "Loggi",
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
              src="/ciandt-logo.svg"
              alt="Logo da empresa CI&T"
            />
          </Box>

          <Box>
            <Heading as="h1" css={{ fontSize: "$7", mb: "$3" }}>
              Minha trajetória na
              <Space />
              <ExternalLink variant="blue" href="https://ciandt.com/">
                CI&T
              </ExternalLink>
            </Heading>
            <Paragraph size="2" as="p" css={{ textAlign: "justify" }}>
              Durante 5 anos atuei como Engenheiro de Software na CI&T, onde
              pude aprender, evoluir e aperferçoar as minhas habilidades em
              Front-end, também fui capaz de transmitir meu conhecimento para
              outras pessoas. Enquanto estive na CI&T atuei em três grandes
              contratos como Engenheiro de Software, sendo eles:
              <Space />
              <ExternalLink variant="blue" href="https://about.google/">
                Google
              </ExternalLink>
              ,<Space />
              <ExternalLink
                variant="blue"
                href="https://banco.bradesco/html/classic/sobre/index.shtm"
              >
                Banco Bradesco
              </ExternalLink>
              <Space />e<Space />
              <ExternalLink variant="blue" href="https://www.itau.com.br/">
                Banco Itaú
              </ExternalLink>
              .
            </Paragraph>

            <CIandTGoogle />
            <CIandTBradesco />
            <CIandTItau />
          </Box>
        </Container>
      </Section>
      <Pagination previous={previousPage} />
    </>
  );
};
