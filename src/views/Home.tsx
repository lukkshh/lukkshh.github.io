import type { JSX } from "react";
import Button from "../components/Button";
import parse from "html-react-parser";
import { useLocale, useTranslations } from "next-intl";
import { useLenis } from "lenis/react";

const SpotlightEffect = (): JSX.Element => {
  return (
    <div className="absolute top-0 w-full">
      <picture>
        <source media="(max-width: 768px)" srcSet="/images/spotlight-left-mobile.svg" />
        <img className="absolute left-0" src="/images/spotlight-left.svg" alt="" />
      </picture>
      <picture>
        <source media="(max-width: 768px)" srcSet="/images/spotlight-right-mobile.svg" />
        <img className="absolute right-0" src="/images/spotlight-right.svg" alt="" />
      </picture>
    </div>
  );
};

const Home = (): JSX.Element => {
  const isEn = useLocale() === "en";
  const t = useTranslations("Home");
  const lenis = useLenis();

  const scrollToAbout = () => {
    if (lenis) {
      lenis.scrollTo("#about", { offset: window.innerWidth >= 768 ? -140 : -50 });
    } else {
      document.getElementById("about")?.scrollIntoView();
    }
  };

  return (
    <section className="bg-[url(/images/grid-pattern.svg)] w-full pt-24 md:pt-40">
      <SpotlightEffect />
      <section className="w-full h-full flex items-center flex-col">
        <main className="mx-4 text-white text-center">
          <p
            className={` ${
              isEn ? "text-base" : "text-lg"
            } mb-3 tracking-widest text-[#E4ECFF]`}
          >
            {t("Headline")}
          </p>
          <h1
            className={` ${
              isEn ? "lg:max-w-[900px]" : "lg:max-w-[1000px] !leading-[1.2]"
            } font-bold text-[42px] leading-[1.2] md:text-7xl md:max-w-[700px] `}
          >
            {parse(t.raw("Subtext") as string)}
          </h1>
          <p className="mt-6 text-[#E4ECFF] text-base md:text-2xl">
            {t("CTA")}
          </p>
        </main>
        <div className="w-[80%] h-[55px] lg:w-[250px] md:h-[66px] mt-8 md:mt-10">
          <Button
            onClick={scrollToAbout}
            className="flex justify-center items-center text-lg gap-2 w-full h-full"
          >
            {parse(t.raw("ButtonText") as string)}
          </Button>
        </div>
      </section>
    </section>
  );
};

export default Home;
