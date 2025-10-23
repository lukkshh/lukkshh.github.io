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

import { motion } from "framer-motion";

export default function TechIconsCard() {
  return (
    <div className="rounded-xl bg-[url(/images/about-bg.svg)] flex justify-center items-center md:col-span-2 border-[0.1px] border-[#6971a265] bg-[#04071D]">
      <motion.div
        variants={{
          showTech: {
            transition: { staggerChildren: 0.2, delayChildren: 0.4 },
          },
        }}
        initial="hidden"
        whileInView="showTech"
        viewport={{ once: true }}
        className="grid grid-cols-6 grid-rows-2 place-items-center gap-2 w-full h-full p-4"
      >
        <LaravelIcon />
        <ReactIcon />
        <JavascriptIcon />
        <TypescriptIcon />
        <TailwindIcon />
        <GitIcon />
        <MySqlIcon />
        <NginxIcon />
        <VsCodeIcon />
        <PythonIcon />
        <FlaskIcon />
        <FramerMotionIcon />
      </motion.div>
    </div>
  );
}
