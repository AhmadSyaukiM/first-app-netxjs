"use client";

import { useEffect, useState } from "react";

export default function TypingText({
  text,
  speed = 25,
  className = "",
}: {
  text: string;
  speed?: number;
  className?: string;
}) {
  const [displayed, setDisplayed] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(typeInterval);
    }, speed);

    return () => clearInterval(typeInterval);
  }, [text, speed]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span className={className}>
      {displayed}
      <span
        className={`ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-current transition-opacity duration-100 ${
          cursorVisible ? "opacity-100" : "opacity-0"
        }`}
      />
    </span>
  );
}