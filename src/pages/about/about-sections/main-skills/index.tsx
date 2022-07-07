import { FC } from "react";
import { AboutTitle, Container, Info, InfoContainer } from "../style";

interface MainSkillsProps {}

const MainSkills: FC<MainSkillsProps> = () => {
  return (
    <Container>
      <AboutTitle
        as="h2"
        fontSizes={{ "@initial": 6, "@sm": 7 }}
        fontWeights={4}
      >
        Main skills
      </AboutTitle>
      <InfoContainer>
        <Info as="p" fontSizes={{ "@sm": 5 }}>
          Frontend development,
          <br />
          UX/UI design
        </Info>
        <Info as="p" fontSizes={{ "@sm": 5 }}>
          JavaScript, TypeScript,
          <br />
          Node.js, BEM
        </Info>
        <Info as="p" fontSizes={{ "@sm": 5 }}>
          CSS, HTML,
          <br />
          Python, Sass,
          <br />
          Angular, ReactJS
        </Info>
        <Info as="p" fontSizes={{ "@sm": 5 }}>
          Banking sector
          <br />
          Investments
          <br />
          Logistics
        </Info>
        <Info as="p" fontSizes={{ "@sm": 5 }}>
          Analytical and
          <br />
          critical look
        </Info>
      </InfoContainer>
    </Container>
  );
};

export default MainSkills;
