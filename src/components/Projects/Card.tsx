import { motion } from "framer-motion";
import parse from "html-react-parser";
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
      className="h-full"
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
          <div className="relative h-[150px] md:h-[240px] lg:min-w-[552px] lg:min-h-[330px] drop-shadow-sm">
            <div className="flex h-full items-end justify-center overflow-hidden rounded-xl bg-[#13162D] bg-[url(/images/card_img_background.svg)]">
              <img
                className="w-[240px] md:w-[330px] md:h-[240px] lg:w-[450px] lg:h-[320px] rotate-2 translate-y-8 rounded-lg object-cover"
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
          <p className="mt-2 line-clamp-2 md:mt-4 text-sm md:text-xl max-w-[552px] text-[#BEC1DD]">
            {data.description}
          </p>
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
                  className="text-[#CBACF9] mr-6 hover:underline"
                >
                  GitHub Repository Link{" "}
                  <span className="text-xl"> &#x2197;</span>
                </a>
              )}

              {data.webLink && (
                <a
                  href={data.webLink}
                  target="_blank"
                  className="text-[#CBACF9] hover:underline"
                >
                  Check Live Demo <span className="text-xl"> &#x2197;</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </BorderGlow>
    </motion.div>
  );
}
