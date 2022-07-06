import { FC } from "react";
import { VerticalDivider, Container } from "./style";

interface LineProps {}

const Line: FC<LineProps> = () => {
  return (
    <Container>
      <VerticalDivider />
    </Container>
  );
};

export default Line;
