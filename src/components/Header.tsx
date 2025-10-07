import { useLanguage } from "../context/LanguageContext";
import LanguageButton from "./LanguageButton";

const Header = (): JSX.Element => {
  const { language, isEn } = useLanguage();

  return (
    <div className="absolute w-full flex justify-center items-center">
      <header className="w-[398px] h-[55px] md:h-[66px] md:min-w-[450px] mx-[16px] my-[30px] px-[6px] py-[20px] rounded-xl flex justify-center items-center bg-gradient-to-br from-[#04071D] to-[#0C0E23] drop-shadow-sm border-[0.1px] border-[#36374942]">
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
