import { useEffect, useState } from "react";

interface Window {
  width: number;
  height: number;
  scrollY: number;
}

const getWindowProps = () => {
  const { innerWidth: width, innerHeight: height, scrollY } = window;
  return {
    width,
    height,
    scrollY,
  };
};

const useWindow = (): Window => {
  const [windowProps, setWindowProps] = useState<Window>(getWindowProps());

  useEffect(() => {
    const setWindow = () => {
      setWindowProps(getWindowProps());
    };
    window.addEventListener("resize", setWindow);
    return () => window.addEventListener("resize", setWindow);
  }, []);

  return windowProps;
};

export default useWindow;
