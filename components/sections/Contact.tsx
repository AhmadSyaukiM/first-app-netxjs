import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import ContactForm from "@/components/ui/ContactForm";
import ContactInfo from "@/components/ui/ContactInfo";

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <Image
        src="/images/doodle.png"
        alt=""
        width={140}
        height={90}
        aria-hidden
        className="pointer-events-none absolute right-2 top-10 -z-10 h-auto w-20 opacity-90 sm:right-0 sm:w-92"
      />

      <div className="pointer-events-none absolute left-[8%] top-[10px] h-[759px] w-[1.5px] bg-black/30 sm:left-[15%] lg:left-[20%]" />
      <div className="pointer-events-none absolute inset-x-0 top-[769px] h-[1.5px] bg-black/30" />

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