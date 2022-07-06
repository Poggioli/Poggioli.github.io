import { FC, ReactNode } from "react";
import Text from "../../text";
import MenuItemStyle from "./style";

export interface MenuItemProps {
  label: string;
  href: string;
  children?: ReactNode;
}

const MenuItem: FC<MenuItemProps> = ({ label, href, children }) => {
  return (
    <Text className={MenuItemStyle()} as="a" href={href}>
      {label}
      {children}
    </Text>
  );
};

MenuItem.defaultProps = {
  children: undefined,
};

export default MenuItem;
