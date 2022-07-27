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

export const CIandTBradesco: FC = () => {
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
          Banco Bradesco
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
          01/2020 - 12/2022
        </Text>
      </Flex>
      <Paragraph size="2" as="p">
        No projeto do <strong>Banco Bradesco</strong> atuei no time responsável
        pelo redesenho da ferramenta principal das pessoas gerentes de
        relacionamento, esta ferramenta é o
        <strong>&nbsp;Planejamento Financeiro (PFIN)</strong>, também atuei
        pontualmente no time que estava desenvolvendo a ferramenta interna
        da&nbsp;
        <Link
          variant="blue"
          href="https://www.agorainvestimentos.com.br/"
          target="_blank"
        >
          Ágora Investimentos
        </Link>
        &nbsp;e auxíliava na parte de desenvolvimento e cocriação dos
        componentes do Design System.
        <br />
        <br />O <strong>PFIN</strong> tem como objetivo ser a ferramenta de uso
        principal dos/das gerentes de relacionamento do
        <strong>&nbsp;Banco Bradesco</strong>, nessa ferramenta o/a gerente
        encontra as principais informações de seus clientes, o último
        Planejamento Financeiro preenchido, suas tarefas gerenciais e pessoais e
        os produtos ofertados pelo<strong>&nbsp;Banco Bradesco</strong>. Com
        isso o/a gerente poderia oferecer um atendimento exclusivo para tal
        cliente, gerando uma maior retenção de clientes e também maior consumo
        de produtos do <strong>Banco Bradesco</strong>.
        <br />
        <br />
        Minha principal atuação no projeto do <strong>PFIN</strong> era a
        implementação de novas funcionalidades no front-end, definição de
        padrões de componentes, correções de bugs, implementação de testes,
        novas API's, auxílio a outras pessoas desenvolvedoras, implementação de
        microsserviços e microFrontends, validações de POC's e auxílio ao líder
        técnico em questões de Frontend e framework Angular.
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
          href="https://nodejs.org/"
          target="_blank"
        >
          Node.js
        </Badge>

        <Badge
          size="2"
          variant="blue"
          interactive
          as="a"
          href="https://expressjs.com/"
          target="_blank"
        >
          Express
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
          href="https://aws.amazon.com/microservices/"
          target="_blank"
        >
          Microsserviços
        </Badge>

        <Badge
          size="2"
          variant="blue"
          interactive
          as="a"
          href="https://micro-frontends.org/"
          target="_blank"
        >
          Micro Frontend
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
          Java8
        </Badge>

        <Badge
          size="2"
          variant="blue"
          interactive
          as="a"
          href="https://spring.io/projects/spring-integration"
          target="_blank"
        >
          Spring Integration
        </Badge>
      </Flex>
    </Box>
  );
};
