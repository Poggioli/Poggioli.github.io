import { FC, useContext } from "react";
import { NavContextType } from "../../@types/nav";
import { NavContext } from "../../components/navbar/context";
import Text from "../../components/text";
import {
  Body,
  Container,
  ContainerMainActions,
  DownloadIcon,
  DownloadLabel,
  GitHubIcon,
  LinkedinIcon,
  LinkIcon,
  Title,
  TitleHighLight,
  WrapperBody,
  WrapperIcon,
  WrapperResume,
} from "./style";

interface AboutProps {}

const About: FC<AboutProps> = () => {
  const { setTitle } = useContext(NavContext) as NavContextType;

  const startYearOfMyExperience: number = 2017;
  const yearsExperience = new Date().getFullYear() - startYearOfMyExperience;

  setTitle(".about()");

  return (
    <Container>
      <Text
        as="h1"
        fontSizes={{ "@initial": 8, "@sm": 9, "@lg": 10 }}
        className={Title()}
      >
        about(
        <Text
          fontSizes={{ "@initial": 8, "@sm": 9, "@lg": 10 }}
          className={TitleHighLight()}
        >
          &quot;João&quot;
        </Text>
        )
      </Text>

      <WrapperBody>
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
          <WrapperResume>
            <Text fontSizes={{ "@sm": 6 }}>
              Download my
              <Text fontSizes={{ "@sm": 6 }} className={DownloadLabel()}>
                &nbsp;resume&nbsp;
                <DownloadIcon />
              </Text>
            </Text>
          </WrapperResume>
        </ContainerMainActions>

        <Text fontSizes={{ "@sm": 6 }} as="p" className={Body()}>
          A young man passionate about solving problems using technology. I am
          ingenious and curious frontend developer. From Brazil, based in
          Campinas - SP
        </Text>

        <Text
          as="p"
          css={{ color: "$mauve8", marginTop: "$4" }}
          fontSizes={{ "@sm": 6 }}
        >
          &frasl;&frasl; {yearsExperience}+ years of experience
        </Text>
      </WrapperBody>
    </Container>
  );
};

export default About;
