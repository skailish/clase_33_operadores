const act1 = "nadar";
const act2 = "andar en bici";
const act3 = "tocar la guitarra";
const act4 = "cocinar";

let rating1 = Number(prompt(`¿Le gusta ${act1}? Indique con un número del 1 al 10`));

rating1 <= 3 && alert("No le gusta nada " + act1) ||
 rating1 >= 4 && rating1 <= 6 && alert("No le gusta tanto " + act1) ||
  rating1 > 6 && rating1 <= 7 && alert("Le gusta " + act1) ||
   rating1 > 7 && rating1 <= 9 && alert("Le gusta mucho " + act1) ||
    rating1 == 10 && alert("Le encanta " + act1) ||
     (!(rating1 >= 1) && !(rating1 <= 10)) && alert("Debe ingresar un número del 1 al 10");


let rating2 = Number(prompt(`¿Le gusta ${act2}? Indique con un número del 1 al 10`));

rating2 <= 3 && alert("No le gusta nada " + act2) ||
 rating2 >= 4 && rating2 <= 6 && alert("No le gusta tanto " + act2) ||
  rating2 > 6 && rating2 <= 7 && alert("Le gusta " + act2) ||
   rating2 > 7 && rating2 <= 9 && alert("Le gusta mucho " + act2) ||
    rating2 == 10 && alert("Le encanta " + act2) ||
     (!(rating2 >= 1) && !(rating2 <= 10)) && alert("Debe ingresar un número del 1 al 10");


let rating3 = Number(prompt(`¿Le gusta ${act3}? Indique con un número del 1 al 10`));

rating3 <= 3 && alert("No le gusta nada " + act3) ||
 rating3 >= 4 && rating3 <= 6 && alert("No le gusta tanto " + act3) ||
  rating3 > 6 && rating3 <= 7 && alert("Le gusta " + act3) ||
   rating3 > 7 && rating3 <= 9 && alert("Le gusta mucho " + act3) ||
    rating3 == 10 && alert("Le encanta " + act3) ||
     (!(rating3 >= 1) && !(rating3 <= 10)) && alert("Debe ingresar un número del 1 al 10");

const rating4 = Number(prompt(`¿Le gusta ${act4}? Indique con un número del 1 al 10`));

rating4 <= 3 && alert("No le gusta nada " + act4) ||
 rating4 >= 4 && rating4 <= 6 && alert("No le gusta tanto " + act4) ||
  rating4 > 6 && rating4 <= 7 && alert("Le gusta " + act4) ||
   rating4 > 7 && rating4 <= 9 && alert("Le gusta mucho " + act4) ||
    rating4 == 10 && alert("Le encanta " + act4) ||
     (!(rating4 >= 1) && !(rating4 <= 10)) && alert("Debe ingresar un número del 1 al 10");