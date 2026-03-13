import "./App.css";
import Home from "./views/Home";
import Header from "./components/Header";
import About from "./views/About";
import Projects from "./views/Projects";
import Footer from "./components/Footer";
import Experience from "./views/Experience";
import PageLoader from "./components/Loader/PageLoader";
import { useInitialAssetLoader } from "./hooks/useInitialAssetLoader";

const App = (): JSX.Element => {
  const { isReady, progress, content } = useInitialAssetLoader();

  if (!isReady) {
    return <PageLoader progress={progress} />;
  }

  return (
    <div className="flex flex-col gap-16 md:gap-28 lg:gap-40">
      <Header />
      <Home />
      <About />
      <Experience experiences={content.experiences} />
      <Projects projects={content.projects} />
      <Footer />
    </div>
  );
};

export default App;
