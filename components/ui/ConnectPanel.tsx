import { FaInstagram, FaFacebook, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa6";

const ROWS = [
  [
    { icon: FaInstagram, label: "Instagram", href: "https://instagram.com/username" },
    { icon: FaFacebook, label: "Facebook", href: "https://facebook.com/username" },
  ],
  [
    { icon: FaGithub, label: "Github", href: "https://github.com/username" },
    { icon: FaLinkedin, label: "Linkedin", href: "https://linkedin.com/in/username" },
  ],
  [
    { icon: FaDiscord, label: "Discord", href: "https://discord.com/users/username" },
  ],
];

export default function ConnectPanel() {
  return (
    <div className="flex w-full flex-col items-center lg:items-start">
      <h3 className="text-3xl font-extrabold leading-tight text-black sm:text-6xl">
        Connect
        <br />
        With <span className="text-primary">Me !</span>
      </h3>

      <div className="mt-6 flex flex-col gap-3">
        {ROWS.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className="flex flex-wrap justify-center gap-2.5 lg:justify-start"
            style={{ marginLeft: rowIdx === 2 ? "0px" : undefined }}
          >
            {row.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass group flex items-center gap-2.5 rounded-full px-5 py-2.5
                             text-base font-semibold text-black
                             transition-all duration-500 ease-out
                             hover:bg-primary hover:text-white hover:scale-105"
                >
                  <Icon size={16} className="transition-colors duration-500 ease-out group-hover:text-white" />
                  {social.label}
                </a>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}