import { Card, Flex, Link, Text } from "@modulz/design-system";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { FC } from "react";

export const CardLoggi: FC = () => {
  return (
    <Card
      css={{
        p: "$3",
        width: "fit-content",
      }}
    >
      <img
        width="100%"
        height="330px"
        src="/loggi-logo.svg"
        alt="Logo da empresa Loggi"
      />
      <Text
        as="h2"
        size={{ "@initial": 5, "@bp1": 6 }}
        css={{ mt: "$3", fontWeight: 500 }}
      >
        Engenheiro de Software Pleno
      </Text>

      <Text as="h2" size={{ "@initial": 5, "@bp1": 6 }} css={{ mt: "$3" }}>
        Loggi
      </Text>

      <Text
        as="h3"
        size={{ "@initial": 2, "@bp1": 3 }}
        css={{ mt: "$1", fontWeight: "300" }}
      >
        03/2022 - 08/2022
      </Text>

      <Text
        as="p"
        css={{
          textAlign: "justify",
          mt: "$3",
          color: "$slate11",
          lineHeight: "23px",
        }}
      >
        Como Engenheiro de Software Pleno na Loggi, atuo para a melhoria da
        experiência dos operadores dos Crossdocking's criando novos processos,
        facilitando os processos atuais, diminuindo a latência das API's e
        aumentando a capacidade de processamento de cargas.
      </Text>

      <Text
        as="p"
        size="3"
        css={{ mt: "$5", lineHeight: "20px", ml: "auto", width: "fit-content" }}
      >
        <Link
          href="/#/experiences/loggi"
          variant="blue"
          css={{ display: "inline-flex", alignItems: "center" }}
        >
          Mais detalhes
          <Flex as="span">
            <ArrowRightIcon />
          </Flex>
        </Link>
      </Text>
    </Card>
  );
};
