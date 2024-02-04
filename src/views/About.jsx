import { LanguageContext } from "../store/LanguageProvider";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import { useContext, useEffect, useState } from "react";

const About = () => {
  const { lang } = useContext(LanguageContext);
  const [TagRadius, setTagRadius] = useState(250);

  useEffect(() => {
    if (window.innerWidth < 700) {
      setTagRadius(150);
    }
  }, []);

  return (
    <section id="about" className="w-full h-screen flex flex-col">
      <div className="w-full h-24"></div>
      <div className="w-full h-full flex items-center max-md:flex-col">
        <div className="w-1/2 max-md:w-full">
          <p
            data-aos="fade-right"
            className="black-ops text-5xl text-white ml-10 max-md:ml-4"
          >
            {lang.About.Header}
          </p>
          <p
            data-aos="fade-right"
            className="text-white text-lg ml-10 w-3/4 mt-2 max-md:w-full max-md:ml-0 max-md:p-4"
          >
            {lang.About.Main}
          </p>
        </div>
        <div
          data-aos="zoom-in"
          className="w-1/2 h-full flex items-center justify-center"
        >
          <TagCloud
            className="text-white text-2xl black-ops max-md:text-lg"
            onClickOptions={{ passive: true }}
            options={{
              radius: TagRadius,
            }}
          >
            {[
              "C++",
              "Javascript",
              "Php",
              "React",
              "Python",
              "Tailwindcss",
              "Mysql",
              "Jquery",
              "Vscode",
              "Git",
              "Linux",
            ]}
          </TagCloud>
        </div>
      </div>
    </section>
  );
};

export default About;
