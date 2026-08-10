// components/ui/Logo.tsx
"use client";

import { useEffect, useState } from "react";

const FULL_TEXT = "Syauki.";
const TYPE_SPEED = 110;
const DELETE_SPEED = 60;
const BLINK_DURATION = 300;
const PAUSE_AFTER_DELETE = 500;

type Phase = "typing" | "blinking" | "deleting" | "pausing";

export default function Logo() {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < FULL_TEXT.length) {
        timeoutId = setTimeout(() => {
          setText(FULL_TEXT.slice(0, text.length + 1));
        }, TYPE_SPEED);
      } else {
        setPhase("blinking");
      }
    }

    if (phase === "blinking") {
      let blinkStep = 0;
      const blink = () => {
        setCursorVisible((v) => !v);
        blinkStep++;
        if (blinkStep < 4) {
          timeoutId = setTimeout(blink, BLINK_DURATION);
        } else {
          setCursorVisible(true);
          setPhase("deleting");
        }
      };
      timeoutId = setTimeout(blink, BLINK_DURATION);
    }

    if (phase === "deleting") {
      if (text.length > 0) {
        timeoutId = setTimeout(() => {
          setText(text.slice(0, -1));
        }, DELETE_SPEED);
      } else {
        setPhase("pausing");
      }
    }

    if (phase === "pausing") {
      timeoutId = setTimeout(() => {
        setPhase("typing");
      }, PAUSE_AFTER_DELETE);
    }

    return () => clearTimeout(timeoutId);
  }, [phase, text]);

  return (
    // "fixed" -> "absolute": sekarang nempelnya relatif ke parent section (Home),
    // bukan ke viewport, jadi akan ikut ke-scroll away bareng section Home
    <div className="absolute left-6 top-6 z-40 flex items-center gap-2 font-extrabold text-2xl">
      <svg viewBox="0 0 24 24" className="h-5 w-5 -scale-x-100" aria-hidden>
        <polygon points="4,2 20,12 4,22" fill="black" />
      </svg>
      <span className="tabular-nums">{text}</span>
      <span
        className={`w-[2.5px] h-6 bg-black inline-block transition-opacity duration-150 ${
          cursorVisible ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}