import FeatureCard from "../components/About/FeatureCard";
import LanguageCard from "../components/About/LanguageCard";

export default function About(): JSX.Element {
  return (
    <section id="about" className="h-screen">
      <main className="p-4 flex justify-center items-center flex-col gap-4 md:flex-row">
        <FeatureCard />
        <div className="space-y-4">
          <LanguageCard />
          <LanguageCard />
        </div>
      </main>
    </section>
  );
}
