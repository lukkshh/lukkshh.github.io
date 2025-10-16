import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const Language = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      }}
      className={`${className} bg-[#161A31] uppercase border-[0.1px] border-[#6971a265] p-2 absolute rounded-xl font-en`}
    >
      {children}
    </motion.div>
  );
};

export default function LanguageCard() {
  const { isEn, language } = useLanguage();

  return (
    <motion.div
      variants={{
        visible: { transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`${
        isEn ? "" : "max-w-[622px]"
      } min-h-[195px] md:min-h-[255px] border-[0.1px] border-[#6971a265] rounded-xl bg-[#04071D] relative text-white`}
    >
      <img
        className="w-full max-h-[135px] absolute bottom-0"
        src="/images/map.svg"
        alt="globe_map"
      />
      <p
        className={` ${
          isEn ? "font-en" : "font-ge max-w-[75%]"
        } font-bold text-xl px-[24px] py-[30px]`}
      >
        {language.About.LanguageCard.Title}
      </p>

      {language.About.LanguageCard.Languages.map((lang, index) => (
        <Language
          key={index}
          className={`${
            index === 0
              ? "left-5 md:left-3 scale-75 md:scale-100 lg:left-12 md:translate-y-4"
              : index === 1
              ? "left-1/2 scale-75 md:scale-100 bottom-5 md:bottom-8 -translate-x-1/2"
              : "right-5 md:right-3 scale-75 md:scale-100 lg:right-12 md:translate-y-4"
          }`}
        >
          {lang}
        </Language>
      ))}
    </motion.div>
  );
}
