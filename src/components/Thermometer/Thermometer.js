import { useContext, useState, useEffect } from "react";
import ReactSlider from "react-slider";
import "./Thermometer.css";
import { useClimate } from "../../context/ClimateContext";

function Thermometer() {
  const { temperature, setTemperature } = useClimate();
  const [desiredTemperature, setDesiredTemperature] = useState(temperature);

  useEffect(() => {
    console.log(desiredTemperature, temperature);
    let incrementTemp;
    if (desiredTemperature < temperature) {
      incrementTemp = setTimeout(() => {
        setDesiredTemperature(desiredTemperature + 1);
      }, 200);
    }
    if (desiredTemperature > temperature) {
      incrementTemp = setTimeout(() => {
        setDesiredTemperature(desiredTemperature - 1);
      }, 200);
    }
    return () => clearTimeout(incrementTemp);
  }, [desiredTemperature, temperature]);

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">
        Actual Temperature: {desiredTemperature}°F
      </div>
      <ReactSlider
        value={temperature}
        onAfterChange={(val) => {
          setTemperature(val);
        }}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;
