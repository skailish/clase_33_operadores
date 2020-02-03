let rate = Number(prompt(`¿Qué calificación obtuvo, del 1 al 10?`));

rate == 10 && alert("Excelente") || (rate == 8 || rate == 9) && alert("¡Muy bien!") || (rate == 6 || rate == 7) && alert("Aprobado") || rate < 6 && alert("Reprobado");
