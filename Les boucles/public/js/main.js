//fruits ["pommes ", "arbre", "cerises"];

//elementASupprimer = ["pommes"];

// // //Exo 1
// let coding19 = [
//   "Adil",
//   "Agim",
//   "Ali",
//   "Antoine",
//   "Chris",
//   "Elvis",
//   "Fanny",
//   "Haroune",
//   "Ilias D",
//   "Ilias El",
//   "Jean",
//   "Kevin",
//   "Lira",
//   "Mouna",
//   "Nasila",
//   "Nathan",
//   "Seif",
//   "Stan",
//   "Van Hoa",
//   "Yassine",
// ];
// for (i in coding19) {
//   console.log(`Bonjour ${coding19[i]}`);
// }

// let nb = parseInt(prompt("veuillez taper un nombre: "));

// for (let i = 0; i <= nb; i++) {
//   console.log(i);
// }

//Exo 2

// for (let i = 1; i <= 20; i++) {
//   console.log(`Tour ${i}: \n`);
//   if (i % 2 == 0) {
//     console.log(`${i} est pair`);
//   } else {
//     console.log(`${i} est impair`);
//   }
// }

//Exo 3
// let multiplicateur = 5;

// for (let i = 1; i <= 9; i++) {
//   console.log(`5x${i} = ${5 * i}`);
// }

//Exo 4
// for (let i = 20; i > 0; i -= 2) {
//   console.log(i);
// }

//Exo 5

// let sommes = [
//   14,
//   7,
//   97,
//   65,
//   247,
//   67,
//   101,
//   4,
//   34,
//   78,
//   1,
//   900,
//   0,
//   11,
//   32,
//   23,
//   61,
// ];

// let grossesSommes = [];

// for (i in sommes) {
//   if (sommes[i] > 60) {
//     grossesSommes.push(sommes[i]);
//   }
// }

// for (i in grossesSommes) {
//   sommes.splice(sommes.indexOf(grossesSommes[i]), 1);
// }

// console.log(`sommes: ${sommes}`);
// console.log(`grossesSommes: ${grossesSommes}`);

//6

// let donnees = [
//   14,
//   7,
//   97,
//   {},
//   "247",
//   67,
//   101,
//   true,
//   34,
//   78,
//   [],
//   "coding school",
//   0,
//   11,
//   32,
//   "italie",
//   61,
//   null,
//   "cent",
//   100,
// ];

// console.log(donnees);

// let typeString = [];

// let typeNumber = [];

// let typeObject = [];

// let typeAutre = [];
// let temp;
// donnees.forEach((elem) => {
//   if (typeof elem == "string") {
//     typeString.push(elem);
//   } else if (typeof elem == "number") {
//     typeNumber.push(elem);
//   } else if (typeof elem == "object") {
//     typeObject.push(elem);
//   } else {
//     typeAutre.push(elem);
//   }
// });

// donnees.splices(0,length);

// console.log(typeString);

// console.log(typeNumber);

// console.log(typeObject);

// console.log(typeAutre);
// console.log(donnees);

//Exo 7

let coding19 = [
  "Adil",
  "Agim",
  "Ali",
  "Antoine",
  "Chris",
  "Elvis",
  "Fanny",
  "Haroune",
  "Ilias D",
  "Ilias El",
  "Jean",
  "Kevin",
  "Lira",
  "Mouna",
  "Nasila",
  "Nathan",
  "Seif",
  "Stan",
  "Van Hoa",
  "Yassine",
];

let tab = ["A", "F", "G", "I", "H", "L", "M"];

coding19.forEach((elem) => {
  if (!tab.includes(elem[0])) {
    elem = elem.charAt(0).toLowerCase() + elem.substr(1);
    console.log(elem);
  }
});
