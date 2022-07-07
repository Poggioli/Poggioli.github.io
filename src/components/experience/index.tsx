import { FC } from "react";
import {
  Company,
  CompanyLink,
  Container,
  DurationTime,
  GotToIcon,
  Pos,
  SeeMore,
  Techs,
} from "./style";

export interface ExperienceProps {
  position: string;
  company: string;
  techs: string[];
  start: string;
  companyWebsite?: string;
  end?: string;
  internalPage?: string;
}

const Experience: FC<ExperienceProps> = ({
  position,
  company,
  techs,
  start,
  companyWebsite,
  end,
  internalPage,
}) => {
  const durationTime = (
    startTime: string,
    endTime: string | undefined,
  ): string => `${startTime} - ${endTime || "now"}`;

  const techsPhrase = (techsValue: string[]): string => {
    const phrase: string[] = techsValue.slice(0, 3);
    if (techsValue.length > 3) {
      phrase.push("...");
    }

    return phrase.join(" / ");
  };

  return (
    <Container>
      <Pos as="p" fontSizes={{ "@initial": 6 }}>
        {position}
      </Pos>

      {companyWebsite ? (
        <CompanyLink
          fontWeights={4}
          as="a"
          fontSizes={{ "@initial": 5 }}
          href={companyWebsite}
          target="_blank"
        >
          {company}
          <GotToIcon />
        </CompanyLink>
      ) : (
        <Company fontWeights={4} as="p" fontSizes={{ "@initial": 5 }}>
          {company}
        </Company>
      )}
      <DurationTime as="p" fontSizes={{ "@initial": 3 }}>
        {durationTime(start, end)}
      </DurationTime>
      <Techs as="p">{techsPhrase(techs)}</Techs>
      {internalPage && <SeeMore to={internalPage} />}
    </Container>
  );
};

Experience.defaultProps = {
  companyWebsite: "",
  end: "",
  internalPage: "",
};

export default Experience;
