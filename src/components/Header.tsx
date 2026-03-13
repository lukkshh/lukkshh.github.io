import { useState, useEffect, useRef } from "react";
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
  const [activeLink, setActiveLink] = useState("#");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const isProgrammaticScrollRef = useRef(false);
  const scrollSettleFrameRef = useRef<number | null>(null);
  const highlightedLink = hoveredLink ?? activeLink;

  const NavLink: NavNavLinkType = [
    { href: "#", label: language.Header.Home },
    { href: "#about", label: language.Header.About },
    { href: "#experience", label: language.Header.Experience },
    { href: "#projects", label: language.Header.Projects },
  ];

  const scrollToWithLock = (targetY: number) => {
    const normalizedTargetY = Math.max(0, targetY);

    if (scrollSettleFrameRef.current !== null) {
      window.cancelAnimationFrame(scrollSettleFrameRef.current);
      scrollSettleFrameRef.current = null;
    }

    isProgrammaticScrollRef.current = true;
    window.scrollTo({ top: normalizedTargetY, behavior: "smooth" });

    const startedAt = performance.now();
    const maxDuration = 1800;

    const waitForScrollSettle = () => {
      const reachedTarget = Math.abs(window.scrollY - normalizedTargetY) < 4;
      const timedOut = performance.now() - startedAt > maxDuration;

      if (reachedTarget || timedOut) {
        isProgrammaticScrollRef.current = false;
        scrollSettleFrameRef.current = null;
        return;
      }

      scrollSettleFrameRef.current =
        window.requestAnimationFrame(waitForScrollSettle);
    };

    scrollSettleFrameRef.current =
      window.requestAnimationFrame(waitForScrollSettle);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    offset: number,
    closeMenuAfterClick = false,
  ) => {
    e.preventDefault();
    setActiveLink(href);

    if (closeMenuAfterClick) {
      setMenuOpen(false);
    }

    const id = href.replace("#", "");

    if (!id) {
      scrollToWithLock(0);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      scrollToWithLock(y);
    }
  };

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

  useEffect(() => {
    return () => {
      if (scrollSettleFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollSettleFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const sectionIds = ["about", "experience", "projects"];
    const visibleSections = new Map<string, number>();

    const updateActiveFromScroll = () => {
      if (isProgrammaticScrollRef.current) {
        return;
      }

      if (window.scrollY < 120 && visibleSections.size === 0) {
        setActiveLink("#");
        return;
      }

      if (visibleSections.size === 0) {
        return;
      }

      const [mostVisibleSectionId] = [...visibleSections.entries()].sort(
        (a, b) => b[1] - a[1],
      )[0];

      setActiveLink(`#${mostVisibleSectionId}`);
    };

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        updateActiveFromScroll();
      },
      {
        root: null,
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", updateActiveFromScroll, {
      passive: true,
    });
    updateActiveFromScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateActiveFromScroll);
    };
  }, []);

  return (
    <div className="fixed w-full flex justify-center items-center z-50">
      {/* Desktop header */}
      <header className="hidden md:flex min-w-[600px] h-[60px] mx-4 my-7 px-2 py-5 rounded-xl justify-center items-center bg-gradient-to-br from-[#04071D] to-[#0C0E23] drop-shadow-sm border-[0.1px] border-[#36374942]">
        <nav>
          <ul
            className={`${
              isEn ? "text-base" : "text-sm"
            } flex justify-center items-center text-white md:text-lg font-medium space-x-6`}
          >
            {NavLink.map((link) => (
              <li
                key={link.href}
                className="relative"
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <a
                  href={link.href}
                  className={`transition-colors duration-200 hover:text-[#CBACF9] ${
                    highlightedLink === link.href
                      ? "text-[#CBACF9]"
                      : "text-white"
                  }`}
                  onClick={(e) => handleNavClick(e, link.href, 140)}
                >
                  {link.label}
                </a>
                {highlightedLink === link.href && (
                  <motion.span
                    layoutId="active-nav-indicator-desktop"
                    className="absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-[#CBACF9]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
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
                    className="relative w-fit"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <a
                      href={link.href}
                      className={`transition-colors duration-200 hover:text-[#CBACF9] ${
                        highlightedLink === link.href
                          ? "text-[#CBACF9]"
                          : "text-white"
                      }`}
                      onClick={(e) => handleNavClick(e, link.href, 50, true)}
                    >
                      {link.label}
                    </a>
                    {highlightedLink === link.href && (
                      <motion.span
                        layoutId="active-nav-indicator-mobile"
                        className="absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-[#CBACF9]"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
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
