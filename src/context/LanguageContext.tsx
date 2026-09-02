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
  setIsEn: (isEn: boolean) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(() => {
    return localStorage.getItem("language") === "ge" ? ge : en;
  });

  const isEn = language === en;

  const setIsEn = (value: boolean) => {
    setLanguage(value ? en : ge);
  };

  useEffect(() => {
    const isGeorgian = language === ge;

    localStorage.setItem("language", isGeorgian ? "ge" : "en");

    document.documentElement.lang = isGeorgian ? "ka" : "en";

    document.body.classList.toggle("font-ge", isGeorgian);
    document.body.classList.toggle("font-en", !isGeorgian);
  }, [language]);

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
