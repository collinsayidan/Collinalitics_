"use client";

import { useState, useEffect } from "react";

export function useTypewriter(words: string[], speed = 100, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (index === words.length) return;

    const timeout = setTimeout(() => {
      if (forward) {
        if (subIndex < words[index].length) {
          setSubIndex(subIndex + 1);
        } else {
          setForward(false);
        }
      } else {
        if (subIndex > 0) {
          setSubIndex(subIndex - 1);
        } else {
          setForward(true);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, forward ? speed : speed / 2);

    return () => clearTimeout(timeout);
  }, [subIndex, index, forward, words, speed, pause]);

  return words[index].substring(0, subIndex);
}
