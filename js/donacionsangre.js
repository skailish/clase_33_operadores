const tatuajes = confirm("Tiene tatuajes?");
const hepatitis = confirm("Ha tenido hepatitis");
const anemia = confirm("ha tenido anemia?");

const donar = !tatuajes && !hepatitis && !anemia;

alert("¿Puede donar? = " + donar);