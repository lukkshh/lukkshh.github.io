import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const Tech = ({
  children,
  className,
}: {
  children?: string;
  className?: string;
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      className={`${className} min-w-[105px] min-h-[55px] md:min-w-[140px] md:min-h-[75px] text-xs md:text-base flex justify-center items-center  bg-[#10132E] p-2 rounded-md font-en`}
    >
      {children}
    </motion.div>
  );
};

export default function TechStackCard() {
  const { isEn, language } = useLanguage();
  return (
    <motion.div
      variants={{
        visible: { transition: { staggerChildren: 0.2, delayChildren: 0.4 } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`${
        isEn ? "" : "max-w-[622px]"
      } max-h-[195px] md:min-h-[255px] overflow-hidden flex items-center justify-between rounded-xl border-[0.1px] border-[#6971a265] bg-[#04071D] relative text-white`}
    >
      <p
        className={` ${
          isEn ? "font-en text-3xl" : "font-ge text-xl"
        } font-bold ml-5`}
      >
        {language.About.TechStackCard.Title}
      </p>
      <div className="flex justify-center items-center mr-1 md:mr-2 space-x-2">
        <div className="flex flex-col h-full space-y-2">
          <Tech className="translate-y-5">ReactJS</Tech>
          <Tech className="translate-y-5">Laravel</Tech>
          <Tech className="translate-y-5">PHP</Tech>
          <Tech className="translate-y-5"></Tech>
        </div>
        <div className="flex flex-col h-full  space-y-2">
          <Tech className="-translate-y-4"></Tech>
          <Tech className="-translate-y-4">TypeScript</Tech>
          <Tech className="-translate-y-4">MySQL</Tech>
          <Tech className="-translate-y-4">TailwindCSS</Tech>
        </div>
      </div>
    </motion.div>
  );
}
