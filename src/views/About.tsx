import CvCard from "../components/About/CvCard";
import FeatureCard from "../components/About/FeatureCard";
import LanguageCard from "../components/About/LanguageCard";
import TechIconsCard from "../components/About/TechIconsCard";
import TechStackCard from "../components/About/TechStackCard";

export default function About(): JSX.Element {
  return (
    <section
      id="about"
      className="grid place-items-center px-4 scroll-mt-24 md:scroll-mt-28"
    >
      <main className="grid grid-cols-1 gap-4 md:grid-cols-2 w-full max-w-[1280px]">
        <FeatureCard />
        <div className="space-y-4">
          <LanguageCard />
          <TechStackCard />
        </div>
        <div className=" min-h-[185px] col-span-1 grid-cols-1 md:col-span-2 grid md:grid-cols-3 gap-4">
          <CvCard />
          <TechIconsCard />
        </div>
      </main>
    </section>
  );
}
