const miembro = confirm("Usted es miembro?");
const cuota = confirm("Tiene cuota al dia?");
const autorizacion = confirm("Tiene autorizacion?");

const acceso = miembro && cuota || !miembro && autorizacion;

alert("¿Tiene acceso? = " + acceso);