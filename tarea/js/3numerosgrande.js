const value1 = Number(prompt("Ingrese un número"));
const value2 = Number(prompt("Ingrese otro número"));
const value3 = Number(prompt("Ingrese un tercer número"));

value1 > value2 && value1 > value3 && alert(`${value1} es el mayor`) || value2 > value1 && value2 > value3 && alert(`${value2} es el mayor`) || value3 > value1 && value3 > value2 && alert(`${value3} es el mayor`) || (value1 == value2 || value2 == value3 || value3 == value1) && alert("Hay números con el mismo valor");