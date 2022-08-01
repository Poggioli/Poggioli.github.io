import { useState } from "react";

const DEFAULT_TITLE: string = "João Pogiolli";
const DEFAULT_DESCRIPTION: string =
  "Site pessoal de João Vitor Pogiolli do Lago, aqui você encontra todas as informações pessoais e profissionais dele";

export const useTitleAndMeta = ({
  title = "",
  description = DEFAULT_DESCRIPTION,
}) => {
  const setTitle = (value: string) => {
    document.title = value ? `${value} - ${DEFAULT_TITLE}` : DEFAULT_TITLE;
  };

  const setDescription = (value: string) => {
    window.document
      .querySelector('meta[name="description"]')!
      .setAttribute("content", value);
  };

  setTitle(title);
  setDescription(description);

  return [setTitle, setDescription];
};
