import { FC, useContext } from "react";
import { NavContextType } from "../../@types/nav";
import Text from "../text";
import { NavContext } from "./context";
import Nav from "./styles";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const { title } = useContext(NavContext) as NavContextType;

  return (
    <Nav>
      <Text fontSizes={6} as="a" css={{ color: "$violet11" }}>
        {title}
      </Text>
    </Nav>
  );
};

export default Navbar;
