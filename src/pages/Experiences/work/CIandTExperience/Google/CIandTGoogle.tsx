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

export const CIandTGoogle: FC = () => {
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
      <Paragraph size="2" as="p">
        No projeto da Google atuei em um time que tomava conta de duas
        ferramentas internas, <strong>Wolven</strong> e&nbsp;
        <strong>Sumo</strong>.
        <br />
        <br />O <strong>Wolven</strong> é uma ferramenta como o&nbsp;
        <Link
          variant="blue"
          href="https://about.google/intl/forms/"
          target="_blank"
        >
          Google Forms
        </Link>
        , tendo a principal diferença perguntas dinâmicas, validações
        customizadas e conexão com o&nbsp;
        <Link
          variant="blue"
          href="https://cloud.google.com/?hl=pt-br"
          target="_blank"
        >
          Google Cloud
        </Link>
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
          href="https://angularjs.org/"
          target="_blank"
        >
          AngularJs
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
          href="https://cloud.google.com/"
          target="_blank"
        >
          GCP
        </Badge>

        <Badge
          size="2"
          variant="blue"
          interactive
          as="a"
          href="https://material.angular.io/"
          target="_blank"
        >
          Angular Material
        </Badge>
      </Flex>
    </Box>
  );
};
