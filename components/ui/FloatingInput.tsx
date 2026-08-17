"use client";

import { useState } from "react";
import { IconType } from "react-icons";

type FloatingInputProps = {
  label: string;
  icon: IconType;
  type?: string;
  as?: "input" | "textarea";
  value: string;
  onChange: (v: string) => void;
};

export default function FloatingInput({
  label,
  icon: Icon,
  type = "text",
  as = "input",
  value,
  onChange,
}: FloatingInputProps) {
  const [focused, setFocused] = useState(false);
  const isFloating = focused || value.length > 0;

  const sharedProps = {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange(e.target.value),
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    className:
      "peer w-full flex-1 bg-transparent text-sm text-black outline-none",
  };

  return (
    <div className="relative">
      {/* label - default: besar, menyatu di baris field (seperti placeholder).
         floating: kecil, naik ke atas field */}
      <label
        className={`pointer-events-none absolute left-0 font-bold text-black transition-all duration-300 ${
          isFloating
            ? "-top-1 text-xs font-semibold text-primary"
            : "top-5 text-base"
        }`}
      >
        {label}
      </label>

      {/* baris field: input/textarea + icon di kanan, garis bawah menyatu 1 baris penuh */}
      <div className="flex items-end justify-between gap-2 border-b border-black/20 pb-2 pt-7 transition-colors duration-300 focus-within:border-primary">
        {as === "textarea" ? (
          <textarea rows={2} {...sharedProps} />
        ) : (
          <input type={type} {...sharedProps} />
        )}

        <Icon
          className={`h-4 w-4 shrink-0 transition-colors duration-300 ${
            isFloating ? "text-primary" : "text-gray-400"
          }`}
        />
      </div>
    </div>
  );
}