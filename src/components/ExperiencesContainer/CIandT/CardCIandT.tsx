import { Card, Flex, Link, Text } from "@modulz/design-system";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { FC } from "react";

export const CardCIandT: FC = () => {
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
        src="/ciandt-logo.svg"
        alt="Logo da empresa CI&T"
      />
      <Text
        as="h2"
        size={{ "@initial": 5, "@bp1": 6 }}
        css={{ mt: "$3", fontWeight: 500 }}
      >
        Engenheiro de Software Pleno
      </Text>

      <Text as="h2" size={{ "@initial": 5, "@bp1": 6 }} css={{ mt: "$3" }}>
        CI&T
      </Text>

      <Text
        as="h3"
        size={{ "@initial": 2, "@bp1": 3 }}
        css={{ mt: "$1", fontWeight: "300" }}
      >
        02/2017 - 03/2022
      </Text>

      <Text
        as="p"
        css={{
          mt: "$3",
          color: "$slate11",
          lineHeight: "23px",
        }}
      >
        Como Engenheiro de Software Pleno na CI&T atuei em diversos contratos
        para clientes do setor bancário e provedor de serviços cloud, sempre com
        o foco em desenvolvimento front-end para a melhorar a experiência do
        usuário final.
      </Text>

      <Text
        as="p"
        size="3"
        css={{ mt: "$5", lineHeight: "20px", ml: "auto", width: "fit-content" }}
      >
        <Link
          href="/#/experiences/ciandt"
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
