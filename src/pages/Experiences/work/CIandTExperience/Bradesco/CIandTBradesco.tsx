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

export const CIandTBradesco: FC = () => {
  const techs: { label: string; href: string }[] = [
    { label: "Angular", href: "https://angular.io/" },
    { label: "Node.js", href: "https://nodejs.org/" },
    { label: "Express", href: "https://expressjs.com/" },
    { label: "JEST", href: "https://jestjs.io/" },
    { label: "Testing Library", href: "https://testing-library.com/" },
    { label: "Microsserviços", href: "https://aws.amazon.com/microservices/" },
    { label: "Micro Frontend", href: "https://micro-frontends.org/" },
    { label: "TypeScript", href: "https://www.typescriptlang.org/" },
    { label: "Java8", href: "https://www.java.com/" },
    {
      label: "Spring Integration",
      href: "https://spring.io/projects/spring-integration",
    },
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
      <Paragraph size="2" as="p" css={{ textAlign: "justify" }}>
        No projeto do <strong>Banco Bradesco</strong> atuei no time responsável
        pelo redesenho da ferramenta principal das pessoas gerentes de
        relacionamento, esta ferramenta é o
        <strong>
          <Space />
          Planejamento Financeiro (PFIN)
        </strong>
        , também atuei pontualmente no time que estava desenvolvendo a
        ferramenta interna da
        <Space />
        <ExternalLink
          variant="blue"
          href="https://www.agorainvestimentos.com.br/"
        >
          Ágora Investimentos
        </ExternalLink>
        <Space />e auxíliava na parte de desenvolvimento e cocriação dos
        componentes do Design System.
        <br />
        <br />O <strong>PFIN</strong> tem como objetivo ser a ferramenta de uso
        principal dos/das gerentes de relacionamento do
        <strong>
          <Space />
          Banco Bradesco
        </strong>
        , nessa ferramenta o/a gerente encontra as principais informações de
        seus clientes, o último Planejamento Financeiro preenchido, suas tarefas
        gerenciais e pessoais e os produtos ofertados pelo
        <strong>
          <Space />
          Banco Bradesco
        </strong>
        . Com isso o/a gerente poderia oferecer um atendimento exclusivo para
        tal cliente, gerando uma maior retenção de clientes e também maior
        consumo de produtos do <strong>Banco Bradesco</strong>.
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
