import { motion } from "framer-motion";
import parse from "html-react-parser";
import { useEffect, useRef, useState } from "react";
import BorderGlow from "../BorderGlow";

export type CardDataType = {
  img: string;
  title: string;
  description: string;
  ghLink?: string;
  webLink?: string;
  badges: string[];
  projectType: "personal" | "freelance" | "company";
};

interface CardProps {
  data: CardDataType;
}

export default function Card({ data }: CardProps) {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isDescriptionOpen) return;

    const closeDescription = () => setIsDescriptionOpen(false);
    const closeOnOutsidePress = (event: PointerEvent) => {
      if (!descriptionRef.current?.contains(event.target as Node)) {
        closeDescription();
      }
    };

    window.addEventListener("scroll", closeDescription, {
      passive: true,
      capture: true,
    });
    document.addEventListener("pointerdown", closeOnOutsidePress);

    return () => {
      window.removeEventListener("scroll", closeDescription, true);
      document.removeEventListener("pointerdown", closeOnOutsidePress);
    };
  }, [isDescriptionOpen]);

  const projectTypeStyles = {
    personal: {
      label: "Personal project",
    },
    freelance: {
      label: "Freelance",
    },
    company: {
      label: "Professional",
    },
  } as const;

  const projectType = projectTypeStyles[data.projectType];

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="h-full min-w-0"
    >
      <BorderGlow
        className="h-full"
        edgeSensitivity={20}
        glowColor="200 95 72"
        backgroundColor="#060010"
        borderRadius={28}
        glowRadius={50}
        glowIntensity={1.5}
        coneSpread={25}
        animated={false}
        colors={["#06b6d4", "#3b82f6", "#6366f1"]}
      >
        <div className="font-en h-full drop-shadow-sm border-[0.1px] border-[#36374942] px-3 md:px-6 py-5 md:py-9 rounded-3xl bg-gradient-to-bl from-[#0C0E23] to-[#04071D]">
          <div className="relative h-[150px] md:h-[240px] lg:h-[330px] w-full min-w-0 drop-shadow-sm">
            <div className="flex h-full items-end justify-center overflow-hidden rounded-xl bg-[#13162D] bg-[url(/images/card_img_background.svg)]">
              <img
                className="h-[145px] w-[80%] max-w-[450px] rotate-2 translate-y-8 rounded-lg object-cover md:h-[230px] lg:h-[300px]"
                src={data.img}
                loading="lazy"
                alt={data.title}
              />
            </div>
            <span className="absolute -bottom-3 left-3 z-10 inline-flex items-center rounded-full border border-[#34384F] bg-[#0B0E20] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[#D9DBE8] shadow-md md:left-4 md:text-[11px]">
              {projectType.label}
            </span>
          </div>
          <div className="mt-7 text-xl md:mt-11 md:text-3xl max-w-[552px] font-bold text-white">
            {parse(data.title)}
          </div>
          <div
            ref={descriptionRef}
            className="group/description relative mt-2 max-w-[552px] md:mt-4"
            tabIndex={0}
            role="button"
            aria-expanded={isDescriptionOpen}
            aria-label="Show full project description"
            onClick={() => setIsDescriptionOpen((isOpen) => !isOpen)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setIsDescriptionOpen((isOpen) => !isOpen);
              }
            }}
          >
            <p className="line-clamp-2 text-sm text-[#BEC1DD] md:text-xl">
              {data.description}
            </p>
            <p
              aria-hidden="true"
              className={`pointer-events-none absolute -left-2 -top-2 z-20 w-[calc(100%+1rem)] rounded-xl border border-[#34384F] bg-[#0B0E20] p-3 text-sm leading-relaxed text-[#D9DBE8] shadow-xl transition-[opacity,transform,visibility] duration-200 ease-out md:invisible md:translate-y-1 md:scale-[0.98] md:opacity-0 md:group-hover/description:visible md:group-hover/description:translate-y-0 md:group-hover/description:scale-100 md:group-hover/description:opacity-100 md:text-base ${
                isDescriptionOpen
                  ? "visible translate-y-0 scale-100 opacity-100 md:!visible md:!translate-y-0 md:!scale-100 md:!opacity-100"
                  : "invisible translate-y-1 scale-[0.98] opacity-0"
              }`}
            >
              {data.description}
            </p>
          </div>
          <div className="mt-4 md:mt-6 max-w-[552px] flex justify-between items-center">
            <div className="max-w-[60%]">
              {data.badges.map((badge, index) => (
                <span
                  key={index}
                  className="inline-block bg-[#1E2139] text-xs md:text-sm text-[#7A7F9E] px-3 py-1 rounded-full mr-2 mb-2"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="flex flex-col text-xs md:text-base">
              {data.ghLink && (
                <a
                  href={data.ghLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-6 inline-flex items-center gap-2 text-[#CBACF9] transition-colors hover:text-white"
                >
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 .7A11.3 11.3 0 0 0 8.4 22.8c.6.1.8-.3.8-.6v-2.4c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.9 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.3 11.3 0 0 0 12 .7Z" />
                  </svg>
                  View Source
                  <span aria-hidden="true">↗</span>
                </a>
              )}

              {data.webLink && (
                <a
                  href={data.webLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#CBACF9] transition-colors hover:text-white"
                >
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18M12 3c2.3 2.5 3.5 5.5 3.5 9S14.3 18.5 12 21c-2.3-2.5-3.5-5.5-3.5-9S9.7 5.5 12 3Z" />
                  </svg>
                  View Live Site
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </BorderGlow>
    </motion.div>
  );
}
