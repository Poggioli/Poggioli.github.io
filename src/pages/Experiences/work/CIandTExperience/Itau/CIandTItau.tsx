import {
  Box,
  Flex,
  Heading,
  Paragraph,
  Text,
  Link,
  Badge,
} from "@modulz/design-system";
import { FC } from "react";
import ExternalLink from "../../../../../components/common/ExternalLink";

export const CIandTItau: FC = () => {
  return (
    <Box css={{ mt: "$9" }}>
      <Flex
        direction="column"
        align="start"
        css={{
          mb: "$3",
        }}
      >
        <Heading as="h2" css={{ fontSize: "$6", mb: "$1" }}>
          Banco Itaú
        </Heading>
        <Text
          as="span"
          css={{
            fontSize: "$3",
            mb: "$1",
            color: "$slate11",
          }}
        >
          Engenheiro de Software Junior
        </Text>
        <Text
          as="span"
          css={{
            fontSize: "$3",
            color: "$slate11",
            wordBreak: "keep-all",
          }}
        >
          02/2017 - 12/2019
        </Text>
      </Flex>
      <Paragraph size="2" as="p" css={{ textAlign: "justify" }}>
        No projeto do <strong>Banco Itaú</strong> atuei em diversos times, como
        o time da frente de investimentos, polenização digital e também no time
        de Open Banking.
        <br />
        <br />
        No time da <strong>frente de investimentos</strong>, atuava como
        Engenheiro de Software Junior com o principal foco no desenvolvimento da
        nova jornada de investimento dentro do aplicativo do
        <strong>&nbsp;Banco Itaú&nbsp;</strong>tinha como objetivo a
        implementação de uma nova jornada de investimentos para que houvesse um
        maior interesse e captação dos clientes em investir dentro do
        <strong>&nbsp;Banco Itaú</strong>.
        <br />
        <br />
        No time de <strong>polenização digital</strong>, atuavamos dentro de
        times de desenvolvimento do <strong>&nbsp;Banco Itaú</strong>, tendo em
        vista a passagem de conhecimento de processos ágeis.
        <br />
        <br />
        Dentro do time de <strong>Open Banking</strong>, atuava como um dos
        principais desenvolvedores Front-end, tinhamos o objetivo de colocar
        dois portais de&nbsp;
        <ExternalLink
          variant="blue"
          href="https://developer.itau.com.br/baas/#/"
        >
          API's públicas
        </ExternalLink>
        &nbsp; do <strong>Banco Itaú</strong> e do&nbsp;
        <strong>Iti</strong>, seu banco digital .
      </Paragraph>

      <Flex
        justify="start"
        wrap="wrap"
        css={{
          ">*": {
            mr: "$3",
            mt: "$5",
          },
        }}
      >
        <Badge
          size="2"
          variant="blue"
          interactive
          as="a"
          href="https://www.joomla.org/"
          target="_blank"
        >
          Joomla
        </Badge>

        <Badge
          size="2"
          variant="blue"
          interactive
          as="a"
          href="https://angular.io/"
          target="_blank"
        >
          Angular
        </Badge>

        <Badge
          size="2"
          variant="blue"
          interactive
          as="a"
          href="https://jestjs.io/"
          target="_blank"
        >
          JEST
        </Badge>

        <Badge
          size="2"
          variant="blue"
          interactive
          as="a"
          href="https://www.typescriptlang.org/"
          target="_blank"
        >
          TypeScript
        </Badge>

        <Badge
          size="2"
          variant="blue"
          interactive
          as="a"
          href="https://www.java.com/"
          target="_blank"
        >
          Java
        </Badge>
      </Flex>
    </Box>
  );
};
