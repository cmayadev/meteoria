"use client";
import { useEffect, useState } from "react";
import { Poppins, Quicksand } from "next/font/google";
import { LocationIcon } from "./components/Icons";
import Card from "./components/Card";
import CardMini from "./components/CardMini";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

import { getWeather } from "./api/weather";
import Resume from "./components/Resume";

export default function Home() {
  const [location, setLocation] = useState("Reus");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    getWeather(location).then((res) => setWeather(res));
  }, [location]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className={`${quicksand.className} font-medium text-2xl`}>
          METEORIA
        </div>
        <div className="flex gap-2 place-items-center justify-center">
          <LocationIcon />
          <span className={`${poppins.className} font-medium text-2xl`}>
            {location}
          </span>
        </div>
        <div>Search</div>
      </div>

      <div className="relative flex place-items-center gap-x-8 z-[-1]">
        <Card weather={weather} />
        <Resume weather={weather} />
      </div>

      <div>footer</div>
    </main>
  );
}
