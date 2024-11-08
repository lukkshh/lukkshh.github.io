import { useEffect } from "react";

import { en, ge } from "./locales/language";

import Header from "./components/Header";
import Projects from "./views/Projects";
import Home from "./views/Home";

import "./App.css";

import { useLanguage } from "./context/LanguageContext";
import { useView } from "./context/ViewContext";

const App = (): JSX.Element => {
  const { setLanguage, isEn, setIsEn } = useLanguage();

  const { view } = useView();

  useEffect(() => {
    if (!localStorage.getItem("language")) {
      localStorage.setItem("language", "en");
      setIsEn(false);
    }

    if (localStorage.getItem("language") === "en") {
      setLanguage(en);
      setIsEn(true);
    } else {
      localStorage.setItem("language", "ge");
      setLanguage(ge);
      setIsEn(false);
    }
  }, [isEn]);

  return (
    <>
      <Header />
      {view === "home" ? <Home /> : <Projects />}
    </>
  );
};

export default App;
