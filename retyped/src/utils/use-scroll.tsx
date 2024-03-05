import { useCallback, useState, useEffect } from "react";

/**
 * Is Used to check if the page is scrolled
 * So as to apply some styling on several ocassions of elements
 * @param threshold
 * @returns
 */
export default function useScroll(threshold: number) {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  // perfom a check on the first load
  useEffect(() => {
    onScroll();
  }, [onScroll]);

  return scrolled;
}
