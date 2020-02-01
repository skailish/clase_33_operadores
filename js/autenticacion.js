const usuario = "user";
const contrasenia = "pass";

const usuarioPrompt = prompt("Ingrese su usuario");
const contraPrompt = prompt("Escriba contraseña");

const validacion = usuario === usuarioPrompt && contrasenia === contraPrompt;

alert(`Acceso autorizado = ${validacion}`);