"use client";

import type { JSX } from "react";
import type { MouseEvent } from "react";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { EnFlag, GeFlag } from "./Flags";

const LanguageButton = (): JSX.Element => {
  const locale = useLocale();
  const pathname = usePathname();
  const isEn = locale === "en";
  const targetLocale = isEn ? "ka" : "en";
  const targetPath = isEn
    ? `/ka${pathname === "/" ? "" : pathname}`
    : pathname.replace(/^\/ka(?=\/|$)/, "") || "/";

  const handleClick = (event: MouseEvent<HTMLAnchorElement>): void => {
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `NEXT_LOCALE=${targetLocale}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;
    event.currentTarget.href = `${targetPath}${window.location.search}`;
  };

  return (
    <a
      href={targetPath}
      className="flex justify-center items-center"
      aria-label="Change Language"
      onClick={handleClick}
    >
      {isEn ? <GeFlag /> : <EnFlag />}
    </a>
  );
};

export default LanguageButton;
