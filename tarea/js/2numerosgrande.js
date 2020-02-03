const value1 = Number(prompt("Ingrese un número"));
const value2 = Number(prompt("Ingrese otro número"));

value1 > value2 && alert(`${value1} es el mayor`) || value2 > value1 && alert(`${value2} es el mayor`) || value1 == value2 && alert("Los números son iguales");