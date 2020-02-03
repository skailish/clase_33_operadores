const lunchVeg = "Milanesas de berenjena";
const lunchOmni = "Milanesas de pollo";
const dinnerVeg = "Ensalada Caprese";
const dinnerOmni = "Ensalada de pescado";

let lunch = confirm("Va a almorzar?");
let veg = confirm("Es vegetarianx?");

veg && lunch && alert(`Le recomendamos ${lunchVeg}`) || !lunch && veg && alert(`Le recomendamos ${dinnerVeg}`) || lunch && !veg && alert(`Le recomendamos ${lunchOmni}`) || !lunch && !veg && alert(`Le recomendamos ${dinnerOmni}`);