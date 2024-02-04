import { LanguageContext } from "../store/LanguageProvider";
import { TypeAnimation } from "react-type-animation";
import Socials from "../components/Socials";
import Luka from "../components/Luka";
import { useContext } from "react";
import "aos/dist/aos.css";

const Home = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <section
      id="home"
      className="text-white w-full h-screen main-bg flex justify-center items-center overflow-hidden max-md:flex-col"
    >
      <Luka />
      <div
        data-aos="fade-up-left"
        data-aos-duration="1000"
        className="w-1/2 h-full flex flex-col justify-center max-md:w-full"
      >
        <TypeAnimation
          className="black-ops max-md:h-[7rem] max-md:p-4"
          sequence={[
            "Hello 👋 I'm Luka Shvelidze",
            900,
            "Hello 👋 I'm Software Engineer",
            900,
            "Hello 👋 I'm Programing Enthusiast",
            900,
            "Hello 👋 I'm Full Stack Developer",
            900,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
        <p className="w-10/12 mt-6 text-lg max-md:p-4 max-md:w-full">
          {lang.Home}
        </p>
        <Socials />
      </div>
    </section>
  );
};

export default Home;
