import { useEffect, useState } from "react";

const useScrollTop = (threshold = 10) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    // add event listener when we scroll down and apply the handScroll func
    window.addEventListener("scroll", handleScroll);
    // clean function
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);
  return scrolled;
};
export default useScrollTop;
