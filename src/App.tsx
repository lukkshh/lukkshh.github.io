import "./App.css";

import Home from "./views/Home";
import Winter from "./components/Winter";
import Header from "./components/Header";
import PageLoader from "./components/Loader/PageLoader";

import { lazy, Suspense } from "react";
import { useInitialAssetLoader } from "./hooks/useInitialAssetLoader";

const About = lazy(() => import("./views/About"));
const Experience = lazy(() => import("./views/Experience"));
const Projects = lazy(() => import("./views/Projects"));
const Footer = lazy(() => import("./components/Footer"));

const App = (): JSX.Element => {
  const { isReady, progress } = useInitialAssetLoader();

  if (!isReady) {
    return <PageLoader progress={progress} />;
  }

  return (
    <div className="flex flex-col gap-16 md:gap-28 lg:gap-40 overflow-x-hidden">
      <Winter />
      <Header />
      <Home />
      <Suspense fallback={null}>
        <About />
        <Experience />
        <Projects />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
