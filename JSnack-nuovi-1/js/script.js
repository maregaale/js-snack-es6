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

bici.forEach((item, index,array) => {
  if (item["peso"] < biciLeggera["peso"]) {
      biciLeggera = item;
    }
});


// destrutturo l'oggetto biciLeggera
let {marca, peso} = biciLeggera;

console.log(biciLeggera);
console.log(`la marca della bici più leggera è: ${marca}`);
