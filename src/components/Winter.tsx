import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useMediaQuery } from "react-responsive";

import Snowfall from "react-snowfall";

export default function Winter() {
  const month = new Date().getMonth();
  const isWinter = month === 11 || month === 0 || month === 1;

  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const lottieSize = isTablet ? 50 : 150;

  if (isWinter)
    return (
      <>
        <Snowfall
          snowflakeCount={isTablet ? 25 : 90}
          style={{ position: "fixed", top: "0", left: "0" }}
        />
        <div
          className={`fixed bottom-0 ${isTablet ? "right-3" : "left-1"} z-50 `}
        >
          <DotLottieReact
            key={`snowman-lottie-${lottieSize}`}
            src="/lottie/NHTxUhWEqM.lottie"
            loop
            autoplay
            width={lottieSize}
            height={lottieSize}
          />
        </div>
      </>
    );
}
