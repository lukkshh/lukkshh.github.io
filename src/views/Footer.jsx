import { LanguageContext } from "../store/LanguageProvider";
import { useContext } from "react";

const Footer = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <footer className="rounded-lg shadow m-4 bg-zinc-900">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center text-gray-400">
          © 2024{" "}
          <a href="/" className="hover:underline">
            LUKKSHH.
          </a>{" "}
          {lang.Footer}
        </span>
        <ul className="max-md:hidden flex flex-wrap items-center mt-3 text-sm font-medium  text-gray-400 sm:mt-0">
          <li>
            <a href="#home" className="hover:underline me-4 md:me-6">
              {lang.Header.Home}
            </a>
          </li>
          <li>
            <a href="#About" className="hover:underline me-4 md:me-6">
              {lang.Header.About}
            </a>
          </li>
          <li>
            <a href="#certificates" className="hover:underline me-4 md:me-6">
              {lang.Header.Certificates}
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline">
              {lang.Header.Projects}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
