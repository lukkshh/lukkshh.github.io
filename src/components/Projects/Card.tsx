import { motion } from "framer-motion";
import parse from "html-react-parser";

export type CardDataType = {
  img: string;
  title: string;
  description: string;
  ghLink: string;
  webLink: string;
  badges: string[];
};

interface CardProps {
  data: CardDataType;
}

export default function Card({ data }: CardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="font-en md:max-h-[620px] drop-shadow-sm border-[0.1px] border-[#36374942] px-3 md:px-6 py-5 md:py-9  rounded-3xl bg-gradient-to-bl from-[#0C0E23] to-[#04071D] "
    >
      <div className=" h-[150px] md:h-[240px] lg:min-w-[552px] lg:min-h-[330px] bg-[url(/images/card_img_background.svg)] drop-shadow-sm flex justify-center items-end  rounded-xl overflow-hidden bg-[#13162D]">
        <img
          className="w-[240px] md:w-[330px] md:h-[240px] lg:w-[450px] lg:h-[320px] rotate-2 translate-y-8 rounded-lg object-cover"
          src={data.img}
          alt=""
        />
      </div>
      <p className=" mt-5 md:mt-9 text-xl md:text-3xl max-w-[552px] font-bold text-white">
        {parse(data.title)}
      </p>
      <p className="mt-2 line-clamp-2 md:mt-4 text-sm md:text-xl max-w-[552px] text-[#BEC1DD]">
        {data.description}
      </p>
      <div className="mt-4 md:mt-6 max-w-[552px] flex justify-between items-center">
        <div className="max-w-[60%]">
          {data.badges.map((badge, index) => (
            <span
              key={index}
              className="inline-block bg-[#1E2139] text-xs md:text-sm text-[#7A7F9E] px-3 py-1 rounded-full mr-2 mb-2"
            >
              {badge}
            </span>
          ))}
        </div>
        <div className="flex flex-col text-xs md:text-base">
          {data.ghLink && (
            <a
              href={data.ghLink}
              target="_blank"
              className="text-[#CBACF9] mr-6 hover:underline"
            >
              GitHub Repository Link <span className="text-xl"> &#x2197;</span>
            </a>
          )}

          {data.webLink && (
            <a
              href={data.webLink}
              target="_blank"
              className="text-[#CBACF9] hover:underline"
            >
              Check Live Demo <span className="text-xl"> &#x2197;</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
