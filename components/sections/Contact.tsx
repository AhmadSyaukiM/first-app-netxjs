import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import ContactForm from "@/components/ui/ContactForm";
import ContactInfo from "@/components/ui/ContactInfo";

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 pb-36 pt-16 sm:pb-28 sm:pt-24">
      <Image
        src="/images/doodle.png"
        alt=""
        width={140}
        height={90}
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 -z-10 h-auto w-80 opacity-90 sm:right-0 sm:w-92"
      />

      <div className="pointer-events-none absolute left-[96%] top-0 h-[1235px] w-[1px] bg-black/30 sm:left-[5%] sm:h-[769px] lg:left-[80%]" />
      <div className="pointer-events-none absolute inset-x-0 top-[1235px] h-[1.5px] bg-black/30 sm:top-[769px]" />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:items-start lg:justify-center lg:gap-20">
          <FadeIn>
            <ContactForm />
          </FadeIn>

          <FadeIn delay={0.15}>
            <ContactInfo />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}