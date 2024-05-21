import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import "../style/About.css";

const About = () => {
  return (
    <section
      id="about"
      className="bcl ab w-full h-screen flex justify-center items-center flex-col"
    >
      <div className="w-full h-[60%] flex justify-center items-center max-md:h-full max-md:flex-col">
        <div className="w-1/2 h-full flex justify-center items-center max-md:w-full max-md:h-1/2">
          <p className="text-slate-300 p-8 text-lg" data-aos="fade-right">
            With two years of experience in coding, I have mastered{" "}
            <span className="mmm">PHP</span>,{" "}
            <span className="mmm">Python</span>, and{" "}
            <span className="mmm">JavaScript</span>, continually learning new
            technologies every day. I have worked with frameworks such as{" "}
            <span className="mmm">Laravel</span> and{" "}
            <span className="mmm">Flask</span>, and I have experience using{" "}
            <span className="mmm">React</span> and{" "}
            <span className="mmm">MySQL</span> for database management. I speak
            three languages: Georgian (native), English (upper intermediate),
            and Russian (basic).
          </p>
        </div>
        <div
          className="w-1/2 h-full flex justify-center items-center max-md:w-full max-md:h-1/2"
          data-aos="zoom-in"
        >
          <TagCloud
            className="text-white mmmm"
            options={(w: Window & typeof globalThis): TagCloudOptions => ({
              radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
              maxSpeed: "fast",
            })}
            onClickOptions={{ passive: true }}
          >
            {[
              "C++",
              "Javascript",
              "Php",
              "Laravel",
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
      <div className="w-full h-[30%] flex flex-col justify-center items-center max-md:hidden">
        <p className="w-full text-center text-white uppercase tracking-wider font-bold text-xl pb-6">
          Tchnologies i have worked with
        </p>
        <Swiper
          className="w-[95%] h-full mb-2"
          spaceBetween={30}
          slidesPerView={7}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide className="bgc rounded-3xl h-full w-[40%] flex justify-center items-center flex-col space-y-2">
            <p className="text-white text-lg font-bold">SwiperJS</p>
            <img
              className="w-1/2 h-1/2 object-contain"
              src="/images/swiper.svg"
              alt="swiperjs"
            />
          </SwiperSlide>
          <SwiperSlide className="bgc rounded-3xl h-full w-[40%]  flex justify-center items-center flex-col space-y-2">
            <p className="text-white text-lg font-bold">TailwindCSS</p>
            <img
              className="w-1/2 h-1/2 object-contain"
              src="/images/tailwind.png"
              alt="tailwindcss"
            />
          </SwiperSlide>
          <SwiperSlide className="bgc rounded-3xl h-full w-[40%]  flex justify-center items-center flex-col space-y-2">
            <p className="text-white text-lg font-bold">Nginx</p>
            <img
              className="w-1/2 h-1/2 object-contain"
              src="/images/nginx.webp"
              alt="nginx"
            />
          </SwiperSlide>
          <SwiperSlide className="bgc rounded-3xl h-full w-[40%]  flex justify-center items-center flex-col space-y-2">
            <p className="text-white text-lg font-bold">Laravel</p>
            <img
              className="w-1/2 h-1/2 object-contain"
              src="/images/laravel.png"
              alt="Laravel"
            />
          </SwiperSlide>
          <SwiperSlide className="bgc rounded-3xl h-full w-[40%]  flex justify-center items-center flex-col space-y-2">
            <p className="text-white text-lg font-bold">Flask</p>
            <img
              className="w-1/2 h-1/2 object-contain"
              src="/images/flask.png"
              alt="Flask"
            />
          </SwiperSlide>
          <SwiperSlide className="bgc rounded-3xl h-full w-[40%]  flex justify-center items-center flex-col space-y-2">
            <p className="text-white text-lg font-bold">Git</p>
            <img
              className="w-1/2 h-1/2 object-contain"
              src="/images/git.png"
              alt="git"
            />
          </SwiperSlide>
          <SwiperSlide className="bgc rounded-3xl h-full w-[40%]  flex justify-center items-center flex-col space-y-2">
            <p className="text-white text-lg font-bold">MySQL</p>
            <img
              className="w-1/2 h-1/2 object-contain"
              src="/images/mysql.png"
              alt="mysql"
            />
          </SwiperSlide>
          <SwiperSlide className="bgc rounded-3xl h-full w-[40%]  flex justify-center items-center flex-col space-y-2">
            <p className="text-white text-lg font-bold">React</p>
            <img
              className="w-1/2 h-1/2 object-contain"
              src="/images/react.png"
              alt="React"
            />
          </SwiperSlide>
          <SwiperSlide className="bgc rounded-3xl h-full w-[40%]  flex justify-center items-center flex-col space-y-2">
            <p className="text-white text-lg font-bold">Ubuntu Server</p>
            <img
              className="w-1/2 h-1/2 object-contain"
              src="/images/ubuntu.png"
              alt="Ubuntu Server"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default About;
