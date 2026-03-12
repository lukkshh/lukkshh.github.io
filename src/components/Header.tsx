import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

import LanguageButton from "./LanguageButton/LanguageButton";

type NavNavLinkType = {
  href: string;
  label: string;
}[];

const HamburgerIcon = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => (
  <button
    aria-label="Toggle menu"
    onClick={toggle}
    className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
  >
    <motion.span
      animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.3 }}
      className="block w-5 h-[2px] bg-white rounded-full"
    />
    <motion.span
      animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="block w-5 h-[2px] bg-white rounded-full"
    />
    <motion.span
      animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.3 }}
      className="block w-5 h-[2px] bg-white rounded-full"
    />
  </button>
);

const Header = (): JSX.Element => {
  const { language, isEn } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const NavLink: NavNavLinkType = [
    { href: "#", label: language.Header.Home },
    { href: "#about", label: language.Header.About },
    { href: "#experience", label: language.Header.Experience },
    { href: "#projects", label: language.Header.Projects },
  ];

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="fixed w-full flex justify-center items-center z-50">
      {/* Desktop header */}
      <header className="hidden md:flex min-w-[550px] h-[60px] mx-4 my-7 px-2 py-5 rounded-xl justify-center items-center bg-gradient-to-br from-[#04071D] to-[#0C0E23] drop-shadow-sm border-[0.1px] border-[#36374942]">
        <nav>
          <ul
            className={`${
              isEn ? "text-base" : "text-sm"
            } flex justify-center items-center text-white md:text-lg font-medium space-x-6`}
          >
            {NavLink.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const id = link.href.replace("#", "");
                    if (!id) {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      return;
                    }
                    const el = document.getElementById(id);
                    if (el) {
                      const y =
                        el.getBoundingClientRect().top + window.scrollY - 140;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <LanguageButton />
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobile header */}
      <header className="flex md:hidden w-full mx-4 my-4 px-4 py-3 rounded-xl justify-between items-center bg-gradient-to-br from-[#04071D] to-[#0C0E23] drop-shadow-sm border-[0.1px] border-[#36374942] z-[1000]">
        <LanguageButton />
        <HamburgerIcon
          isOpen={menuOpen}
          toggle={() => setMenuOpen((prev) => !prev)}
        />
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] bg-[#000319] md:hidden flex flex-col items-start pl-8 pt-32 h-screen"
          >
            <nav>
              <ul
                className={`${
                  isEn ? "text-xl" : "text-lg"
                } flex flex-col items-start text-white font-medium space-y-8 whitespace-nowrap`}
              >
                {NavLink.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setMenuOpen(false);
                        const id = link.href.replace("#", "");
                        if (!id) {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                          return;
                        }
                        const el = document.getElementById(id);
                        if (el) {
                          const y =
                            el.getBoundingClientRect().top +
                            window.scrollY -
                            50;
                          window.scrollTo({ top: y, behavior: "smooth" });
                        }
                      }}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
