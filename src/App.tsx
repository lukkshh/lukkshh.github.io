import "./App.css";
import Home from "./views/Home";
import Header from "./components/Header";
import About from "./views/About";
import Projects from "./views/Projects";
import Footer from "./components/Footer";
import Experience from "./views/Experience";

const App = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-16 md:gap-28 lg:gap-40">
      <Header />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
