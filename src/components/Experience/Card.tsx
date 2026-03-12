import parse from "html-react-parser";
import { motion } from "framer-motion";

export interface ExperienceData {
  title: string;
  description: string;
  company: { name: string; url: string; type: string };
  img: string;
}

export default function Card({
  title,
  description,
  company,
  img,
}: ExperienceData) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full xl:max-w-[600px] min-h-[190px] drop-shadow-sm border-[0.1px] border-[#36374942] px-3 md:px-6 py-5 md:py-9 rounded-3xl bg-gradient-to-bl from-[#0C0E23] to-[#04071D] flex flex-col sm:flex-row items-start gap-4 sm:gap-8"
    >
      <div className="grid place-items-center shrink-0">
        <img
          className="w-16 h-16 sm:w-[94px] sm:h-[94px] max-w-[unset]"
          src={img}
          alt={title}
        />
      </div>
      <div className="flex flex-col">
        <p className="text-[#ffffff] font-en font-bold text-lg sm:text-[26px]">
          {title}
        </p>
        <a
          href={company.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#BEC1DD] font-en font-medium text-[16px]"
        >
          <span className="underline">{company.name}</span> - {company.type}
        </a>
        <p className="text-[#BEC1DD] mt-2 font-en font-medium text-[14px] [&>span]:text-[#CBACF9]">
          {parse(description)}
        </p>
      </div>
    </motion.article>
  );
}
