// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
const myArray = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let a = parseInt(prompt("inserisci estremo inferiore"));
let b = parseInt(prompt("inserisci estremo superiore"));

const filtArray = myArray.filter((item, index, array) => {
  return index >= a && index <= b;
});

console.log(filtArray);
