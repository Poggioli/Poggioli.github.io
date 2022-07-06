import { FC, useContext, useState } from "react";
import { LottieEventListener } from "lottie-react-web";
import { NavContextType } from "../../@types/nav";
import LottieControl from "../../components/lottie-control";
import { NavContext } from "../../components/navbar/context";
import Text from "../../components/text";
import {
  Body,
  SubTitle,
  Title,
  TitleHighLight,
  WhoIAm,
  AnimationContainer,
  WrapperBody,
} from "./styles";
import birdie from "../../assets/lottie/birdie-home.json";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const { setTitle } = useContext(NavContext) as NavContextType;
  const [direction, setDirection] = useState<1 | -1 | undefined>(1);

  setTitle(".toString()");

  const eventListeners: LottieEventListener[] = [
    {
      eventName: "complete",
      callback: () => {
        // @ts-ignore
        setDirection((directionValue) => directionValue * -1);
      },
    },
  ];

  return (
    <>
      <AnimationContainer>
        <LottieControl
          animationData={birdie}
          direction={direction}
          loop={false}
          eventListeners={eventListeners}
          speed={0.65}
        />
      </AnimationContainer>

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

        <WrapperBody>
          <Text fontSizes={{ "@sm": 6 }} as="h2" className={SubTitle()}>
            João Vitor Pogiolli
          </Text>

          <Text fontSizes={{ "@sm": 6 }} as="p" className={Body()}>
            Passionate about frontend development,
            <br />
            problem solving, UI/UX, family, friends,
            <br />
            girlfriend and birds.
          </Text>
        </WrapperBody>
      </WhoIAm>
    </>
  );
};

export default Home;
