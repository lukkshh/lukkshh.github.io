import "./App.css";
import Home from "./views/Home";
import Header from "./components/Header";

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <Home />
      <section id="about" className="h-screen"></section>
    </>
  );
};

export default App;
