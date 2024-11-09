import { ProjectData } from "../components/ProjectCard";
import ProjectCard from "../components/ProjectCard";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState<Array<ProjectData>>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

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

  return (
    <section className="w-full flex  justify-center items-center text-white max-lg:p-2">
      {loading ? (
        <div className="w-full h-[92vh] flex justify-center items-center">
          <span className="loader"></span>
        </div>
      ) : error ? (
        <p className="text-xl mt-12">{error}</p>
      ) : (
        <div className="grid grid-cols-3 gap-16 mt-12 mb-12 max-2xl:gap-8 max-sm:gap-6 max-sm:mt-6 max-sm:grid-cols-1 max-lg:grid-cols-2 ">
          {projects.map((project, index) => (
            <ProjectCard key={index} data={project} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
