import { LottieEventListener } from "lottie-react-web";
import { FC, useContext, useState } from "react";
import { NavContextType } from "../../@types/nav";
import birdie from "../../assets/lottie/birdie-home.json";
import LottieControl from "../../components/lottie-control";
import { NavContext } from "../../components/navbar/context";
import {
  Body,
  BodyMoreInfo,
  BodySubtitle,
  HighLight,
  PageTitle,
  Section,
} from "../styles";
import { AnimationContainer, Box, Flex } from "./styles";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const { setTitle } = useContext(NavContext) as NavContextType;
  const [direction, setDirection] = useState<1 | -1 | undefined>(1);
  const [size] = useState("250px");

  setTitle(".home()");

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
    <Section className={Flex()}>
      <Box>
        <PageTitle
          as="h1"
          fontSizes={{
            "@initial": 8,
            "@sm": 9,
            "@lg": 10,
          }}
        >
          joao
          <HighLight
            fontSizes={{
              "@initial": 8,
              "@sm": 9,
              "@lg": 10,
            }}
          >
            .home()
          </HighLight>
        </PageTitle>

        <Body>
          <BodySubtitle fontSizes={{ "@sm": 6 }} as="h2">
            João Vitor Pogiolli
          </BodySubtitle>

          <BodyMoreInfo fontSizes={{ "@sm": 6 }} as="p">
            Passionate about frontend development,
            <br />
            problem solving, UI/UX, family, friends,
            <br />
            girlfriend and birds.
          </BodyMoreInfo>
        </Body>
      </Box>

      <AnimationContainer>
        <LottieControl
          height={size}
          width={size}
          animationData={birdie}
          direction={direction}
          loop={false}
          eventListeners={eventListeners}
          speed={0.65}
        />
      </AnimationContainer>
    </Section>
  );
};

export default Home;
