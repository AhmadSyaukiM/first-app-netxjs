import Image from "next/image";
import { FaRegEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";

const CONTACT_ITEMS = [
  {
    icon: FaRegEnvelope,
    label: "Email",
    value: "ahmdsyaukim@gmail.com",
    href: "mailto:ahmdsyaukim@gmail.com",
  },
  {
    icon: FaLocationDot,
    label: "Location",
    value: "DKI Jakarta, Jakarta Timur",
    href: "https://maps.google.com/?q=Jakarta+Timur",
  },
];

export default function ContactInfo() {
  return (
    
    <div className="mx-auto flex w-full max-w-md flex-col items-start text-left lg:mx-0">
      <div className="flex items-center gap-2 rounded-full border border-primary bg-primary/10 py-1.5 pl-1.5 pr-4">
        <div className="h-7 w-7 overflow-hidden rounded-full ring-2 ring-white">
          <Image
            src="/images/profile.png"
            alt="Ahmad Syauki Mubarok"
            width={28}
            height={28}
            className="h-full w-full object-cover"
          />
        </div>
        <span className="text-sm font-semibold text-primary">Ahmad Syauki Mubarokq</span>
      </div>

      <h2 className="mt-5 text-3xl font-extrabold leading-tight text-black sm:text-4xl">
        Let&apos;s craft something exceptional together
      </h2>

      <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-600">
        Have an idea, project, or general query? Drop us a line. We typically
        read and respond to all inquiries within a single working day.
      </p>

      <div className="mt-6 flex flex-col gap-4">
        {CONTACT_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              target={item.label === "Location" ? "_blank" : undefined}
              rel={item.label === "Location" ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-3"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                <Icon className="text-primary" size={16} />
              </span>

              
              <span className="flex flex-col items-start justify-center gap-0.5 text-left">
                <span className="text-xs font-semibold leading-none text-primary">
                  {item.label}
                </span>
                <span className="text-sm font-medium leading-none text-black transition-colors duration-200 group-hover:text-primary">
                  {item.value}
                </span>
              </span>
            </a>
          );
        })}
      </div>

      <div className="mt-6 flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1.5 text-xs font-medium text-primary">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
        Average response time: 2 hours
      </div>
    </div>
  );
}