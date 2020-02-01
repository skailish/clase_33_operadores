const rangoInferior = Number(prompt("Elija el límite inferior del rango"));
const rangoMayor = Number(prompt("Elija el límite mayor del rango"));
const numero = Number(prompt("Elija un número aleatorio"));

const dentroRango = numero > rangoInferior && numero < rangoMayor;

alert("¿El nùmero està dentro del rango? = " + dentroRango);


