const realDay = 20;
const realMonth = 9;
const realYear = 1982;

let day = Number(prompt("Adivine el día de mi nacimiento"));
let month = Number(prompt("Adivine el mes de mi nacimiento"));
let year = Number(prompt("Adivine el año de mi nacimiento, ingresando las cuatro cifras"));

day == realDay && month == realMonth && year == realYear && alert("Adivinó! Nací el " + realDay + "/" + realMonth + "/" + realYear) || (day !== realDay || month !== realMonth || year !== realYear) && alert("No adivinó! Pruebe nuevamente presionando F5");



