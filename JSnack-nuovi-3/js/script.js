// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
const myArray = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function functionName(array, a, b) {
    return array.filter((item, index) => (0 <= a && b <= array.length && a <= index && index <= b));
}

console.log(functionName(myArray, 3, 4));
