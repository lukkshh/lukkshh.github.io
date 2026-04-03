import Button from "../components/Button";
import { useLanguage } from "../context/LanguageContext";
import parse from "html-react-parser";

const SpotlightEffect = (): JSX.Element => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <div className="absolute top-0 w-full">
      <img
        className="absolute left-0"
        src={
          isMobile
            ? "/images/spotlight-left-mobile.svg"
            : "/images/spotlight-left.svg"
        }
        alt=""
      />
      <img
        className="absolute right-0"
        src={
          isMobile
            ? "/images/spotlight-right-mobile.svg"
            : "/images/spotlight-right.svg"
        }
        alt=""
      />
    </div>
  );
};

const Home = (): JSX.Element => {
  const { isEn, language } = useLanguage();

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[url(/images/grid-pattern.svg)] w-full pt-24 md:pt-40">
      <SpotlightEffect />
      <section className="w-full h-full flex items-center flex-col">
        <main className="mx-4 text-white text-center">
          <h3
            className={` ${
              isEn ? "text-base" : "text-lg"
            } mb-3 tracking-widest text-[#E4ECFF]`}
          >
            {language.Home.Headline}
          </h3>
          <h1
            className={` ${
              isEn ? "lg:max-w-[900px]" : "lg:max-w-[1000px] !leading-[1.2]"
            } font-bold text-[42px] leading-[1.2] md:text-7xl md:max-w-[700px] `}
          >
            {parse(language.Home.Subtext)}
          </h1>
          <h2 className="mt-6 text-[#E4ECFF] text-base md:text-2xl">
            {language.Home.CTA}
          </h2>
        </main>
        <div className="w-[80%] h-[55px] lg:w-[250px] md:h-[66px] mt-8 md:mt-10">
          <Button
            onClick={scrollToAbout}
            className="flex justify-center items-center text-lg gap-2 w-full h-full"
          >
            {parse(language.Home.ButtonText)}
          </Button>
        </div>
      </section>
    </section>
  );
};

export default Home;
