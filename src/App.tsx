import "./App.css";
import Home from "./views/Home";
import Header from "./components/Header";
import About from "./views/About";
import Projects from "./views/Projects";

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
    </>
  );
};

export default App;
