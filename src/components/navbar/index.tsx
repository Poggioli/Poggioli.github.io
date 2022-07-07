import { FC, useContext } from "react";
import { NavContextType } from "../../@types/nav";
import Menu from "../menu";
import { MenuItemProps } from "../menu/menu-item";
import Text from "../text";
import { NavContext } from "./context";
import {
  Nav,
  LinkedinIcon,
  GitHubIcon,
  ContainerIcons,
  LinkIcon,
  LinearGradient,
  Container,
} from "./styles";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const { title } = useContext(NavContext) as NavContextType;

  const menuItems: MenuItemProps[] = [
    {
      label: ".home()",
      href: "/",
    },
    {
      label: ".about()",
      href: "/about",
    },
    {
      label: "",
      href: "",
      children: (
        <ContainerIcons>
          <LinkIcon
            href="https://www.linkedin.com/in/joaopogiolli/"
            target="_blank"
          >
            <LinkedinIcon />
          </LinkIcon>
          <LinkIcon href="https://github.com/Poggioli/" target="_blank">
            <GitHubIcon />
          </LinkIcon>
        </ContainerIcons>
      ),
    },
  ];

  return (
    <Nav>
      <Container>
        <Text fontSizes={6} as="a" css={{ color: "$violet11" }}>
          {title}
        </Text>

        <Menu items={menuItems} />
      </Container>
      <LinearGradient />
    </Nav>
  );
};

export default Navbar;
