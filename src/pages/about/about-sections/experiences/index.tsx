/* eslint-disable react/jsx-props-no-spreading */
import { FC } from "react";
import Experience, { ExperienceProps } from "../../../../components/experience";
import { AboutTitle, Container, InfoContainer } from "../style";

interface ExperiencesProps {}

const Experiences: FC<ExperiencesProps> = () => {
  const experiences: ExperienceProps[] = [
    {
      position: "Fullstack Developer",
      company: "Loggi",
      techs: ["React", "Django"],
      start: "03-2022",
      companyWebsite: "https://www.loggi.com/",
      internalPage: "work/loggi",
    },
    {
      position: "Frontend Developer",
      company: "CI&T",
      techs: ["Angular2+", "Node", "Micro-frontend", "Micro-services"],
      start: "02-2017",
      companyWebsite: "https://ciandt.com",
      end: "03-2022",
      internalPage: "work/ciandt",
    },
  ];

  return (
    <Container>
      <AboutTitle
        as="h2"
        fontSizes={{ "@initial": 6, "@sm": 7 }}
        fontWeights={4}
      >
        Experiences
      </AboutTitle>
      <InfoContainer>
        {experiences.map((experience: ExperienceProps) => (
          <Experience key={experience.company} {...experience} />
        ))}
      </InfoContainer>
    </Container>
  );
};

export default Experiences;
