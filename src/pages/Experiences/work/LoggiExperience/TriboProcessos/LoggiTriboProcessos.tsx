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
import { Space } from "../../../../../components/common/Space";

export const LoggiTriboProcessos: FC = () => {
  const techs: { label: string; href: string }[] = [
    { label: "ReactJs", href: "https://reactjs.org/" },
    { label: "JEST", href: "https://jestjs.io/" },
    { label: "Testing Library", href: "https://testing-library.com/" },
    { label: "CircleCI", href: "https://circleci.com/" },
    { label: "Sentry.io", href: "https://sentry.io/" },
    { label: "Grafana", href: "https://grafana.com/" },
    { label: "Looker", href: "https://looker.com/" },
    { label: "Python3", href: "https://www.python.org/" },
    { label: "Django", href: "https://www.djangoproject.com/" },
    {
      label: "Django Rest Framework",
      href: "https://www.django-rest-framework.org/",
    },
    { label: "PostgreSQL", href: "https://www.postgresql.org/" },
  ];

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
        Implemento testes unitários, realizo deploys constantes usando
        <Space />
        <ExternalLink href="https://circleci.com/" variant="contrast">
          CircleCI
        </ExternalLink>
        , e monitorando os possíveis problemas no
        <Space />
        <ExternalLink href="https://sentry.io/" variant="contrast">
          Sentry.io
        </ExternalLink>
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
        {techs.map((tech: { label: string; href: string }) => (
          <Badge
            size="2"
            variant="blue"
            interactive
            as="a"
            href={tech.href}
            target="_blank"
          >
            {tech.label}
          </Badge>
        ))}
      </Flex>
    </Box>
  );
};
