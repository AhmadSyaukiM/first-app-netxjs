import { ReactNode } from "react";

export default function FigmaFrame({ children }: { children: ReactNode }) {
  return (
    <span className="relative -rotate-6 inline-flex items-center px-2 py-1">
      <span className="relative z-10">{children}</span>

     
      <span className="pointer-events-none absolute inset-0 border-2 border-sky-400 rounded-[2px]" />

      
      {[
        "-top-[5px] -left-[5px]",
        "-top-[5px] -right-[5px]",
        "-bottom-[5px] -left-[5px]",
        "-bottom-[5px] -right-[5px]",
      ].map((pos) => (
        <span
          key={pos}
          className={`pointer-events-none absolute h-[7px] w-[7px] rounded-[1px] bg-white border border-sky-400 ${pos}`}
        />
      ))}
    </span>
  );
}