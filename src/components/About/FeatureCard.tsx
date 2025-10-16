import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const PurpleDecoration = () => (
  <motion.svg
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: { opacity: 0, x: -50, y: 50 },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.5 },
      },
    }}
    className="absolute left-[25px] top-[45px] z-1"
    xmlns="http://www.w3.org/2000/svg"
    width="88"
    height="35"
    fill="none"
    viewBox="0 0 88 35"
  >
    <path
      fill="#D1ACFF"
      d="m81.256 4.788-3.224 14.155-4.557-5.687-9.417-1.468zM66.704 18H9.44C4.534 18 .556 21.8.556 26.491s3.978 8.493 8.885 8.493h48.377c4.908 0 8.886-3.802 8.886-8.493z"
    ></path>
    <path
      fill="#0C0E23"
      d="M70.632 2.657h.77l1.337 3.266h.05l1.337-3.266h.769v4.2h-.603v-3.04h-.04l-1.238 3.035h-.5l-1.24-3.036h-.039v3.042h-.603zm6.216 4.265q-.466 0-.802-.2a1.35 1.35 0 0 1-.517-.564 1.9 1.9 0 0 1-.18-.855q0-.484.18-.853.183-.37.509-.577.327-.207.767-.207.267 0 .517.088.25.089.449.277a1.3 1.3 0 0 1 .314.49q.114.3.115.729v.217h-2.505v-.46H77.6a.9.9 0 0 0-.099-.428.74.74 0 0 0-.691-.406.8.8 0 0 0-.451.127.86.86 0 0 0-.296.328.95.95 0 0 0-.102.437v.359q0 .316.11.537.114.222.314.339a.93.93 0 0 0 .47.115 1 1 0 0 0 .318-.05.659.659 0 0 0 .408-.4l.58.105q-.07.256-.25.45a1.2 1.2 0 0 1-.449.297 1.7 1.7 0 0 1-.613.104"
    ></path>
  </motion.svg>
);

const YellowDecoration = () => (
  <motion.svg
    variants={{
      hidden: { opacity: 0, x: 50, y: 50 },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.5 },
      },
    }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="absolute right-[15px] bottom-[83px] z-1"
    xmlns="http://www.w3.org/2000/svg"
    width="82"
    height="30"
    fill="none"
    viewBox="0 0 82 30"
  >
    <path
      fill="#F6F056"
      d="m.29.812 1.898 13.254 2.683-5.325 5.544-1.375zM8.55 13.441h62.823c5.385 0 9.749 3.486 9.749 7.786s-4.364 7.786-9.749 7.786H18.298c-5.384 0-9.748-3.486-9.748-7.786z"
    ></path>
  </motion.svg>
);

export default function FeatureCard() {
  const { isEn, language } = useLanguage();

  return (
    <div
      className={` ${
        isEn ? "" : "max-w-[622px]"
      } min-h-[312px] overflow-hidden border-[0.1px] border-[#6971a265] relative rounded-xl flex items-end bg-[url(/images/about_card.svg)] bg-no-repeat bg-cover`}
    >
      <PurpleDecoration />
      <YellowDecoration />
      <p
        className={` ${
          isEn ? "max-w-[75%] font-en" : "max-w-[60%] font-ge"
        } font-bold z-50 text-white text-xl m-4`}
      >
        {language.About.FeatureCard.Title}
      </p>
    </div>
  );
}
