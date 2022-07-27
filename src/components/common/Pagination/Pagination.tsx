import { Box, Container, Flex, Text } from "@modulz/design-system";
import { FC } from "react";

export type PageType = {
  href: string;
  title: string;
};

export type PaginationType = {
  previous?: PageType;
  next?: PageType;
};

export const Pagination: FC<PaginationType> = ({ previous, next }) => {
  return (
    <Container
      size="3"
      css={{
        width: "100%",
      }}
    >
      <Flex justify="between" aria-label="Navegação de páginação">
        {previous && (
          <Box>
            <Box
              href={previous.href}
              as="a"
              aria-label={`Página anterior: ${previous.title}`}
              css={{
                color: "$blue11",
                textDecoration: "none",
                alignItems: "center",
              }}
            >
              <Box css={{ mb: "$2" }}>
                <Text size="3" css={{ color: "$slate11" }}>
                  Anterior
                </Text>
              </Box>
              <Text size="5" css={{ color: "inherit" }}>
                {previous.title}
              </Text>
            </Box>
          </Box>
        )}
        {next && (
          <Box css={{ ml: "auto" }}>
            <Box
              as="a"
              href={next.href}
              aria-label={`Próxima página: ${next.title}`}
              css={{
                color: "$blue11",
                textDecoration: "none",
                textAlign: "right",
              }}
            >
              <Box css={{ mb: "$2" }}>
                <Text size="3" css={{ color: "$slate11" }}>
                  Próxima
                </Text>
              </Box>
              <Text size="5" css={{ color: "inherit" }}>
                {next.title}
              </Text>
            </Box>
          </Box>
        )}
      </Flex>
    </Container>
  );
};
