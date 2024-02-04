import "./Hamburger.css";
import { en, ge } from "../../data/Languages";
import { useState, useContext } from "react";
import { Menu, Close } from "@mui/icons-material";
import { LanguageContext } from "../../store/LanguageProvider";

const Hamburger = () => {
  const { eng, setEng } = useContext(LanguageContext);
  const { lang, setLang } = useContext(LanguageContext);

  const [isOpen, setOpen] = useState(false);
  return (
    <div className="text-white mr-6 hidden max-md:block">
      <button
        onClick={() => {
          setOpen(!isOpen);
          document.getElementById("menu").classList.toggle("show");
        }}
      >
        {isOpen ? <Close fontSize="large" /> : <Menu fontSize="large" />}
      </button>
      <div id="menu" className="hamburger-menu justify-center">
        <ul className="text-white text-lg space-y-6 ml-4 w-full flex flex-col justify-center h-1/2">
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
      </div>
    </div>
  );
};

export default Hamburger;
