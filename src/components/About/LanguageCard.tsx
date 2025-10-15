const Language = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <div
      className={`${className} bg-[#161A31] uppercase border-[0.1px] border-[#6971a265] p-2 absolute rounded-xl font-en`}
    >
      {children}
    </div>
  );
};

export default function LanguageCard() {
  return (
    <div className="min-h-[195px] rounded-xl bg-[#04071D] relative text-white">
      <img
        className="w-full max-h-[135px] absolute bottom-0"
        src="/images/map.svg"
        alt="globe_map"
      />
      <p className="font-bold font-en text-xl px-[24px] py-[30px]">
        I’m very flexible with time zone communications
      </p>
      <Language className="left-[20px] scale-75">English</Language>
      <Language className="left-[50%] scale-75 bottom-[20px] -translate-x-[50%]">
        Georgian
      </Language>
      <Language className="right-[20px] scale-75">Russian</Language>
    </div>
  );
}
