import { useMediaQuery } from "react-responsive";

import Snowfall from "react-snowfall";

export default function SnowFall() {
  const month = new Date().getMonth();
  const isWinter = month === 11 || month === 0 || month === 1;

  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });

  if (isWinter)
    return (
      <Snowfall
        snowflakeCount={isTablet ? 25 : 90}
        style={{ position: "fixed", top: "0", left: "0" }}
      />
    );
}
