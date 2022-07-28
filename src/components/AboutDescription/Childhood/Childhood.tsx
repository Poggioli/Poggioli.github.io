import { Box, Paragraph, Text } from "@modulz/design-system";
import { FC } from "react";
import ExternalLink from "../../common/ExternalLink";

export const Childhood: FC = () => {
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
        Minha infância
      </Text>

      <Box css={{ maxWidth: 685, mb: "$5" }}>
        <Paragraph size="2" as="p" css={{ textAlign: "justify" }}>
          Nasci na cidade de Campinas - SP no dia 08 de maio de 1996. Era uma
          criança muito ativa, brincalhona e curiosa. <br />
          <br />
          Morei (e ainda moro) no mesmo condomínio desde que nasci, aqui cresci
          cercado de outras crianças/amigos, me divertia demais jogando bola,
          esconde-esconde e outras brincadeiras de criança. Aos finais de semana
          visitava meus primos que moravam próximo a mim para jogarmos vídeo
          game.
          <br />
          <br />
          Estudei meu ensino fundamental inteiro na mesma escola, o&nbsp;
          <ExternalLink
            css={{
              color: "$blueA10",
            }}
            variant="subtle"
            href="https://www.sesisp.org.br"
          >
            SESI
          </ExternalLink>
          , onde fiz muitos amigos que tenho e mantenho contato até hoje.
        </Paragraph>
      </Box>
    </>
  );
};
