import Certificates from "./pages/Certificates";
import About from "./pages/About";
import Home from "./pages/Home";

import "aos/dist/aos.css";
import Aos from "aos";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Home />
      <About />
      <Certificates />
    </>
  );
}

export default App;
