import { Box, Paragraph, Text } from "@modulz/design-system";
import { FC } from "react";
import ExternalLink from "../../common/ExternalLink";
import { Space } from "../../common/Space";

export const University: FC = () => {
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
        Faculdade e vida profissional
      </Text>

      <Box css={{ maxWidth: 685, mb: "$5" }}>
        <Paragraph size="2" as="p" css={{ textAlign: "justify" }}>
          Em 2014 ainda fazendo o curso técnico de informática, dei início na
          minha jornada na <strong>UNICAMP</strong>, onde mais uma vez tive
          contato com pessoas incríveis e professores fantásticos. A faculdade
          para mim foi uma outra realidade, estudei com pessoas da minha idade e
          também com pessoas mais velhas, tinha amigos com 18 anos e também
          amigos com 25 anos, vivi bons momentos, aprendi muito, quebrei muito a
          cara também.
          <br />
          <br />
          Desde que entrei na faculdade buscava um estágio, pois o meu campus
          não era em Barão Geraldo, Campinas, era em <Space />
          <ExternalLink
            css={{
              color: "$blueA10",
            }}
            variant="subtle"
            href="https://pt.m.wikipedia.org/wiki/Limeira"
          >
            Limeira - SP
          </ExternalLink>
          , uma cidade a alguns Km de Campinas, então eu precisava pagar o
          transporte para a <Space />
          <ExternalLink
            css={{
              color: "$blueA10",
            }}
            variant="subtle"
            href="https://www.ft.unicamp.br"
          >
            Faculdade de Tecnologia (FT) da UNICAMP
          </ExternalLink>
          , minha família foi muito importante para mim nesse momento, pois era
          muito cansativo fazer faculdade no período noturno e em outra cidade.
          <br />
          <br />
          Em 2017 consegui um estágio na<Space />
          <ExternalLink
            css={{
              color: "$blueA10",
            }}
            variant="subtle"
            href="https://www.ciandt.com"
          >
            CI&T
          </ExternalLink>
          <Space /> onde foi o começo da minha jornada profissional, apesar de não
          seguir a área acadêmica dentro da <strong>UNICAMP</strong>, percebi lá
          dentro mesmo que eu gostaria de alguma forma retornar para a sociedade
          todo o privilégio que tive de estudar em uma escola técnica de
          qualidade no ensino médio, de poder realizar dois ensinos técnicos e
          de conseguir estudar e me formar em uma das melhores universidades da
          América Latina. Por esse motivo sempre quis me envolver em projetos ou
          empresas que eu visse algum viés social dentro da estrutura dela.
          <br />
          <br />
          Dentro da <strong>UNICAMP</strong> organizei palestras sobre inovação
          junto dos meus amigos de turma, realizei o <Space />
          <ExternalLink
            css={{
              color: "$blueA10",
            }}
            variant="subtle"
            href="https://day.scratch.mit.edu"
          >
            Scratch Day
          </ExternalLink>
          <Space /> em 2018 e muitas outras ações.
        </Paragraph>
      </Box>
    </>
  );
};
