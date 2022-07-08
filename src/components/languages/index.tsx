/* eslint-disable react/jsx-props-no-spreading */
import { FC } from "react";
import Language, { LanguageProps } from "./language";
import { Container, Level } from "./style";

export interface LanguagesProps {
  level: string;
  languages: LanguageProps[];
}

const Languages: FC<LanguagesProps> = ({ level, languages }) => {
  return (
    <Container>
      <Level fontSizes={{ "@sm": 5 }}>&frasl;&frasl; {level}</Level>
      {languages.map((language: LanguageProps) => (
        <Language key={language.initials} {...language} />
      ))}
    </Container>
  );
};

export default Languages;
