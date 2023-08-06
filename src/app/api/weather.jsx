export async function getWeather() {
  const res = await fetch(
    `https://www.el-tiempo.net/api/json/v2/provincias/43/municipios/43123`
  );
  if (!res.ok) throw new Error(res.statusText);
  const data = await res.json();

  const proximosDias = data.proximos_dias.slice(0, 4);

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

  return {
    humedad,
    viento,
    temp: temperatura_actual,
    precipitacion,
    forecast: description,
    min: min,
    max: max,
    pronosticoProximosDias,
  };
}
