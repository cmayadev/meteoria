import { forecasts } from "../utils/forecasts";
import { getDayOfWeek } from "../utils/dates";

const Resume = (props) => {
  const {
    humidity,
    forecast,
    min,
    max,
    pronosticoProximosDias,
    rain,
    sensation,
    temp,
    wind,
  } = props.weather;

  return (
    <div className="flex flex-col gap-6 w-[360px]">
      <div className="text-4xl">{forecast}</div>
      <div className="flex flex-col gap-4">
        {pronosticoProximosDias &&
          pronosticoProximosDias.map((day) => (
            <>
              <div className="resume-row">
                <div className="flex flex-row gap-2 items-center">
                  <div className="flex flex-wrap min-w-[48px] justify-center">
                    <img
                      className="drop-shadow-md w-auto h-8"
                      src={`casts/icons/${forecasts[day.forecast]}.png`}
                      alt={`${forecasts[day.forecast]}-icon`}
                    />
                  </div>
                  <div className="row-forecast">
                    <span className="text-xs">{getDayOfWeek(day.date)}</span>
                    <span className="text-sm">{day.forecast}</span>
                  </div>
                </div>
                <div className="justify-self-end">
                  {day.temperatures.max}° / {day.temperatures.min}°
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default Resume;
