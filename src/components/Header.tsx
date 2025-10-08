import throttle from "lodash/throttle";

import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

import LanguageButton from "./LanguageButton";

const Header = (): JSX.Element => {
  const { language, isEn } = useLanguage();

  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) < 10) return;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    }, 150);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed w-full flex justify-center items-center z-50 transition-all duration-300 ease-in-out ${
        scrollDirection === "down"
          ? "-translate-y-full opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      <header className="w-[398px] h-[55px] md:h-[60px] md:min-w-[450px] mx-[16px] my-[28px] px-[6px] py-[20px] rounded-xl flex justify-center items-center bg-gradient-to-br from-[#04071D] to-[#0C0E23] drop-shadow-sm border-[0.1px] border-[#36374942]">
        <nav>
          <ul
            className={` ${
              isEn ? "text-base" : "text-sm"
            } flex justify-center items-center  md:text-lg font-medium space-x-6 text-white`}
          >
            <li>
              <a href="">{language.Header.Home}</a>
            </li>
            <li>
              <a href="">{language.Header.About}</a>
            </li>
            <li>
              <a href="">{language.Header.Projects}</a>
            </li>
            <li>
              <LanguageButton />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
