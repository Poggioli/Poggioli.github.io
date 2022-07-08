import { FC } from "react";
import Text from "../../text";
import { HighLight } from "./style";

export interface LanguageProps {
  initials: string;
  name: string;
}

const Language: FC<LanguageProps> = ({ initials, name }) => {
  return (
    <Text
      fontSizes={{ "@sm": 5 }}
      css={{
        marginTop: "$3",
        color: "$mauve11",
      }}
    >
      <HighLight fontSizes={{ "@sm": 5 }}>
        <i>{initials}</i>
      </HighLight>{" "}
      {name}
    </Text>
  );
};

export default Language;
