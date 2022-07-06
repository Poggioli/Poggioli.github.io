import { FC, useEffect, useState } from "react";
import useBrakpoint, { BREAKPOINTS } from "../../global-hooks/breakpoint";
import MenuItem, { MenuItemProps } from "./menu-item";
import {
  BackDrop,
  BackDropOpened,
  CloseIcon,
  Container,
  ContainerOpened,
  List,
  ListItem,
  MenuIcon,
} from "./style";

interface MenuProps {
  items: MenuItemProps[];
}

const Menu: FC<MenuProps> = ({ items }) => {
  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => {
    setOpen((openState: boolean) => !openState);
  };

  const windowSize: BREAKPOINTS = useBrakpoint();

  useEffect(() => {
    if (windowSize > BREAKPOINTS.SM) {
      setOpen(() => false);
    }
  }, [windowSize]);

  return (
    <>
      <MenuIcon onClick={handleToggleMenu} />

      <BackDrop className={open ? BackDropOpened() : ""} />
      <Container className={open ? ContainerOpened() : ""}>
        <CloseIcon onClick={handleToggleMenu} />
        <List>
          {items.map((item: MenuItemProps) => (
            <ListItem onClick={handleToggleMenu}>
              {item.children ? (
                item.children
              ) : (
                <MenuItem key={item.href} label={item.label} href={item.href} />
              )}
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
};

export default Menu;
