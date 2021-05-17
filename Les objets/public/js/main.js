// //Exo 1
// let perso1 = {
//   Nom: "Dushime",
//   prenom: "Elvis",
//   age: 28,
//   taille: "1m77",
// };

// console.log(monObj);

// //Exo 2
// let perso2 = {
//   Nom: "Elson",
//   prenom: "G",
//   age: 28,
//   taille: "1m77",
// };

// let perso3 = {
//   Nom: "",
//   prenom: "",
//   age: "",
//   taille: "",
// };

// //Exo 3

// perso3.Nom = perso1.Nom;
// perso3.prenom = perso1.prenom;

// perso3.age = perso2.age;

// perso3.taille = "1m88";

// console.log(perso3);

//Exo 4

//Exo 5

// let francois = {
//   nom: "François",
//   panier: ["salade", "tomate"],
//   derober() {
//     while (sergio.panier.length > 0) {
//       this.panier.push(
//         ...sergio.panier.splice(
//           Math.floor(Math.random() * sergio.panier.length),
//           1
//         )
//       );
//     }
//   },
// };
// let sergio = {
//   nom: "Sergio",
//   panier: ["percil", "oiognons"],
// };

// francois.derober();
// console.log(francois.panier);
// console.log(sergio.panier);

// //Exo 4

// let vieille_dame = {
//   age: 87,
//   nom: "Madame Michu",
//   moral: "mal",
//   objet: "canne",
//   parler() {
//     switch (this.moral) {
//       case "bien":
//         console.log(`Bonjour ${vieille_homme.nom.NomDeFamille} ${vieille_homme.nom.prenom}`);

//         break;

//       case "bien":
//         break;
//       default:
//         console.log(
//           `vous me déranger, je vais vous  frapper avec ma ${this.objet}`
//         );

//         break;
//     }
//   },
// };

// let vieille_homme = {
//   nom:{ prenom:"Le sapologue",nomDeFamille:"Monsieur"}

//   adoucir() {
//     vieille_dame.moral = "bien";
//   },
// };

// vieille_dame.parler();
// vieille_homme.adoucir();
// vieille_dame.parler();

//Exo Bonus 2

let magasin = { chocolat: 2, tartine: 3.5 };
let client = {
  panier: [],
  budget: 30,
};

console.log("Je rentre dans le magasin");

console.log(`J'achète un chocolat qui coute ${magasin.chocolat}€`);
client.panier.push(magasin.chocolat);
console.log(`J'achète une tartine qui coute ${magasin.tartine}€`);
client.panier.push(magasin.tartine);

client.panier.forEach((elem) => {
  client.budget -= elem;
});

console.log(client.budget);
console.log(client.panier);

//Exo 2 bonus
