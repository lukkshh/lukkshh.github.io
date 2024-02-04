import Aos from "aos";
import Home from "./views/Home";
import About from "./views/About";
import Footer from "./views/Footer";
import Header from "./views/Header";
import Projects from "./views/Projects";
import { en, ge } from "./data/Languages";
import { useEffect, useState } from "react";
import Certificates from "./views/Certificates";
import { LanguageContext } from "./store/LanguageProvider";
const App = () => {
  const [lang, setLang] = useState(en);
  const [eng, setEng] = useState(true);

  useEffect(() => {
    Aos.init();

    const Language = localStorage.getItem("language");

    if (!Language) {
      localStorage.setItem("language", "eng");
    }

    if (Language == "geo") {
      setLang(ge);
      setEng(false);
    }

    if (Language == "eng") {
      setLang(en);
      setEng(true);
    }
  }, []);

  return (
    <>
      <LanguageContext.Provider value={{ lang, setLang, eng, setEng }}>
        <Header />
        <Home />
        <About />
        <Certificates />
        <Projects />
        <Footer />
      </LanguageContext.Provider>
    </>
  );
};

export default App;
