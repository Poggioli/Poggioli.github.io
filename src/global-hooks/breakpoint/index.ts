import { useEffect, useState } from "react";

export enum BREAKPOINTS {
  XS = 0,
  SM = 576,
  MD = 768,
  LG = 992,
  XLG = 1200,
  XXLG = 1400,
}

const getDeviceConfig = (width: number): BREAKPOINTS => {
  if (width < BREAKPOINTS.SM) {
    return BREAKPOINTS.XS;
  }
  if (width < BREAKPOINTS.MD) {
    return BREAKPOINTS.SM;
  }
  if (width < BREAKPOINTS.LG) {
    return BREAKPOINTS.MD;
  }
  if (width < BREAKPOINTS.XLG) {
    return BREAKPOINTS.LG;
  }
  if (width < BREAKPOINTS.XXLG) {
    return BREAKPOINTS.XLG;
  }
  return BREAKPOINTS.XXLG;
};

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(() =>
    getDeviceConfig(window.innerWidth),
  );

  useEffect(() => {
    const calcInnerWidth = () => {
      setBreakpoint(getDeviceConfig(window.innerWidth));
    };
    window.addEventListener("resize", calcInnerWidth);
    return () => window.removeEventListener("resize", calcInnerWidth);
  }, []);

  return breakpoint;
};

export default useBreakpoint;
