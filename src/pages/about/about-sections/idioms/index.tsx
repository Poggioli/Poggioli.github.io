/* eslint-disable react/jsx-props-no-spreading */
import { FC } from "react";
import Languages, { LanguagesProps } from "../../../../components/languages";
import { AboutTitle, Container, InfoContainer } from "../style";

interface IdiomsProps {}

const Idioms: FC<IdiomsProps> = () => {
  const idioms: LanguagesProps[] = [
    {
      level: "fluent",
      languages: [
        {
          initials: "pt-BR",
          name: "Portuguese",
        },
      ],
    },
    {
      level: "advanced",
      languages: [
        {
          initials: "en-US",
          name: "English",
        },
      ],
    },
  ];

  return (
    <Container>
      <AboutTitle
        as="h2"
        fontSizes={{ "@initial": 6, "@sm": 7 }}
        fontWeights={4}
      >
        Languages
      </AboutTitle>
      <InfoContainer>
        {idioms.map((idiom: LanguagesProps) => (
          <Languages key={idiom.level} {...idiom} />
        ))}
      </InfoContainer>
    </Container>
  );
};

export default Idioms;
