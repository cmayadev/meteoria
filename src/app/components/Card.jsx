import { Rubik } from "next/font/google";
import { formatDate } from "../utils/dates";
import { forecasts } from "../utils/forecasts";
import { getDayMoment } from "../utils/dates";

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "500", "600"] });

const Card = (props) => {
  const { humidity, forecast, min, max, rain, sensation, temp, wind } =
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
        height: "520px",
        width: "360px",
      }}
    >
      <div className="glass"></div>
      <div className="flex flex-col p-6">
        <div className="flex flex-row gap-4 temperature font-medium">
          <div className="text-7xl">{temp}°</div>
          <div className="flex flex-col mt-1">
            <div className="flex flex-row justify-between gap-2">
              <span>Max.</span> <span>{max}°</span>
            </div>
            <div className="flex flex-row justify-between gap-2">
              <span>Min.</span> <span>{min}°</span>
            </div>
          </div>
        </div>
        <span>{formatDate(new Date())}</span>
      </div>

      <div className="absolute top-14 right-0 drop-shadow-2xl rotate-[-90deg]">
        {forecast}
      </div>

      <div className="flex flex-row justify-center gap-5 trans px-2">
        <div className="attribute flex flex-col place-items-center justify-center">
          <span className="font-medium">{sensation}°</span>
          <span className="text-xs">S. térmica</span>
        </div>
        <div className="attribute flex flex-col place-items-center justify-center">
          <span className="font-medium">
            {humidity}
            <small>%</small>
          </span>
          <span className="text-xs">Humedad</span>
        </div>
        <div className="attribute flex flex-col place-items-center justify-center">
          <span className="font-medium">
            {rain}
            <small>%</small>
          </span>
          <span className="text-xs">Lluvia</span>
        </div>
        <div className="attribute flex flex-col place-items-center justify-center">
          <span className="font-medium">
            {wind}
            <small>km</small>
          </span>
          <span className="text-xs">Viento</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
