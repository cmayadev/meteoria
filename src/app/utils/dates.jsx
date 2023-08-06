import { format, isValid } from "date-fns";
import { es } from "date-fns/locale";

export function formatDate(date) {
  let fechaFormateada = date;

  if (typeof date === "string") {
    // Si es un string, tratamos de parsearlo a Date
    const parsedDate = new Date(date);
    if (isValid(parsedDate)) {
      // Si es una fecha válida, formateamos la fecha
      fechaFormateada = parsedDate;
    }
  }

  // Si es un objeto de Date o un string válido parseado a Date, continuamos formateando
  if (fechaFormateada instanceof Date) {
    return format(fechaFormateada, "EEE, d MMMM", { locale: es });
  }

  return fechaFormateada;
}

export function getDayMoment() {
  const now = new Date().getHours();

  if (now >= 6 && now < 12) {
    return "dawn"; // De 6:00 a 11:59
  } else if (now >= 12 && now < 18) {
    return "day"; // De 12:00 a 17:59
  } else if (now >= 18 && now < 20) {
    return "dusk"; // De 18:00 a 19:59
  } else {
    return "night"; // De 20:00 a 5:59
  }
}
