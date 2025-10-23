import { useLanguage } from "../../context/LanguageContext";
import Button from "../Button";

export default function CvCard() {
  const { isEn, language } = useLanguage();

  return (
    <div className="min-h-[120px] flex flex-col justify-center items-center space-y-4 bg-[url(/images/about-bg.svg)] text-white md:col-span-1 rounded-xl border-[0.1px] border-[#6971a265] bg-[#04071D]">
      <p
        className={` ${
          isEn ? "font-en" : "font-ge"
        } px-1 max-w-[80%] lg:max-w-full lg:text-xl font-bold font-en`}
      >
        {language.About.CvCard.Title}
      </p>
      <a href="/Luka Shvelidze.pdf">
        <Button
          className={` ${
            isEn ? "font-en" : "font-ge"
          } flex justify-center items-center text-lg gap-2 w-[75%] h-[50px] lg:w-[200px] md:h-[60px]`}
        >
          {language.About.CvCard.SubTitle}
        </Button>
      </a>
    </div>
  );
}
