const ammount = Number(prompt("Ingrese el monto a pagar"));

const creditCard = confirm("Desea pagarla con tarjeta?");

!creditCard && alert("Gracias por su compra!");

let installements = Number(creditCard && prompt("Elija la cantidad de cuotas, 3, 6 u 12?"));

totalAmount = (installements == 3 && (ammount + (ammount * 5)/100)) ||  (installements == 6 && (ammount + (ammount * 10)/100)) ||  (installements == 12 && (ammount + (ammount * 15)/100));

creditCard && alert(`El monto total a pagar es de ${totalAmount}. Usted eligió pagar en ${installements} cuotas de ${totalAmount / installements}`);