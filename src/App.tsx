import { useLanguage } from "./context/LanguageContext";
import { en, ge } from "./locales/language";
import Header from "./components/Header";
import { useEffect } from "react";
import Home from "./views/Home";
import "./App.css";

const App = (): JSX.Element => {
  const { setLanguage, isEn, setIsEn } = useLanguage();

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
      <Home />
    </>
  );
};

export default App;
