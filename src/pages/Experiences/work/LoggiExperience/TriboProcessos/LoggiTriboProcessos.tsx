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

export const LoggiTriboProcessos: FC = () => {
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
          Dev Processos
        </Heading>
        <Text
          as="span"
          css={{
            fontSize: "$3",
            mb: "$1",
            color: "$slate11",
          }}
        >
          Engenheiro de Software Pleno
        </Text>
        <Text
          as="span"
          css={{
            fontSize: "$3",
            color: "$slate11",
            wordBreak: "keep-all",
          }}
        >
          03/2022 - momento
        </Text>
      </Flex>
      <Paragraph size="2" as="p" css={{ textAlign: "justify" }}>
        No time de processos temos o objetivo de melhorar a parte operacional e
        de processos da Loggi como um todo, sou responsável por três processos
        do aplicativo interno que funciona dentro dos Crossdocking's e agências,
        implemento novas funcionalidades, testes e experimentos dentro dos
        escopos de Distribuir, Identificar e Receber pacotes.
        <br />
        <br />
        Implemento testes unitários, realizo deploys constantes usando&nbsp;
        <Link href="https://circleci.com/" variant="contrast" target="_blank">
          CircleCI
        </Link>
        , e monitorando os possíveis problemas no&nbsp;
        <Link href="https://sentry.io/" variant="contrast" target="_blank">
          Sentry.io
        </Link>
        . Converso com frequência com o time de Dados e o time de Design para
        poder metrificar a qualidade da solução implementada e demonstrar o
        impacto real que tal solução teve na operação. Analiso e presto suporte
        para que os Crossdocking's tenham os melhores layouts possíveis para que
        o operador possa realizar seu trabalho com a menor quantidade de passos
        possíveis. Possibilitamos que agências possam fazer o processamento de
        pacotes para Crossdocking's, assim há a possibilidade dos Crossdockings
        aumentarem a sua capacidade de processamento.
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
          href="https://reactjs.org/"
          target="_blank"
        >
          ReactJs
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
          href="https://testing-library.com/"
          target="_blank"
        >
          Testing Library
        </Badge>

        <Badge
          size="2"
          variant="blue"
          interactive
          as="a"
          href="https://circleci.com/"
          target="_blank"
        >
          CircleCI
        </Badge>

        <Badge
          size="2"
          variant="blue"
          interactive
          as="a"
          href="https://sentry.io/"
          target="_blank"
        >
          Sentry.io
        </Badge>

        <Badge
          size="2"
          variant="blue"
          interactive
          as="a"
          href="https://grafana.com/"
          target="_blank"
        >
          Grafana
        </Badge>

        <Badge
          size="2"
          variant="blue"
          interactive
          as="a"
          href="https://looker.com/"
          target="_blank"
        >
          Looker
        </Badge>

        <Badge
          size="2"
          variant="blue"
          interactive
          as="a"
          href="https://www.python.org/"
          target="_blank"
        >
          Python3
        </Badge>

        <Badge
          size="2"
          variant="blue"
          interactive
          as="a"
          href="https://www.djangoproject.com/"
          target="_blank"
        >
          Django
        </Badge>

        <Badge
          size="2"
          variant="blue"
          interactive
          as="a"
          href="https://www.django-rest-framework.org/"
          target="_blank"
        >
          Django Rest Framework
        </Badge>

        <Badge
          size="2"
          variant="blue"
          interactive
          as="a"
          href="https://www.postgresql.org/"
          target="_blank"
        >
          PostgreSQL
        </Badge>
      </Flex>
    </Box>
  );
};
