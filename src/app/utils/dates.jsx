import { format, isValid, addDays } from "date-fns";
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
  } else if (now >= 12 && now < 19) {
    return "day"; // De 12:00 a 18:59
  } else if (now >= 19 && now < 21) {
    return "dusk"; // De 19:00 a 20:59
  } else {
    return "night"; // De 21:00 a 5:59
  }
}

export function getDayOfWeek(dateString) {
  const dayNames = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const date = new Date(dateString);
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  if (date.toDateString() === today.toDateString()) {
    return "Hoy";
  } else if (date.toDateString() === tomorrow.toDateString()) {
    return "Mañana";
  }

  const dayIndex = date.getDay();

  return dayNames[dayIndex];
}
