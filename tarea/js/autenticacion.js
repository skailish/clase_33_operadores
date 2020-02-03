const user = "usuario";
const password = "contraseña";

const userPrompt = prompt("Ingrese su usuario");
const passPrompt = prompt("Escriba contraseña");

user == userPrompt && password == passPrompt && alert(`Acceso autorizado`) || (user !== userPrompt || password !== passPrompt) && alert("Usuario o contraseña incorrectos.")