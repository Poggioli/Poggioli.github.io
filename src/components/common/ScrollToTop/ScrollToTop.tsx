import { FC, ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop: FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();
  const scrollTo: ScrollToOptions = {
    top: 0,
    left: 0,
    behavior: "smooth",
  };

  useEffect(() => {
    window.scrollTo(scrollTo);
  }, [location]);

  return <>{children}</>;
};
