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

export const CIandTGoogle: FC = () => {
  const techs: { label: string; href: string }[] = [
    { label: "Angular", href: "https://angular.io/" },
    { label: "Angularjs", href: "https://angularjs.org/" },
    { label: "JEST", href: "https://jestjs.io/" },
    { label: "Testing Library", href: "https://testing-library.com/" },
    { label: "Python3", href: "https://www.python.org/" },
    { label: "GCP", href: "https://cloud.google.com/" },
    { label: "Angular Material", href: "https://material.angular.io/" },
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
          Google
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
          01/2022 - 03/2022
        </Text>
      </Flex>
      <Paragraph size="2" as="p" css={{ textAlign: "justify" }}>
        No projeto da Google atuei em um time que tomava conta de duas
        ferramentas internas, <strong>Wolven</strong> e&nbsp;
        <strong>Sumo</strong>.
        <br />
        <br />O <strong>Wolven</strong> é uma ferramenta como o&nbsp;
        <ExternalLink variant="blue" href="https://about.google/intl/forms/">
          Google Forms
        </ExternalLink>
        , tendo a principal diferença perguntas dinâmicas, validações
        customizadas e conexão com o&nbsp;
        <ExternalLink variant="blue" href="https://cloud.google.com/?hl=pt-br">
          Google Cloud
        </ExternalLink>
        , onde o usuário pode selecionar opções cadastradas para suas perguntas.
        O usuário também pode compartilhar uma seção de seu formulário com
        outras pessoas para que elas possam usá-la.
        <br />
        <br />O <strong>Sumo</strong> é uma ferramenta para controle de gastos,
        onde os gestores de áreas internas da Google poderiam "contratar" outras
        áreas da própria Google e por meio do
        <strong>&nbsp;Sumo&nbsp;</strong>
        realizar a transferência de pagamentos.
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
