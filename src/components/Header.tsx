"use client";

import { useState, useEffect, useRef, type JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

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
  const isEn = useLocale() === "en";
  const pathname = usePathname();
  const isPortfolioPage = pathname === "/" || pathname === "/ka";
  const homePath = isEn ? "/" : "/ka";
  const t = useTranslations("Header");
  const lenis = useLenis();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const isProgrammaticScrollRef = useRef(false);
  const highlightedLink = hoveredLink ?? activeLink;

  const NavLink: NavNavLinkType = [
    { href: isPortfolioPage ? "#" : homePath, label: t("Home") },
    {
      href: isPortfolioPage ? "#about" : `${homePath}#about`,
      label: t("About"),
    },
    {
      href: isPortfolioPage ? "#experience" : `${homePath}#experience`,
      label: t("Experience"),
    },
    {
      href: isPortfolioPage ? "#projects" : `${isEn ? "" : "/ka"}/projects`,
      label: t("Projects"),
    },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    offset: number,
    closeMenuAfterClick = false,
  ) => {
    if (!isPortfolioPage || !lenis) return;
    e.preventDefault();
    setActiveLink(href);

    if (closeMenuAfterClick) {
      setMenuOpen(false);
      lenis.start();
    }

    const id = href.replace("#", "");

    if (!id) {
      lenis.scrollTo(0, {
        onStart: () => { isProgrammaticScrollRef.current = true; },
        onComplete: () => { isProgrammaticScrollRef.current = false; },
      });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      lenis.scrollTo(el, {
        offset: -offset,
        onStart: () => { isProgrammaticScrollRef.current = true; },
        onComplete: () => { isProgrammaticScrollRef.current = false; },
      });
    }
  };

  useEffect(() => {
    if (menuOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [menuOpen, lenis]);

  useEffect(() => {
    if (!isPortfolioPage) return;
    const sectionIds = ["about", "experience", "projects"];
    const visibleSections = new Map<string, number>();
    let intersectionObserver: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;
    let isScrollListening = false;

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

    const startObserving = (): boolean => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => section !== null);

      if (sections.length === 0) return false;

      intersectionObserver = new IntersectionObserver(
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

      sections.forEach((section) => intersectionObserver!.observe(section));

      if (!isScrollListening) {
        window.addEventListener("scroll", updateActiveFromScroll, {
          passive: true,
        });
        isScrollListening = true;
      }

      updateActiveFromScroll();
      return true;
    };

    if (!startObserving()) {
      // Sections not in DOM yet (lazy-loaded) — wait for them
      mutationObserver = new MutationObserver(() => {
        if (startObserving()) {
          mutationObserver?.disconnect();
          mutationObserver = null;
        }
      });
      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      mutationObserver?.disconnect();
      intersectionObserver?.disconnect();
      if (isScrollListening) {
        window.removeEventListener("scroll", updateActiveFromScroll);
      }
    };
  }, [isPortfolioPage]);

  return (
    <div className="fixed z-50 flex w-full justify-center px-4">
      {/* Desktop header */}
      <header className="my-7 hidden h-[60px] w-full max-w-[1280px] items-center rounded-xl border-[0.1px] border-[#36374942] bg-gradient-to-br from-[#04071D] to-[#0C0E23] px-6 drop-shadow-sm md:flex">
        <a href={homePath} className="shrink-0 text-sm font-semibold text-white lg:text-base">
          Luka Shvelidze
        </a>
        <nav className="flex-1">
          <ul
            className={`${
              isEn ? "text-base" : "text-sm"
            } flex items-center justify-center gap-4 whitespace-nowrap font-medium text-white lg:gap-8`}
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
                  onClick={(e) =>
                    handleNavClick(
                      e,
                      link.href,
                      link.href === "#experience" || link.href === "#projects" ? 160 : 140,
                    )
                  }
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
          </ul>
        </nav>
        <div className="shrink-0">
          <LanguageButton />
        </div>
      </header>

      {/* Mobile header */}
      <header className="z-[1000] my-4 flex w-full items-center gap-4 rounded-xl border-[0.1px] border-[#36374942] bg-gradient-to-br from-[#04071D] to-[#0C0E23] px-4 py-3 drop-shadow-sm md:hidden">
        <a
          href={homePath}
          className="mr-auto text-sm font-semibold text-white"
          aria-label="Luka Shvelidze — home"
        >
          Luka Shvelidze
        </a>
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
                      onClick={(e) =>
                        handleNavClick(
                          e,
                          link.href,
                          link.href === "#experience" || link.href === "#projects" ? 90 : 50,
                          true,
                        )
                      }
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
