import { useEffect, useState } from "react";
import Card, { CardDataType } from "../components/Projects/Card";
import { useLanguage } from "../context/LanguageContext";

import parser from "html-react-parser";
import Button from "../components/Button";

const Projects = () => {
  const [projects, setProjects] = useState<Array<CardDataType>>([]);
  const [visibleCount, setVisibleCount] = useState<number>(4);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const { isEn, language } = useLanguage();

  useEffect(() => {
    fetch("/projects-data.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Oops! Error fetching data");
        setLoading(false);
      });
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <section
      id="projects"
      className={` ${
        isEn ? "font-en" : "font-ge"
      } w-full flex mb-10 justify-center items-center text-white max-lg:p-2`}
    >
      {loading ? (
        <div className="w-full h-[92vh] flex justify-center items-center">
          <span className="loader"></span>
        </div>
      ) : error ? (
        <p className="text-xl mt-12">{error}</p>
      ) : (
        <div className="flex flex-col justify-center items-center w-full space-y-8 mt-10">
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
                className={` ${
                  isEn ? "font-en" : "font-ge"
                } min-w-[160px] min-h-[55px] font-bold`}
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
