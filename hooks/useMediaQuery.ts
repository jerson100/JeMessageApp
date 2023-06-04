"use client";
import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    const fn = () => setMatches(media.matches);
    fn();
    media.addEventListener("change", fn);
    return () => media.removeEventListener("change", fn);
  }, [query]);
  return matches;
};

export default useMediaQuery;
