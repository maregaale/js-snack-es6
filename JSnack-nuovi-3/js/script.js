// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

// creo la funzione
function intervalPositionArray (array, a, b) {
  let newArray = [];
  for (var i = a; i <= b; i++) {
    if (a < b == true) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}


// controllo funzionamento
var myArray = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(intervalPositionArray(myArray, 3, 4));
