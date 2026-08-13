// components/sections/MarqueeDivider.tsx
import Marquee from "@/components/ui/Marquee";
import MarqueeIcon from "@/components/icons/MarqueeIcon";

const FRONT_ITEMS = ["Portfolio"].flatMap((text) => [
  <span
    key={`t-${text}`}
    className="px-3 text-lg font-extrabold text-white sm:text-2xl"
  >
    {text}
  </span>,
  <MarqueeIcon
    key={`i-${text}`}
    className="h-4 w-4 text-white sm:h-6 sm:w-6"
  />,
]);

const BACK_ITEMS = ["Web Developer", "UI/UX Designer", "Mobile Developer"].flatMap(
  (text) => [
    <span
      key={`t-${text}`}
      className="px-3 text-lg font-extrabold text-white sm:text-2xl"
    >
      {text}
    </span>,
    <span key={`s-${text}`} className="px-3 text-white/50">
      |
    </span>,
  ],
);

export default function MarqueeDivider() {
  return (
    <section className="relative my-8 h-[180px] w-full overflow-hidden sm:my-12 sm:h-[220px]">
      {/* Background strip */}
      <div
        className="absolute inset-x-0 top-[18%] -z-0 w-full
                   rotate-[8deg] scale-110
                   sm:top-[22%] sm:rotate-[6deg] sm:scale-110
                   lg:top-[28%] lg:rotate-[4deg]"
      >
        <Marquee
          items={BACK_ITEMS}
          direction="left"
          baseSpeed={0.7}
          repeat={6}
          className="w-full bg-[#233D4D] py-4 shadow-lg"
        />
      </div>

      {/* Front strip */}
      <div
        className="absolute inset-x-0 top-[25%] z-10 w-full
                   -rotate-[8deg] scale-125
                   sm:top-[52%] sm:-rotate-[6deg] sm:scale-110
                   lg:top-[31%] lg:-rotate-[4deg]"
      >
        <Marquee
          items={FRONT_ITEMS}
          direction="right"
          baseSpeed={0.7}
          repeat={10}
          className="w-full bg-primary py-4 shadow-lg"
        />
      </div>
    </section>
  );
}