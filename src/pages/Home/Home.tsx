import { FC } from "react";
import { MainHero } from "../../components/MainHero";
import { useTitleAndMeta } from "../../hooks/useTitleAndMeta";

export const Home: FC = () => {
  useTitleAndMeta({ title: "Início" });

  return <MainHero />;
};
