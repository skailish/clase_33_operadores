const originalTemp = 20;

let rise = confirm("La temperatura actual es de " + 20 + "°C ¿Desea subir la temperatura?");

rise = (Number(rise && (prompt("Cuánto desa subirla?"))));

let updatedTemp = originalTemp + rise;

let lower = confirm("La temperatura actual es de " + updatedTemp + "°C ¿Desea bajar la temperatura?");

lower = (Number(lower && (prompt("Cuánto desea bajarla?"))));

updatedTemp -= lower;

confirm("La temperatura actual es de " + updatedTemp + "°C");
