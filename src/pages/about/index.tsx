import { FC, useContext, useEffect, useState } from "react";
import { NavContextType } from "../../@types/nav";
import LottieControl from "../../components/lottie-control";
import { NavContext } from "../../components/navbar/context";
import useScrollPosition from "../../global-hooks/scroll";
import {
  Body,
  BodyMoreInfo,
  BodySubtitle,
  HighLight,
  PageTitle,
  Section,
} from "../styles";
import Experiences from "./about-sections/experiences";
import Idioms from "./about-sections/idioms";
import MainSkills from "./about-sections/main-skills";
import ToolsYears from "./about-sections/tools-years";
import {
  ContainerMainActions,
  Contents,
  GitHubIcon,
  LinkedinIcon,
  LinkIcon,
  WrapperIcon,
  BodySubtitleStyle,
  AnimationContainer,
} from "./style";
import dogWalk from "../../assets/lottie/dog-walk.json";
import useWindow from "../../global-hooks/window";

interface AboutProps {}

const About: FC<AboutProps> = () => {
  const { setTitle } = useContext(NavContext) as NavContextType;
  const [leftPosition, setLeftPosition] = useState(0);
  const [rotation, setRotation] = useState(0);
  const { width } = useWindow();
  const animationSize = 400;
  const scrollPosition = useScrollPosition();

  const since: number = 2017;
  const yearsExperience = new Date().getFullYear() - since;

  const rotateDiv = (previous: number, next: number) => {
    if (previous > next) {
      setRotation(180);
    } else {
      setRotation(0);
    }
  };

  setTitle(".about()");

  useEffect(() => {
    setLeftPosition((previousLeftPosition: number) => {
      const nextLeftPosition =
        scrollPosition * (width - animationSize) +
        animationSize * (scrollPosition - (1 - scrollPosition));
      rotateDiv(previousLeftPosition, nextLeftPosition);

      return nextLeftPosition;
    });
  }, [scrollPosition]);

  return (
    <Section>
      <AnimationContainer
        css={{ left: leftPosition, transform: `rotateY(${rotation}deg)` }}
      >
        <LottieControl animationData={dogWalk} loop speed={0.75} />
      </AnimationContainer>

      <PageTitle
        as="h1"
        fontSizes={{
          "@initial": 8,
          "@sm": 9,
          "@lg": 10,
        }}
      >
        about(
        <HighLight
          fontSizes={{
            "@initial": 8,
            "@sm": 9,
            "@lg": 10,
          }}
        >
          &quot;João&quot;
        </HighLight>
        )
      </PageTitle>

      <Body>
        <ContainerMainActions>
          <WrapperIcon>
            <LinkIcon
              href="https://www.linkedin.com/in/joaopogiolli/"
              target="_blank"
            >
              <LinkedinIcon />
            </LinkIcon>
            <LinkIcon href="https://github.com/Poggioli/" target="_blank">
              <GitHubIcon />
            </LinkIcon>
          </WrapperIcon>
          {/* <WrapperResume>
            <Text fontSizes={{ "@sm": 6 }}>
              Download my
              <Text fontSizes={{ "@sm": 6 }} className={DownloadLabel()}>
                &nbsp;resume&nbsp;
                <DownloadIcon />
              </Text>
            </Text>
          </WrapperResume> */}
        </ContainerMainActions>

        <BodySubtitle
          className={BodySubtitleStyle()}
          fontSizes={{ "@sm": 6 }}
          as="p"
        >
          A young man passionate about solving problems using technology. I am
          ingenious and curious frontend developer. From Brazil, based in
          Campinas - SP
        </BodySubtitle>

        <BodyMoreInfo
          as="p"
          css={{ color: "$mauve8" }}
          fontSizes={{ "@sm": 6 }}
        >
          &frasl;&frasl; {yearsExperience}+ years of experience
        </BodyMoreInfo>

        <Contents>
          <MainSkills />
          <ToolsYears />
          <Experiences />
          <Idioms />
        </Contents>
      </Body>
    </Section>
  );
};

export default About;
