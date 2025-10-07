import { useLanguage } from "../context/LanguageContext";
import { EnFlag, GeFlag } from "./Flags";

const LanguageButton = (): JSX.Element => {
  const { isEn, setIsEn } = useLanguage();

  const HandleClick = (): void => {
    localStorage.setItem("language", isEn ? "ge" : "en");
    setIsEn(!isEn);
  };

  return (
    <button
      className="flex justify-center items-center"
      aria-label="Change Language"
      onClick={HandleClick}
    >
      {isEn ? <GeFlag /> : <EnFlag />}
    </button>
  );
};

export default LanguageButton;
