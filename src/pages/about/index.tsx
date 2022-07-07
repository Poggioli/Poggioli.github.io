import { FC, useContext } from "react";
import { NavContextType } from "../../@types/nav";
import { NavContext } from "../../components/navbar/context";
import {
  Body,
  BodyMoreInfo,
  BodySubtitle,
  HighLight,
  PageTitle,
  Section,
} from "../styles";
import MainSkills from "./about-sections/main-skills";
import ToolsYears from "./about-sections/tools-years";
import {
  ContainerMainActions,
  Contents,
  GitHubIcon,
  LinkedinIcon,
  LinkIcon,
  WrapperIcon,
} from "./style";

interface AboutProps {}

const About: FC<AboutProps> = () => {
  const { setTitle } = useContext(NavContext) as NavContextType;

  const since: number = 2017;
  const yearsExperience = new Date().getFullYear() - since;

  setTitle(".about()");

  return (
    <Section>
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

        <BodySubtitle fontSizes={{ "@sm": 6 }} as="p">
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
        </Contents>
      </Body>
    </Section>
  );
};

export default About;
