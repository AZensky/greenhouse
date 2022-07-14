import dayImage from "./images/greenhouse-day.jpg";
import nightImage from "./images/greenhouse-night.jpg";
import "./Greenhouse.css";

import LightSwitch from "./LightSwitch";
import ClimateStats from "./ClimateStats";

import { useTheme } from "../../context/ThemeContext";

function Greenhouse() {
  const { themeName } = useTheme();
  console.log(themeName);

  return (
    <section>
      {themeName === "day" ? (
        <img className="greenhouse-img" src={dayImage} alt="greenhouse" />
      ) : (
        <img className="greenhouse-img" src={nightImage} alt="greenhouse" />
      )}

      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
