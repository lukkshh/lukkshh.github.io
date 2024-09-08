import LanguageButton from "./LanguageButton";
const Header = (): JSX.Element => {
  return (
    <header className="w-full h-[8vh] flex justify-center items-center max-sm:h-[5dvh] max-sm:pt-4">
      <LanguageButton />
    </header>
  );
};

export default Header;
