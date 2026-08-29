import Image from "next/image"; 
import FadeIn from "@/components/ui/FadeIn";
import AlbumCard from "@/components/ui/AlbumCard";

const CAREER_ITEMS = [
  {
    type: "FREELANCE",
    title: "Webpass.id",
    date: "Oktober - Desember 2023",
    description:
      "Launched in June 2023, Webpass.id provides innovative IT solutions and dynamic design services. We deliver high-quality, cutting-edge results for businesses of all sizes at an affordable price.",
    image: "/images/webpass.png",
  },
  {
    type: "INTERNSHIP",
    title: "PT Bentang Altur Teknologia",
    date: "Juli - Desember 2024",
    description:
      "Education, training and learning activities carried out in the business world or the industrial world that are relevant to the competencies (abilities) of students in their fields.",
    image: "/images/pkl.jpg",
  },
];

export default function Career() {
  return (
    <section id="career" className="relative px-6 py-16 sm:py-24">
    
      <Image
        src="/images/doodle.png"
        alt=""
        width={340}
        height={290}
        aria-hidden
        className="pointer-events-none absolute -left-6 bottom-0 -z-10 h-auto w-44 -scale-x-100 opacity-90 sm:w-122"
      />

      <Image
        src="/images/doodle.png"
        alt=""
        width={340}
        height={290}
        aria-hidden
        className="pointer-events-none absolute -right-6 -top-32 -z-10 h-auto w-44  opacity-90 sm:w-122"
      />

      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <p className="text-4xl font-extrabold text-black sm:text-5xl">
            04 . <span className="text-primary">CAREER PATH</span>
          </p>
          <h2 className="mt-1 text-3xl font-extrabold uppercase text-black sm:text-3xl">
            My Experience
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-gray-600 sm:text-base">
            Here is a look at my journey so far as a junior web developer — take a
            look at the projects and experiences I&apos;ve built along the way.
          </p>
        </FadeIn>
      </div>

  
      <div className="relative mx-auto mt-14 max-w-5xl">
        <div className="absolute left-[9px] top-2 h-[calc(100%-16px)] w-[2.5px] bg-primary/40 sm:left-1/2 sm:-translate-x-1/2" />

        <div className="flex flex-col gap-20 sm:gap-24">
          {CAREER_ITEMS.map((item, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <FadeIn key={item.title} delay={idx * 0.1}>
                <div className="relative sm:grid sm:grid-cols-2 sm:items-start sm:gap-14">
                  <span
                    className="absolute left-0 top-2 z-10 flex h-5 w-5 items-center justify-center
                               rounded-full border-2 border-dashed border-primary bg-white
                               sm:left-1/2 sm:h-6 sm:w-6 sm:-translate-x-1/2"
                  >
                    <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary sm:h-3 sm:w-3" />
                    </span>
                  </span>

                  <div className={`hidden sm:block ${isLeft ? "sm:pr-10 sm:text-right" : ""}`}>
                    {isLeft && <CareerContent item={item} align="right" />}
                  </div>

                  <div className={`hidden sm:block ${!isLeft ? "sm:pl-10" : ""}`}>
                    {!isLeft && <CareerContent item={item} align="left" />}
                  </div>

                  <div className="pl-10 sm:hidden">
                    <CareerContent item={item} align="left" />
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CareerContent({
  item,
  align,
}: {
  item: (typeof CAREER_ITEMS)[number];
  align: "left" | "right";
}) {
  return (
    <div className={align === "right" ? "sm:flex sm:flex-col sm:items-end" : ""}>
      <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base">
        {item.type}
      </p>
      <h3 className="mt-1.5 text-xl font-extrabold text-black sm:text-2xl md:text-3xl">
        {item.title}
      </h3>

      <span className="mt-3 inline-block rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-white sm:text-base">
        {item.date}
      </span>

      <p
        className={`mt-4 max-w-lg text-base leading-relaxed text-gray-600 sm:text-lg ${
          align === "right" ? "sm:text-right" : ""
        }`}
      >
        {item.description}
      </p>

      {item.image && (
        <div className="mt-6">
          <AlbumCard src={item.image} alt={item.title} />
        </div>
      )}
    </div>
  );
}