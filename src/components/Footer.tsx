"use client";

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
    <footer className="w-full px-4 pb-24 md:pb-14">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-4 px-4 md:flex-row md:justify-between md:px-6">
        <span className="text-center text-sm text-white md:text-left">Copyright ©2026 Luka Shvelidze · @lukkshh</span>
        <ul className="flex space-x-4">
          {links.map(({ icon: Icon, url, aria_label, eventName }, index) => (
            <li key={index}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={aria_label}
                onClick={() => eventName && trackEvent(eventName)}
                className="flex h-10 w-10 items-center justify-center rounded-lg border-[0.1px] border-[#ffffff61] bg-[#05041F] text-white shadow-inner shadow-[#ffffff61] transition-colors hover:border-[#CBACF9] hover:text-[#CBACF9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CBACF9] active:scale-95"
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
