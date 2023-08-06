import { Rubik } from "next/font/google";
import { formatDate } from "../utils/dates";
import { forecasts } from "../utils/forecasts";
import { getDayMoment } from "../utils/dates";

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "500", "600"] });

const Card = (props) => {
  const { humedad, viento, precipitacion, temp, forecast, min, max } =
    props.weather;

  return (
    <div
      className={`${rubik.className} card drop-shadow-2xl rounded-3xl`}
      style={{
        backgroundImage:
          "url(" +
          "/casts/" +
          getDayMoment() +
          "/" +
          forecasts[forecast] +
          ".jpg)",
        height: "480px",
        width: "320px",
      }}
    >
      <div className="glass"></div>
      <div className="flex flex-col p-6">
        <div className="temperature text-7xl font-medium">{temp}°</div>
        <span>{formatDate(new Date())}</span>
      </div>

      <div className="drop-shadow-xl absolute top-12 right-0 drop-shadow-2xl rotate-[-90deg]">
        {forecast}
      </div>

      <div className="flex flex-row justify-center gap-5 trans px-2">
        <div className="attribute flex flex-col place-items-center justify-center">
          <span className="text-sm font-medium">
            {humedad}
            <small>%</small>
          </span>
          <span className="text-xs">Humedad</span>
        </div>
        <div className="attribute flex flex-col place-items-center justify-center">
          <span className="text-sm font-medium">
            {precipitacion}
            <small>%</small>
          </span>
          <span className="text-xs">Lluvia</span>
        </div>
        <div className="attribute flex flex-col place-items-center justify-center">
          <span className="text-sm font-medium">{min}°</span>
          <span className="text-xs">Min</span>
        </div>
        <div className="attribute flex flex-col place-items-center justify-center">
          <span className="text-sm font-medium">{max}°</span>
          <span className="text-xs">Max</span>
        </div>
        <div className="attribute flex flex-col place-items-center justify-center">
          <span className="text-sm font-medium">
            {viento}
            <small>km</small>
          </span>
          <span className="text-xs">Viento</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
