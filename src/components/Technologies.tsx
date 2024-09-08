import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import {
  GitIcon,
  ReactIcon,
  MySqlIcon,
  NginxIcon,
  VsCodeIcon,
  PythonIcon,
  LaravelIcon,
  TailwindIcon,
  JavascriptIcon,
  TypescriptIcon,
  FlaskIcon,
  FramerMotionIcon,
} from "./Icons";

const Technologies = (): JSX.Element => {
  const { language } = useLanguage();

  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <div className="h-[10%] p-4 capitalize">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="text-base max-sm:text-sm max-md:text-xs"
        >
          {language.Technologies.Title}
        </motion.p>
      </div>
      <motion.div
        variants={{
          showTech: { transition: { staggerChildren: 0.15 } },
        }}
        initial="hidden"
        animate="showTech"
        className="h-[90%] p-4 flex justify-around items-center flex-wrap max-sm:pt-6 max-sm:pl-2 max-sm:pr-2 max-sm:pb-0"
      >
        <ReactIcon />
        <LaravelIcon />
        <PythonIcon />
        <TypescriptIcon />
        <JavascriptIcon />
        <FlaskIcon />
        <FramerMotionIcon />
        <TailwindIcon />
        <GitIcon />
        <VsCodeIcon />
        <NginxIcon />
        <MySqlIcon />
      </motion.div>
    </div>
  );
};

export default Technologies;
