import { FC } from "react";
import { AboutDescription } from "../../components/AboutDescription";
import { AboutHero } from "../../components/AboutHero";
import { PageType, Pagination } from "../../components/common/Pagination";
import { useTitleAndMeta } from "../../hooks/useTitleAndMeta";

export const About: FC = () => {
  useTitleAndMeta({ title: "Sobre" });

  const nextPage: PageType = {
    href: "/#/experiences",
    title: "Experiências",
  };

  const previousPage: PageType = {
    href: "/",
    title: "Início",
  };

  return (
    <>
      <AboutHero />
      <AboutDescription />
      <Pagination next={nextPage} previous={previousPage} />
    </>
  );
};
