import { useLanguage } from "../context/LanguageContext";
import { FBIcon, GHIcon, IGIcon, LIIcon } from "./Icons";
import { motion } from "framer-motion";

const LinksVariants = {
  initial: {
    opacity: 0,
    scale: 0.5,
    y: 50,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const Links = (): JSX.Element => {
  const { language, isEn } = useLanguage();
  return (
    <div className="w-full h-full">
      <div className="w-full h-[20%]">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className={` ${
            isEn ? "font-en" : "font-ge font-semibold tracking-wide"
          } p-4 text-lg`}
        >
          {language.SocialLinks.Title}
        </motion.p>
      </div>
      <div className="w-full h-[80%] flex justify-center items-center space-x-4 p-4 overflow-hidden">
        <motion.a
          initial="initial"
          animate="animate"
          variants={LinksVariants}
          href="https://github.com/lukkshh/"
        >
          <GHIcon />
        </motion.a>
        <motion.a
          initial="initial"
          animate="animate"
          variants={LinksVariants}
          href="https://instagram.com/lukkshh"
        >
          <IGIcon />
        </motion.a>
        <motion.a
          initial="initial"
          animate="animate"
          variants={LinksVariants}
          href="https://www.facebook.com/lukkshh"
        >
          <FBIcon />
        </motion.a>
        <motion.a
          initial="initial"
          animate="animate"
          variants={LinksVariants}
          href="https://www.linkedin.com/in/lukkshh"
        >
          <LIIcon />
        </motion.a>
      </div>
    </div>
  );
};

export default Links;
