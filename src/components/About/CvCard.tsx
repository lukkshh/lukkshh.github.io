import BorderGlow from "../BorderGlow";
import SpotlightCard from "../SpotlightCard";
import { trackEvent } from "../../utils/analytics";
import { useTranslations } from "next-intl";

export default function CvCard() {
  const t = useTranslations("About.CvCard");

  return (
    <SpotlightCard className="min-h-[120px] flex flex-col justify-center items-center space-y-4 bg-[url(/images/about-bg.svg)] text-white md:col-span-1 rounded-xl border-[0.1px] border-[#6971a265] bg-[#04071D]">
      <p className="px-1 max-w-[80%] lg:max-w-full lg:text-xl font-bold">
        {t("Title")}
      </p>
      <a
        href="/Luka Shvelidze.pdf"
        onClick={() => trackEvent("cv_download")}
        className="inline-flex min-h-12 min-w-12 w-[75%] h-[50px] lg:w-[200px] md:h-[60px]"
      >
        <BorderGlow
          className="h-full w-full"
          edgeSensitivity={40}
          glowColor="200 95 72"
          backgroundColor="#060010"
          borderRadius={8}
          glowRadius={20}
          glowIntensity={1.5}
          coneSpread={20}
          animated={true}
          colors={["#06b6d4", "#3b82f6", "#6366f1"]}
        >
          <span className="flex justify-center items-center text-lg gap-2 w-full h-full text-white drop-shadow-sm rounded-lg border-[0.5px] border-[#3637498a] bg-gradient-to-tl from-[#06091F] to-[#161A31]">
            {t("SubTitle")}
          </span>
        </BorderGlow>
      </a>
    </SpotlightCard>
  );
}
