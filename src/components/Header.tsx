import { useLanguage } from "../context/LanguageContext";
import { useView } from "../context/ViewContext";

import LanguageButton from "./LanguageButton";

const Header = (): JSX.Element => {
  const { language, isEn } = useLanguage();
  const { view, setView } = useView();

  return (
    <header className="w-full h-[8vh] space-x-8 flex justify-center items-center max-sm:h-[5dvh] max-sm:pt-4">
      <button
        onClick={() => setView("home")}
        className={` ${
          isEn ? "font-en" : "font-ge font-semibold tracking-wide"
        } ${view === "home" ? "border-b" : ""} text-lg text-white`}
      >
        {language.Header.Home}
      </button>
      <LanguageButton />
      <button
        onClick={() => setView("projects")}
        className={` ${
          isEn ? "font-en" : "font-ge font-semibold tracking-wide"
        } ${view === "projects" ? "border-b" : ""} text-lg text-white`}
      >
        {language.Header.Projects}
      </button>
    </header>
  );
};

export default Header;
