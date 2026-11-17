import { useEffect, useState } from "react";
import Card, { ExperienceData } from "../components/Experience/Card";
import parse from "html-react-parser";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Experience() {
  const t = useTranslations("Experience");
  const [experiences, setExperiences] = useState<ExperienceData[]>([]);

  useEffect(() => {
    fetch("/experience-data.json")
      .then((res) => res.json())
      .then((data: ExperienceData[]) => setExperiences(data))
      .catch(() => setExperiences([]));
  }, []);

  return (
    <section
      id="experience"
      className="flex flex-col gap-8 md:gap-14 justify-center items-center px-4 scroll-mt-[90px] md:scroll-mt-[160px]"
    >
      <div>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl sm:text-4xl md:text-[48px] font-bold text-[#FFFFFF] text-center"
        >
          {parse(t.raw("Headline") as string)}
        </motion.p>
      </div>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full max-w-[1280px]">
        {experiences.map((exp, index) => (
          <Card key={index} {...exp} />
        ))}
      </main>
    </section>
  );
}
