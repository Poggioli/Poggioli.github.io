import { Box, Link, Paragraph, Text } from "@modulz/design-system";
import { FC } from "react";

export const Youth: FC = () => {
  return (
    <>
      <Text
        as="h2"
        size={{ "@initial": 7, "@bp1": 8 }}
        css={{
          color: "transparent",
          WebkitBackgroundClip: "text",
          backgroundImage:
            "radial-gradient(circle, $hiContrast, $colors$blueA12)",
          pb: "$4",
          px: "$2",
          mx: "-$2",
          fontWeight: 500,
          letterSpacing: "max(min(-0.055em, -0.66vw), -0.07em)",
          "@media (min-width: 900px) and (min-height: 850px)": {
            fontSize: "$8",
            lineHeight: "0.85",
          },
        }}
      >
        Juventude
      </Text>

      <Box css={{ maxWidth: 685, mb: "$5" }}>
        <Paragraph size="2" as="p" css={{ textAlign: "justify" }}>
          Próximo ao término do ensino fundamental, fiz a prova de três colégios
          técnicos públicos, &nbsp;
          <Link
            css={{
              color: "$blueA10",
            }}
            variant="subtle"
            href="https://www.etecap.com.br"
            target="_blank"
          >
            ETECAP
          </Link>
          , &nbsp;
          <Link
            css={{
              color: "$blueA10",
            }}
            variant="subtle"
            href="https://www.cotuca.unicamp.br"
            target="_blank"
          >
            COTUCA
          </Link>
          &nbsp; e &nbsp;
          <Link
            css={{
              color: "$blueA10",
            }}
            variant="subtle"
            href="https://www.cotil.unicamp.br"
            target="_blank"
          >
            COTIL
          </Link>
          , consegui passar em dois deles e decidi em <strong>2011</strong>
          &nbsp; fazer meu ensino médio na <strong>ETECAP</strong>
          &nbsp;, junto do ensino médio fiz também um curso de aprendizagem
          industrial na &nbsp;
          <Link
            css={{
              color: "$blueA10",
            }}
            variant="subtle"
            href="https://www.campinas.sp.senai.br"
            target="_blank"
          >
            Escola SENAI Roberto Mange
          </Link>
          &nbsp;foi a partir do meu ensino médio na ETECAP e no SENAI que eu
          comecei a ter contato com o ensino gratuíto de qualidade.
          <br />
          <br />
          No meu ensino médio pude ter contato com muitas pessoas e todas
          diferentes, foi quando minha visão de mundo começou a ser construída.
          Fiz muitos amigos no ensino médio também, os quais ainda mantenho
          contato com grande parte.
          <br />
          <br />
          Quando terminei o meu curso de aprendizagem industrial, eu já tinha
          certo anseio pela área da tecnologia, então dei início a um curso
          técnico em informática em 2013 na &nbsp;
          <Link
            css={{
              color: "$blueA10",
            }}
            variant="subtle"
            href="https://www.campinaszerbini.sp.senai.br"
            target="_blank"
          >
            Escola SENAI Prof. Dr. Euryclides de Jesus Zerbini
          </Link>
          &nbsp;. Um fato curioso é que eu não gostava de ficar com as tardes
          vagas, por isso sempre me ocupei com os cursos técnicos.
          <br />
          <br />
          Ao final do ensino médio fiz as provas do ENEM e da{" "}
          <strong>UNICAMP</strong>. No início de 2014 vi o resultado do
          vestibular da &nbsp;
          <Link
            css={{
              color: "$blueA10",
            }}
            variant="subtle"
            href="https://www.unicamp.br"
            target="_blank"
          >
            <strong>UNICAMP</strong>
          </Link>
          &nbsp; e descobri ali que eu iria estudar em uma das melhores
          faculdades da América Latina.
        </Paragraph>
      </Box>
    </>
  );
};
