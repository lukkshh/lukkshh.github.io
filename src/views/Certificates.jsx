import { LanguageContext } from "../store/LanguageProvider";
import { useContext } from "react";

const Certificates = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <section
      id="certificates"
      className="w-full h-screen flex flex-col overflow-hidden"
    >
      <div className="w-full h-[15%]"></div>
      <div className="w-full h-[10%] flex items-center">
        <p data-aos="fade-right" className="text-white black-ops ml-6 text-5xl">
          {lang.Cert}
        </p>
      </div>
      <div className="w-full h-[75%] flex justify-around items-center max-md:mt-4 max-md:flex-col">
        <a
          href="certificates/UC-51dace1f-4ca4-4ee9-9d74-049c053d75a5.pdf"
          className="w-[30%] h-[70%] max-md:w-[90%]"
        >
          <img
            data-aos="zoom-in-right"
            className="w-full h-5/6 rounded-3xl border border-white"
            src="images/UC-51dace1f-4ca4-4ee9-9d74-049c053d75a5.jpg"
            alt="certificate"
          />
        </a>
        <a
          href="certificates/youaccel.pdf"
          className="w-[30%] h-[70%] max-md:w-[90%]"
        >
          <img
            data-aos="zoom-in-left"
            className="w-full h-5/6 rounded-3xl border border-white"
            src="images/youaccel.png"
            alt="certificate"
          />
        </a>
      </div>
    </section>
  );
};

export default Certificates;
