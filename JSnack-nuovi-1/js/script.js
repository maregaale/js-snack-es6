// 1. creo l'array di oggetti-bici
const bici = [
  {
    marca: "Pinarello",
    peso: 8000,
  },
  {
    marca: "Bianchi",
    peso: 7000,
  },
  {
    marca: "Legnano",
    peso: 10000,
  },
  {
    marca: "Aurum",
    peso: 6500,
  },
];

// 2.controllo quale bici ha il peso minore
let biciLeggera = bici[0];

for (var i = 1; i < bici.length; i++) {

  if (bici[i]["peso"] < bici[i-1]["peso"]) {
    biciLeggera = bici[i];
  }
}

// destrutturo l'oggetto biciLeggera
let {marca, peso} = biciLeggera;

console.log(biciLeggera);
console.log(`la marca della bici più leggera è: ${marca}`);
