import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

const About = (): JSX.Element => {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.8, ease: "easeInOut" }}
      className="w-full h-full"
    >
      <p className="pl-4 pt-4 pb-2 text-xl text-white max-sm:p-4 max-sm:text-lg max-md:text-base">
        {language.About.Title}
      </p>
      <p className="pl-4 pr-4 text-gray-400 max-sm:hidden max-md:text-xs">
        {language.About.Text}
      </p>
    </motion.div>
  );
};

export default About;
