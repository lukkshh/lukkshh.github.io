import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

const About = (): JSX.Element => {
  const { language, isEn } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.8, ease: "easeInOut" }}
      className="w-full h-full"
    >
      <p
        className={`${
          isEn ? "font-en" : "font-ge"
        } pl-4 pt-4 pb-2 text-3xl text-white max-2xl:text-base max-sm:p-4 max-sm:text-lg max-md:text-base`}
      >
        {language.About.Title}
      </p>
      <p
        className={` ${
          isEn ? "font-en" : "font-ge"
        } pl-4 pr-4 text-2xl text-gray-400 max-xl:text-sm max-2xl:text-base  max-sm:hidden max-md:text-xs`}
      >
        {language.About.Text}
      </p>
    </motion.div>
  );
};

export default About;
