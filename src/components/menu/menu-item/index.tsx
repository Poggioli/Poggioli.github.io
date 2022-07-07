/* eslint-disable react/no-unused-prop-types */
import { FC, ReactNode } from "react";
import Label from "./style";

export interface MenuItemProps {
  label: string;
  href: string;
  children?: ReactNode;
}

const MenuItem: FC<MenuItemProps> = ({ label, href }) => {
  return <Label to={href}>{label}</Label>;
};

MenuItem.defaultProps = {
  children: undefined,
};

export default MenuItem;
