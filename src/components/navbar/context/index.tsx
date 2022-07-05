import { createContext, FC, ReactNode, useMemo, useState } from "react";
import { NavContextType } from "../../../@types/nav";

export const NavContext = createContext<NavContextType | null>(null);

export interface NavProviderProps {
  children: ReactNode;
}

const NavProvider: FC<NavProviderProps> = ({ children }) => {
  const [title, setTitle] = useState(".toString()");

  const value = useMemo(() => ({ title, setTitle }), [title]);

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};

export default NavProvider;
