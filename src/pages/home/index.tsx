import { FC, useContext } from "react";
import { NavContextType } from "../../@types/nav";
import { NavContext } from "../../components/navbar/context";
import Text from "../../components/text";
import {
  Body,
  Container,
  SubTitle,
  Title,
  TitleHighLight,
  WhoIAm,
} from "./styles";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const { setTitle } = useContext(NavContext) as NavContextType;

  setTitle(".toString()");

  return (
    <Container>
      <WhoIAm>
        <Text
          as="h1"
          fontSizes={{ "@initial": 8, "@sm": 9, "@lg": 10 }}
          className={Title()}
        >
          joao
          <Text
            fontSizes={{ "@initial": 8, "@sm": 9, "@lg": 10 }}
            className={TitleHighLight()}
          >
            .toString()
          </Text>
        </Text>

        <Text fontSizes={{ "@sm": 6 }} as="h2" className={SubTitle()}>
          João Vitor Pogiolli
        </Text>

        <Text fontSizes={{ "@sm": 6 }} as="p" className={Body()}>
          Passionate about frontend development,
          <br />
          problem solving, UI/UX, family and birds.
        </Text>
      </WhoIAm>
    </Container>
  );
};

export default Home;
