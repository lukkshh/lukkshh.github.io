import { useState, useEffect } from "react";
import Card, { CardDataType } from "../components/Projects/Card";
import { useLanguage } from "../context/LanguageContext";

import parser from "html-react-parser";
import Button from "../components/Button";

const Projects = () => {
  const [projects, setProjects] = useState<CardDataType[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(4);

  const { language } = useLanguage();

  useEffect(() => {
    fetch("/projects-data.json")
      .then((res) => res.json())
      .then((data: CardDataType[]) => setProjects(data))
      .catch(() => setProjects([]));
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <section
      id="projects"
      className="w-full flex justify-center items-center text-white px-4"
    >
      {projects.length === 0 ? (
        <p className="text-xl mt-12">Oops! Error fetching data</p>
      ) : (
        <div className="flex flex-col justify-center items-center w-full space-y-8">
          <div className="flex justify-center items-center w-full">
            <p className="font-bold text-xl  md:text-5xl">
              {parser(language.Projects.Title)}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-16">
            {projects.slice(0, visibleCount).map((project, index) => (
              <Card key={index} data={project} />
            ))}
          </div>
          <div>
            {visibleCount < projects.length && (
              <Button
                onClick={handleShowMore}
                className="min-w-[160px] min-h-[55px] font-bold"
              >
                {language.Projects.ShowMore}
              </Button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
