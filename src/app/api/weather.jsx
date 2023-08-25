export async function getWeather() {
  const timestamp = new Date().getTime();
  const res = await fetch(
    `https://www.el-tiempo.net/api/json/v2/provincias/43/municipios/43123?timestamp=${timestamp}`
  );
  if (!res.ok) throw new Error(res.statusText);
  const data = await res.json();

  const proximosDias = data.proximos_dias.slice(0, 5);

  // Obtener la temperatura mínima y máxima, y el primer elemento del array estado_cielo_descripcion para cada día
  const pronosticoProximosDias = proximosDias.map((dia) => {
    return {
      date: dia["@attributes"].fecha,
      temperatures: {
        max: dia.temperatura.maxima,
        min: dia.temperatura.minima,
      },
      forecast: Array.isArray(dia.estado_cielo_descripcion)
        ? dia.estado_cielo_descripcion[0]
        : dia.estado_cielo_descripcion,
    };
  });

  const {
    humedad,
    temperatura_actual,
    temperaturas,
    precipitacion,
    viento,
    stateSky,
  } = data;
  const { description } = stateSky;
  const { min, max } = temperaturas;
  const { orto, ocaso } = data.pronostico.hoy["@attributes"];

  const sensation = (
    0.5 * temperatura_actual +
    61.0 +
    (temperatura_actual - 68.0) * 1.2 +
    viento * 0.094
  ).toFixed(0);

  return {
    forecast: description,
    humidity: humedad,
    min: min,
    max: max,
    rain: precipitacion,
    pronosticoProximosDias,
    sensation,
    temp: temperatura_actual,
    wind: viento,
    sunrise: orto,
    sunset: ocaso,
  };
}
