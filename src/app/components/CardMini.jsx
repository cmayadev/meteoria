import { formatDate } from "../utils/dates";
import { forecasts } from "../utils/forecasts";

const CardMini = (props) => {
  const { date, forecast, temperatures } = props.weather;

  return (
    <div className="h-[232px] w-[216px] justify-between bg-transparent flex flex-col p-6 place-items-center rounded-3xl relative drop-shadow-2xl">
      <div className="glass"></div>
      <div className="uppercase text-sm">{formatDate(date)}</div>
      <img
        className="drop-shadow-md w-auto h-20"
        src={`casts/icons/${forecasts[forecast]}.png`}
        alt={`${forecasts[forecast]}-icon`}
      />
      <div className="flex flex-row justify-between gap-4 text-sm">
        <span>MAX: {temperatures.max}°C</span>
        <span>MIN: {temperatures.min}°C</span>
      </div>
    </div>
  );
};

export default CardMini;
