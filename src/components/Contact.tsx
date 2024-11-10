import { PinIcon, EmailIcon, CvIcon } from "./Icons";
import { motion } from "framer-motion";

const Contact = (): JSX.Element => {
  return (
    <div className="w-full h-full flex flex-col p-4 space-y-2 text-base max-sm:p-3">
      <p className="flex items-center space-x-1">
        <PinIcon />{" "}
        <motion.span
          className="font-en"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        >
          Tbilisi, Georgia
        </motion.span>
      </p>
      <p className="flex items-center space-x-1">
        <EmailIcon />{" "}
        <motion.span
          className="font-en"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        >
          lukkshh.dev@gmail.com
        </motion.span>
      </p>
      <div className="w-full h-1/2 flex justify-center items-center">
        <a
          href=""
          className="flex bg-zinc-800 space-x-2 rounded-3xl pl-6 pr-6 pt-4 pb-4 justify-center items-center max-sm:p-2 max-sm:pr-4 max-sm:pl-4"
        >
          <span className="font-en">Download CV </span>
          <CvIcon />
        </a>
      </div>
    </div>
  );
};

export default Contact;
