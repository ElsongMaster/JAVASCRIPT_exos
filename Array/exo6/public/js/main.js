//1.

let monTab = ["crabe", "crevette", "homard", "cloporte"];

monTab.shift();

monTab.push("lastElt");

monTab.unshift("firstElt");

monTab[1] = monTab[1].toUpperCase;

monTab.reverse();

//2)
let chiffres = [4, 5, 2, 1, 3];
chiffres.sort();

chiffres = chiffres.join("-");

chiffres = chiffres.split("-");

console.log(chiffres.sort());

//partie 3

let tab = [];
tab.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(tab);

tab.splice(2, 1);

let tabCoding10 = [
  "Kevin",
  "Elvis",
  "Ilias D",
  "Ilias E",
  "Yassine",
  "Ali",
  "Adil",
  "Agim",
  "seifdin",
  "Van hoa",
  "Stanislas",
  "Nathan",
  "Lira",
  "Jean",
  "Haroune",
  "Chris",
  "Antoine",
  "Mouna",
  "Nasila",
];

console.log(tabCoding10[Math.floor(Math.random() * tabCoding10.length)]);

tabCoding10.splice(tabCoding10.indexOf("Nathan"), 1);
console.log(tabCoding10);
