export function getMonthName(month: number): string {
    const months = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    
    if (month < 1 || month > 12) {
        throw new Error("El número de mes debe estar entre 1 y 12.");
    }
    
    return months[month - 1];
}

export function getDayName(month: number, day: number, year: number): string {
    const date = new Date(year, month - 1, day); // Restamos 1 al mes porque en JavaScript los meses van de 0 a 11
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
}


export function getDayNameSpanish(month: number, day: number, year: number): string {
    // Obtenemos el nombre del día en inglés
    const englishDay = getDayName(month, day, year);
  
    // Mapeo de días en inglés a español
    const daysInSpanish: { [key: string]: string } = {
      Sunday: "Domingo",
      Monday: "Lunes",
      Tuesday: "Martes",
      Wednesday: "Miércoles",
      Thursday: "Jueves",
      Friday: "Viernes",
      Saturday: "Sábado"
    };
  
    // Retornamos el día en español, o el original en caso de que no se encuentre (por si acaso)
    return daysInSpanish[englishDay] || englishDay;
  }


export function isValidDate(day: number, month: number, year: number): boolean {
    // Creamos la fecha con los valores dados
    const date = new Date(year, month - 1, day);

    // Verificamos si la fecha generada coincide con los valores originales
    return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
    );
}


export function getDayOfWeekName(dayNumber: number): string {
    const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    if (dayNumber < 1 || dayNumber > 7) {
        throw new Error("El número de día debe estar entre 1 (Lunes) y 7 (Domingo).");
    }

    return days[dayNumber - 1];
}