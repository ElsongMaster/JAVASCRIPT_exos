//Exo 1

let tabPrenoms = [
  "Ali",
  "Yassin",
  "Kevin",
  "Nasila",
  "Ilias",
  "Agim",
  "Nathan",
  "Stanislas",
  "Jean",
];
let tabLength = tabPrenoms.length;

console.log(`Bonjour ${tabPrenoms[0]}`);
console.log(`Bonjour ${tabPrenoms[1]}`);
console.log(`Bonjour ${tabPrenoms[2]}`);
console.log(`Bonjour ${tabPrenoms[3]}`);
console.log(`Bonjour ${tabPrenoms[4]}`);
console.log(`Bonjour ${tabPrenoms[5]}`);
console.log(`Bonjour ${tabPrenoms[6]}`);
console.log(`Bonjour ${tabPrenoms[7]}`);
console.log(`Bonjour ${tabPrenoms[8]}`);

//Exo 2
let nb = math.ceil(Math.random() * 10);

let rep = prompt("Veuillez entrer un nombre aléatoire:");

if (rep == nb) {
  alert(`Félicitaiton le nombre à trouver était bien ${nb} !`);
} else {
  rep = prompt("Veuillez entrer un nombre aléatoire:");
}

//Exo 3

let quest1 = prompt("Quelle est la capitale de la belgique?");

let quest2 = prompt("Quelle est le prenom du roi belge?");

let quest3 = prompt("Quelle est la capitale de l'hollande?");

let rep1 = "Bruxelles";

let rep2 = "Philipe";

let rep3 = "Amsterdam";

let tabBonnesRep = [];

if (quest1 == rep1) {
  tabBonnesRep.push(quest1);
}

if (quest2 == rep2) {
  tabBonnesRep.push(quest2);
}

if (quest3 == rep3) {
  tabBonnesRep.push(quest3);
}
