import { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const calcScrollPosition = () => {
      const { scrollY, innerHeight } = window;
      const { scrollHeight: height } = window.document.querySelector(
        "#root",
      ) as Element;
      setScrollPosition(scrollY / (height - innerHeight));
    };

    window.addEventListener("scroll", calcScrollPosition);
    return () => window.removeEventListener("scroll", calcScrollPosition);
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
