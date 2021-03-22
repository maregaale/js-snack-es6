//1. creo l'array di squadre di calcio
const squadre = [
  {
    nome: "Inter",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Monfalcone",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Romana",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Empoli",
    puntiFatti: 0,
    falliSubiti: 0,
  },
];

// 2. genero numeri random
function numRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 3.inserisco i numeri random al posto di punti fatti e falli subiti delle squadre
const squadreRndom = squadre.map((item) => {

  item["puntiFatti"] = numRandom(1, 80);
  item["falliSubiti"] = numRandom(1, 12);

  return item;
});

console.log(squadreRndom);

const falliSquadre = squadreRndom.map((element) => {
  // aggiungo le proprietà agli oggetti del nuovo array
  let { nome, puntiFatti, falliSubiti } = element;

  return {nome, falliSubiti};
});

console.log(falliSquadre);
