import FeatureCard from "../components/About/FeatureCard";
import LanguageCard from "../components/About/LanguageCard";
import TechStackCard from "../components/About/TechStackCard";

export default function About(): JSX.Element {
  return (
    <section id="about" className="h-screen grid place-items-center">
      <main className="p-4 grid grid-cols-1 gap-4 grid-rows-2 md:grid-cols-2 ">
        <FeatureCard />
        <div className="space-y-4">
          <LanguageCard />
          <TechStackCard />
        </div>
      </main>
    </section>
  );
}
