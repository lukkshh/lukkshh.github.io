import { LanguageContext } from "../store/LanguageProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useState, useEffect, useRef, useContext } from "react";
import { GitHub } from "@mui/icons-material";
import "swiper/css/pagination";
import "swiper/css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const { eng, lang } = useContext(LanguageContext);
  const projectsRef = useRef(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const resp = await fetch("/data/projects.json");
      const data = await resp.json();

      if (eng) {
        setProjects(data.eng);
      } else {
        setProjects(data.geo);
      }

      setLoading(false);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetchProjects();
          observer.unobserve(projectsRef.current);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, [eng]);

  return (
    <section
      ref={projectsRef}
      id="projects"
      className="w-full h-[80vh] flex justify-center items-center flex-col"
    >
      <div className="w-full h-[25%] flex items-center">
        <p
          data-aos="fade-right"
          className="text-white black-ops text-5xl mt-4 ml-6"
        >
          {lang.Projects}
        </p>
      </div>
      {loading ? (
        <div className="w-[85%] h-[60%] flex justify-center items-center ">
          <span className="loader"></span>
        </div>
      ) : (
        <Swiper
          className="w-[85%] h-[60%] mt-4"
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
        >
          {projects.map((project, index) => (
            <SwiperSlide className="bg-zinc-800 rounded-3xl" key={index}>
              <div className="w-full h-20 text-2xl text-center flex justify-center items-center black-ops text-white">
                {project.header}
              </div>
              <div className="ml-4 w-full h-12 text-xl text-white flex items-center">
                Stack: {project.stack}
              </div>
              <div className="ml-4 mt-2 flex items-center text-white hover:underline">
                <a href={project.link}>
                  Source Code <GitHub fontSize="small" />
                </a>
              </div>
              <div className="mt-4 text-white">
                <p className="p-4">{project.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default Projects;
