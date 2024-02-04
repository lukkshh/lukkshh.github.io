import { LanguageContext } from "../store/LanguageProvider";
import Hamburger from "../components/hamburger/Hamburger";
import { en, ge } from "../data/Languages";
import { useContext } from "react";

const Header = () => {
  const { eng, setEng } = useContext(LanguageContext);
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <nav className="fixed z-50 black-ops top-0 w-full h-20 backdrop-blur-sm flex justify-between items-center">
      <a href="/" className="h-3/4 ml-12 max-md:ml-4">
        <img
          className="w-full h-full"
          src="images/luka-high-resolution-logo-white-transparent.png"
          alt="logo"
        />
      </a>
      <ul className="text-white text-lg max-md:hidden [&_a:hover]:text-red-600 mr-6 space-x-6 flex justify-center items-center">
        <li>
          <a href="#home">{lang.Header.Home}</a>
        </li>
        <li>
          <a href="#about">{lang.Header.About}</a>
        </li>
        <li>
          <a href="#certificates">{lang.Header.Certificates}</a>
        </li>
        <li>
          <a href="#projects">{lang.Header.Projects}</a>
        </li>
        <li>
          {eng ? (
            <span
              onClick={() => {
                setEng(false);
                setLang(ge);
                localStorage.setItem("language", "geo");
              }}
              className="fi fi-ge text-3xl cursor-pointer rounded-md"
            ></span>
          ) : (
            <span
              onClick={() => {
                setEng(true);
                setLang(en);
                localStorage.setItem("language", "eng");
              }}
              className="fi fi-gb text-3xl cursor-pointer rounded-md"
            ></span>
          )}
        </li>
      </ul>
      <Hamburger />
    </nav>
  );
};

export default Header;
