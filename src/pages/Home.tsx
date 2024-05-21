import { GitHub, Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { TypeAnimation } from "react-type-animation";
import "../style/Home.css";

const Home = () => {
  return (
    <section className="bcl bt w-full h-screen flex flex-col justify-center items-center max-md:items-end ">
      <div className="text-white absolute left-2 mt-6 flex space-y-4 flex-col max-md:flex-row max-md:space-y-0 max-md:space-x-4 max-md:top-0 max-md:left-1/2 max-md:-translate-x-1/2">
        <a
          href="https://github.com/lukkshh/"
          className="hhhh transition-all"
          target="_blank"
        >
          <GitHub fontSize="large" />
        </a>
        <a
          href="https://instagram.com/lukkshh"
          className="hhhh transition-all"
          target="_blank"
        >
          <Instagram fontSize="large" />
        </a>
        <a
          href="https://www.facebook.com/lukkshh"
          className="hhhh transition-all"
          target="_blank"
        >
          <Facebook fontSize="large" />
        </a>
        <a
          href="https://www.linkedin.com/in/lukkshh"
          className="hhhh transition-all"
          target="_blank"
        >
          <LinkedIn fontSize="large" />
        </a>
      </div>
      <div className="text-slate-50 w-1/2 max-md:w-11/12 flex flex-col justify-center items-center">
        <div className="w-full max-md:p-4">
          <TypeAnimation
            className="max-md:min-h-[7.5rem]"
            sequence={[
              "Hello👋 I'm Luka Shvelidze",
              1000,
              "Hello👋 I'm Luka - Software Engineer",
              1000,
              "Hello👋 I'm Luka - Programing Enthusiast",
              1000,
            ]}
            wrapper="p"
            speed={50}
            style={{ fontSize: "2.5em" }}
            repeat={Infinity}
          />
        </div>
        <div className="w-full mt-6 text-lg text-focus-in text-slate-400 max-md:p-4">
          <p>
            I'm a junior, self-taught full-stack web developer with a passion
            for crafting immersive digital experiences. With two years of
            hands-on coding experience, I have mastered several programming
            languages. My journey in web development has honed my
            problem-solving skills, enabling me to tackle complex challenges
            efficiently.
          </p>
        </div>
        <a href="#about" className="cbtn w-1/3 h-12 mt-16 max-md:w-1/2">
          Let's Begin
        </a>
      </div>
    </section>
  );
};

export default Home;
