import { forecasts } from "../utils/forecasts";
import { getDayOfWeek } from "../utils/dates";
import { useEffect, useState } from "react";

const Resume = (props) => {
  const {
    humidity,
    forecast,
    min,
    max,
    pronosticoProximosDias,
    rain,
    sensation,
    sunrise,
    sunset,
    temp,
    wind,
  } = props.weather;

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date()); // Actualiza la hora actual cada minuto
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const sunriseTime = new Date(`2000-01-01 ${sunrise}`);
  const sunsetTime = new Date(`2000-01-01 ${sunset}`);
  const currentTimeValue =
    currentTime.getHours() * 60 + currentTime.getMinutes();
  const sunriseValue = sunriseTime.getHours() * 60 + sunriseTime.getMinutes();
  const sunsetValue = sunsetTime.getHours() * 60 + sunsetTime.getMinutes();
  const circlePosition =
    ((currentTimeValue - sunriseValue) / (sunsetValue - sunriseValue)) * 100;

  const circleStyle = {
    left: `${circlePosition}%`, // Ajusta la posición del círculo en función de la hora actual
  };

  return (
    <div className="flex flex-col gap-6 w-[360px]">
      <div className="flex flex-col">
        <span>Hoy</span>
        <span className="text-4xl mb-4">{forecast}</span>
      </div>
      <div className="flex flex-col gap-4 mb-5">
        {pronosticoProximosDias &&
          pronosticoProximosDias.map((day) => (
            <>
              <div className="resume-row">
                <div className="flex flex-row gap-2 items-center">
                  <div className="flex flex-wrap min-w-[48px] justify-center">
                    <img
                      className="drop-shadow-md w-auto h-10"
                      src={`casts/icons/${forecasts[day.forecast]}.svg`}
                      alt={`${forecasts[day.forecast]}-icon`}
                    />
                  </div>
                  <div className="row-forecast">
                    <span className="text-xs">{getDayOfWeek(day.date)}</span>
                    <span className="text-sm">{day.forecast}</span>
                  </div>
                </div>
                <div className="flex flex-col justify-self-end">
                  <span>{day.temperatures.max}°</span>
                  <span className="opacity-60">{day.temperatures.min}°</span>
                </div>
              </div>
            </>
          ))}
      </div>
      <div className="arc-container">
        <div>
          <div className="arc"></div>
          <div className="circle" style={circleStyle}></div>
        </div>
        <div className="hours-container">
          <div class="hours">
            <span class="sunrise">{sunrise}</span>
            <span class="sunset">{sunset}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
