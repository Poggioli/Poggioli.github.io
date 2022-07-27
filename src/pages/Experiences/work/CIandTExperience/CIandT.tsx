import {
  Box,
  Container,
  Heading,
  Link,
  Paragraph,
  Section,
} from "@modulz/design-system";
import { FC } from "react";
import { PageType, Pagination } from "../../../../components/common/Pagination";
import { CIandTBradesco } from "./Bradesco/CIandTBradesco";
import { CIandTGoogle } from "./Google/CIandTGoogle";
import { CIandTItau } from "./Itau/CIandTItau";

export const CIandTExperience: FC = () => {
  const previousPage: PageType = {
    href: "/#/experiences",
    title: "Experiências",
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
              Minha trajetória na&nbsp;
              <Link variant="blue" href="https://ciandt.com/" target="_blank">
                CI&T
              </Link>
            </Heading>
            <Paragraph size="2" as="p">
              Durante 5 anos atuei como Engenheiro de Software na CI&T, onde
              pude aprender, evoluir e aperferçoar as minhas habilidades em
              Front-end, mas também fui capaz de transmitir meu conhecimento
              para outras pessoas. Enquanto estive na CI&T atuei em três grandes
              contratos como Engenheiro de Software, sendo eles:&nbsp;
              <Link variant="blue" href="https://about.google/" target="_blank">
                Google
              </Link>
              ,&nbsp;
              <Link
                variant="blue"
                href="https://banco.bradesco/html/classic/sobre/index.shtm"
                target="_blank"
              >
                Banco Bradesco
              </Link>
              &nbsp;e&nbsp;
              <Link
                variant="blue"
                href="https://www.itau.com.br/"
                target="_blank"
              >
                Banco Itaú
              </Link>
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
