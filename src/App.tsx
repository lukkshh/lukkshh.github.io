import "./App.css";
import Home from "./views/Home";
import Header from "./components/Header";
import About from "./views/About";

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <Home />
      <About />
    </>
  );
};

export default App;
