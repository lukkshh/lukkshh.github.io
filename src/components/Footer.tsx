import { GHIcon, IGIcon, LIIcon } from "./About/Icons";

export default function Footer() {
  const links = [
    {
      icon: IGIcon,
      url: "https://www.instagram.com/lukkshh/",
      aria_label: "Instagram",
    },
    { icon: GHIcon, url: "https://github.com/lukkshh", aria_label: "GitHub" },
    {
      icon: LIIcon,
      url: "https://www.linkedin.com/in/lukkshh/",
      aria_label: "LinkedIn",
    },
  ];

  return (
    <footer className="h-10 mb-16 md:mb-10 w-full flex flex-col space-y-4 md:space-y-0 md:flex-row items-center justify-around">
      <span className="text-sm text-white">Copyright ©2025 Luka Shvelidze</span>
      <ul className="flex space-x-4">
        {links.map(({ icon: Icon, url, aria_label }, index) => (
          <li key={index}>
            <a href={url} target="_blank">
              <button
                aria-label={aria_label}
                className="w-10 h-10 flex justify-center items-center rounded-lg border-[0.1px] border-[#ffffff61] shadow-inner shadow-[#ffffff61] bg-[#05041F] text-white"
              >
                <Icon />
              </button>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
