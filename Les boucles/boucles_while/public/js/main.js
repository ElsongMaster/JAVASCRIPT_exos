// //Exo 1
// let nb = prompt("Tape un nombre refre:");

// let i = 0;

// while (i < nb) {
//   console.log(i);

//   i++;
// }

// //Exo 2
// let classe = [];
// let maxEtudiant = prompt("Entrer le nombre d'éleves dans la classe");
// let etudiant;
// while (i < maxEtudiant) {
//   etudiant = prompt("Entrer le d'un de vos cammarades:");
//   classe.push(etudiant);
//   i++;
// }

// // correction
// let classe = [];
// let maxEtudiant = prompt("Entrer le nombre d'éleves dans la classe");
// let etudiant;
// while (classe.length < maxEtudiant) {
//   etudiant = prompt("Entrer le d'un de vos cammarades:");
//   classe.push(etudiant);
// }

//Exo 3

// let tab = [
//   "Adil",
//   "Agim",
//   "Ali",
//   "Antoine",
//   "Chris",
//   "Elvis",
//   "Fanny",
//   "Haroune",
//   "Ilias D",
// ];

// let i = 0;

// while (i < tab.length) {
//   console.log(`Bonjour ${tab[i]}`);

//   i++;
// }

//Exo 4

let fruits = ["pommes", "poires", "pêche", "cerises", "abricot", "raisins"];

while (fruits.length > 0) {
  fruits.pop();
  console.log(fruits);
}

//Exo 5

let panierLegumes = ["choux", "épinards", "poivrons", "oignons"];

let caisseLegumes = [];
// let i = panierLegumes.length - 1;

while (panierLegumes.length > 0) {
  // let legume = panierLegumes.pop();
  // console.log(panierLegumes.length);
  caisseLegumes.push(panierLegumes.pop());
  // i--;

  // console.log(panierLegumes);
  // console.log(caisseLegumes);
}

// Exo 6
// nom  Iouri Gagarine
// alert("Veuillez répondre à la question suivante:");
// let quest = prompt(
//   "Comment s'appele le premier homme à être aller dans l'espace?"
// );

// let rep = "Iouri Gagarine";

// while (quest != rep) {
//   quest =
//     "Réponse fausse réessayer: \n Comment s'appele le premier homme à être aller dans l'espace?";
// }

// alert("Félicitation Votre réponse est correct");
