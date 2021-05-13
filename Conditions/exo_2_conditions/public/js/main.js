//Exo 1

let nb = prompt("Veuillez rentrer un nombre");

let i = 0;

while (i <= nb) {
  console.log(i);

  i++;
}

//Exo 2
let classes = [];
let maxEtudiants = prompt(
  "Choisissez le nombre max d'étudiants dans la classe"
);
let etudiant;
let i = 0;
while (i <= maxEtudiants) {
  etudiant = prompt("Veuillez rentrer le nom d'un étudiant");
  classes.push(etudiant);
  i++;
}

//Exo 03

let tab = [];
