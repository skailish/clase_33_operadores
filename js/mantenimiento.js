const aceite = confirm("Su auto tiene aceite?");
const agua = confirm("Su auto tiene agua");
const neumaticos = confirm("Su auto tiene neumaticos con presion?");

const mantenimiento = !aceite || !agua || !neumaticos;

alert("¿Su auto necesita mantenimiento? = " + mantenimiento);