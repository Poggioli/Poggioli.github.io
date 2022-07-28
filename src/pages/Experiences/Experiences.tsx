import { FC } from "react";
import { PageType, Pagination } from "../../components/common/Pagination";
import { ExperiencesContainer } from "../../components/ExperiencesContainer";
import { ExperiencesHero } from "../../components/ExperiencesHero";

export const Experiences: FC = () => {
  const previousPage: PageType = {
    href: "/#/about",
    title: "Sobre",
  };

  const nextPage: PageType = {
    href: "/#/experiences/loggi",
    title: "Loggi",
  };

  return (
    <>
      <ExperiencesHero />
      <ExperiencesContainer />
      <Pagination previous={previousPage} next={nextPage} />
    </>
  );
};
