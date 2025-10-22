import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { en, ge, Language } from "../locales/language";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  isEn: boolean;
  setIsEn: (LangToggle: boolean) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(en);
  const [isEn, setIsEn] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("language")) {
      localStorage.setItem("language", "en");
      setIsEn(false);
    }

    if (localStorage.getItem("language") === "ge") {
      document.documentElement.lang = "ge";
      setLanguage(ge);
      setIsEn(false);
    } else {
      document.documentElement.lang = "en";
      localStorage.setItem("language", "en");
      setLanguage(en);
      setIsEn(true);
    }
  }, [isEn]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isEn, setIsEn }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
