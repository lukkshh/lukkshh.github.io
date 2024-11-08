import { useLanguage } from "../context/LanguageContext";

const Profile = (): JSX.Element => {
  const { isEn, language } = useLanguage();

  return (
    <div className="w-full h-full flex justify-center items-center text-focus-in">
      <div>
        <p
          className={` ${
            isEn ? "font-en" : "font-ge"
          } text-3xl max-md:text-xl max-lg:text-2xl max-lg:pl-2 max-lg:pr-2`}
        >
          {language.Profile.Title}
        </p>
        <p
          className={` ${
            isEn ? "font-en" : "font-ge"
          } text-base text-gray-400 max-md:text-xs max-lg:text-sm max-lg:pl-2 max-lg:pr-2`}
        >
          {language.Profile.SubTitle}
        </p>
      </div>
    </div>
  );
};

export default Profile;
