import { FC } from "react";
import { AboutDescription } from "../../components/AboutDescription";
import { AboutHero } from "../../components/AboutHero";
import { PageType, Pagination } from "../../components/common/Pagination";

export const About: FC = () => {
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
