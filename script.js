/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km),
va applicato uno sconto del 20% per i minorenni,
va applicato uno sconto del 40% per gli over 65.,
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.,

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto:  €16.80,
100km, 70 anni => prezzo corretto: €12.60
*/


// chiedre all'utente il numero di chilometri da percorrere
const km = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));
console.log(km);

//calcolo il prezzo del biglietto
const ticketPrice = km * 0.21;
console.log(ticketPrice);

//chiedere l'età del passeggiero
const age = parseInt(prompt("Quanti anni hai"));
console.log(age);


//dichiaro variabile discount=0 
let discount = 0;


//determinare se è possibile applicare uno sconto
if (age > 65) {
  discount = ticketPrice * 0.4;
}
else if (age < 18) {
  discount = ticketPrice * 0.2;
}
else {
  discount = 0;
}


//calcolo il prezzo finale e stampa il  risultato
const finalPrice = ticketPrice - discount;
console.log(`Il prezzo finale è €${finalPrice.toFixed(2)}`);






