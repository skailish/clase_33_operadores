let basePrice = 40000;

alert("Está por comprar la Notebook HP 3000 a $40000");
const ram = confirm("Desea comprarle memoria?");

ram && (basePrice += 10000);

const hdd = confirm("Desea comprarle más espacio en disco?");

hdd && (basePrice += 10000);

const video = confirm("Desea una placa de video?");

video && (basePrice += 10000);

alert("El precio ahora es de " + basePrice);