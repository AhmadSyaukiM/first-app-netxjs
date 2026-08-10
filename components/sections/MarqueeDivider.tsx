import Marquee from "@/components/ui/Marquee";
import MarqueeIcon from "@/components/icons/MarqueeIcon";

const FRONT_ITEMS = ["Portfolio"].flatMap((text) => [
  <span key={`t-${text}`} className="px-3 text-lg font-extrabold text-white sm:text-2xl">
    {text}
  </span>,
  <MarqueeIcon key={`i-${text}`} className="h-4 w-4 text-white sm:h-6 sm:w-6" />,
]);

const BACK_ITEMS = ["Web Developer", "UI/UX Designer", "Mobile Developer"].flatMap((text) => [
  <span key={`t-${text}`} className="px-3 text-lg font-extrabold text-white sm:text-2xl">
    {text}
  </span>,
  <span key={`s-${text}`} className="px-3 text-white/50">|</span>,
]);

export default function MarqueeDivider() {
  return (
    <section className="relative my-8 overflow-hidden py-10 sm:my-12 sm:py-14">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 rotate-[4deg] scale-110">
        <Marquee
          items={BACK_ITEMS}
          direction="left"
          baseSpeed={0.7}
          repeat={6}
          className="bg-[#233D4D] py-4 shadow-lg"
        />
      </div>

      <div className="relative rotate-[-3deg] scale-110">
        <Marquee
          items={FRONT_ITEMS}
          direction="right"
          baseSpeed={0.7}
          repeat={10}
          className="bg-primary py-4 shadow-lg"
        />
      </div>
    </section>
  );
}