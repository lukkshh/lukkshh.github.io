import type { JSX } from "react";
import { useLocale } from "next-intl";
import { EnFlag, GeFlag } from "./Flags";

const LanguageButton = (): JSX.Element => {
  const locale = useLocale();
  const isEn = locale === "en";
  const targetLocale = isEn ? "ka" : "en";

  const handleClick = (): void => {
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `NEXT_LOCALE=${targetLocale}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;
  };

  return (
    <a
      href={isEn ? "/ka" : "/"}
      className="flex justify-center items-center"
      aria-label="Change Language"
      onClick={handleClick}
    >
      {isEn ? <GeFlag /> : <EnFlag />}
    </a>
  );
};

export default LanguageButton;
