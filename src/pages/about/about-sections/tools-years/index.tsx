import { FC } from "react";
import { AboutTitle, Container, Info, InfoContainer } from "../style";
import { HighLight } from "./style";

interface ToolsYearsProps {}

const ToolsYears: FC<ToolsYearsProps> = () => {
  const experienceInYears = (since: number, yearsWithoutUsing: number) => {
    const value = new Date().getFullYear() - since + yearsWithoutUsing;
    return value || 1;
  };

  const yearsExperienceSymbol = (value: number) => (value > 1 ? "+" : "~");

  const yearsExperience = (since: number, yearsWithoutUsing: number = 0) => {
    const yearsUsing = experienceInYears(since, yearsWithoutUsing);
    return `${yearsExperienceSymbol(yearsUsing)}${yearsUsing}`;
  };

  return (
    <Container>
      <AboutTitle
        as="h2"
        fontSizes={{ "@initial": 6, "@sm": 7 }}
        fontWeights={4}
      >
        Tools
        <HighLight fontSizes={{ "@initial": 5, "@sm": 6 }} fontWeights={4}>
          /years
        </HighLight>
      </AboutTitle>
      <InfoContainer>
        <Info as="p" fontSizes={{ "@sm": 5 }}>
          JavaScript/{yearsExperience(2017)}
          <br />
          TypeScript/{yearsExperience(2017)}
          <br />
          Scrum/{yearsExperience(2017)}
        </Info>
        <Info as="p" fontSizes={{ "@sm": 5 }}>
          Micro-frontend&apos;s/{yearsExperience(2020)}
          <br />
          Micro-service&apos;s/{yearsExperience(2020)}
        </Info>
        <Info as="p" fontSizes={{ "@sm": 5 }}>
          CSS/{yearsExperience(2017)}
          <br />
          HTML/{yearsExperience(2017)}
          <br />
          Sass/{yearsExperience(2018)}
          <br />
        </Info>
        <Info as="p" fontSizes={{ "@sm": 5 }}>
          BEM/{yearsExperience(2018)}
          <br />
          Angular/{yearsExperience(2017)}
          <br />
          ReactJS/{yearsExperience(2022)}
          <br />
        </Info>
        <Info as="p" fontSizes={{ "@sm": 5 }}>
          Node.js/{yearsExperience(2019)}
          <br />
          RestAPI/{yearsExperience(2017)}
          <br />
          Python/{yearsExperience(2022)}
          <br />
        </Info>
      </InfoContainer>
    </Container>
  );
};

export default ToolsYears;
