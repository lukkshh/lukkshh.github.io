import { GHIcon, IGIcon, LIIcon } from "./About/Icons";
import { trackEvent } from "../utils/analytics";

type SocialEventName = "github_click" | "linkedin_click";

export default function Footer() {
  const links = [
    {
      icon: IGIcon,
      url: "https://www.instagram.com/lukkshh/",
      aria_label: "Instagram",
      eventName: undefined,
    },
    {
      icon: GHIcon,
      url: "https://github.com/lukkshh",
      aria_label: "GitHub",
      eventName: "github_click" as SocialEventName,
    },
    {
      icon: LIIcon,
      url: "https://www.linkedin.com/in/lukkshh/",
      aria_label: "LinkedIn",
      eventName: "linkedin_click" as SocialEventName,
    },
  ];

  return (
    <footer className="h-10 pb-24 md:pb-14 w-full flex flex-col space-y-4 md:space-y-0 md:flex-row items-center justify-around">
      <span className="text-sm text-white">Copyright ©2026 Luka Shvelidze</span>
      <ul className="flex space-x-4">
        {links.map(({ icon: Icon, url, aria_label, eventName }, index) => (
          <li key={index}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => eventName && trackEvent(eventName)}
            >
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
