import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

const Education = (): JSX.Element => {
  const { language, isEn } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.8, ease: "easeInOut" }}
      className="w-full h-full flex flex-col"
    >
      <div className="w-full h-[10%] pl-4 pt-2 max-sm:pl-3">
        <p
          className={`${
            isEn ? "font-en" : "font-ge font-semibold tracking-wide"
          } mt-2 text-2xl max-sm:text-xl max-md:text-xl`}
        >
          {language.Education.Title}
        </p>
      </div>
      <div className="w-full mt-2">
        {language.Education.Data.map((item, index) => (
          <div key={index} className="w-full p-2 space-y-1">
            <p
              className={`${
                isEn ? "font-en" : "font-ge"
              } text-xl text-gray-100 max-sm:text-lg max-md:text-base`}
            >
              {item.Title}
            </p>
            <p
              className={` ${
                isEn ? "font-en" : "font-ge"
              } text-base text-gray-300 max-md:text-xs`}
            >
              {item.SubTitle}
            </p>
            <p className="text-sm text-gray-400 max-sm:text-xs max-md:text-xs">
              {item.Date}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full h-[10%] pl-4 pt-2 max-sm:pl-3 max-sm:pr-3">
        <p
          className={` ${
            isEn ? "font-en" : "font-ge font-semibold tracking-wide"
          } text-2xl max-sm:text-lg max-md:text-lg`}
        >
          {language.Certificates.Title}
        </p>
      </div>
      <div className="w-full mt-2">
        {language.Certificates.Data.map((item, index) => (
          <div key={index} className="w-full p-2 space-y-1">
            <p className="text-lg text-gray-100 max-sm:text-base max-md:text-xs">
              {item.Title}
            </p>
            <a
              href={item.Link}
              className="text-sm underline text-gray-300 hover:text-gray-200 transition-colors max-sm:text-xs"
            >
              {item.SubTitle}
            </a>
            <p className="text-sm text-gray-400 ">{item.Date}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
