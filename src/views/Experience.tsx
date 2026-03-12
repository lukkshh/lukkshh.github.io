import { useEffect, useState } from "react";
import Card, { ExperienceData } from "../components/Experience/Card";
import { useLanguage } from "../context/LanguageContext";
import parse from "html-react-parser";

export default function Experience() {
  const [experiences, setExperiences] = useState<ExperienceData[]>([]);
  const { language } = useLanguage();

  useEffect(() => {
    fetch("/experience-data.json")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => setExperiences(data))
      .catch((err) => console.error("Error fetching experience data:", err));
  }, []);

  return (
    <section id="experience" className="flex flex-col gap-8 md:gap-14 justify-center items-center px-4">
      <div>
        <p className="text-2xl sm:text-4xl md:text-[48px] font-bold text-[#FFFFFF] text-center">
          {parse(language.Experience.Headline)}
        </p>
      </div>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full max-w-[1280px]">
        {experiences.map((exp, index) => (
          <Card key={index} {...exp} />
        ))}
      </main>
    </section>
  );
}
