// //Exo 1
// let addition = (nb1, nb2) => {
//   return nb1 + nb2;
// };

// console.log(`Résultat addition: ${addition(2, 3)}`);

// //Exo 2

// let soustraction = (nb1, nb2) => {
//   return nb2 - nb1;
// };

// console.log(`Résultat soustraction: ${soustraction(2, 3)}`);

// //Exo 3

// let multiplication = (nb1, nb2) => {
//   return nb1 * nb2;
// };

// console.log(`Résultat multiplication: ${multiplication(2, 3)}`);

// //Exo 4

// let division = (nb1, nb2) => {
//   return nb1 / nb2;
// };

// console.log(`Résultat division: ${division(2, 3)}`);

// //Exo 5

// let modulo = (nb1, nb2) => {
//   return nb1 % nb2;
// };

// console.log(`Résultat modulo: ${modulo(2, 3)}`);

// //Exo 6

// let racine = (nb) => {
//   return Math.sqrt(nb);
// };

// console.log(`Résultat racine: ${racine(4)}`);

// //Exo 7

// let exposant = (nb1, nb2) => {
//   return Math.pow(nb1, nb2);
// };

// console.log(`Résultat exposant: ${exposant(2, 3)}`);

// //Exo 8

// let capitalize = (chaines) => {
//   return chaines[0].toUpperCase() + chaines.substr(1).toLowerCase();
// };

// console.log(`Résultat capitalize: ${capitalize("elvis")}`);

// //Exo 9

// let calcul = (nb1, operator, nb2) => {
//   let res;

//   switch (operator) {
//     case "+":
//       res = addition(nb1, nb2);
//       break;

//     case "-":
//       res = soustraction(nb1, nb2);
//       break;

//     case "*":
//       res = multiplication(nb1, nb2);
//       break;

//     case "/":
//       res = division(nb1, nb2);
//       break;

//     default:
//       console.log("l'opérateur entrée n'existe pas");
//       break;
//   }

//   return res;
// };

// console.log(`Résultat calcul: ${calcul(2, "/", 3)}`);

//Exo 10

// let reverseNumber = (serieNb) => {
//   return serieNb.split("").reverse().join("");
// };

// let serieNb = prompt("Veuillez rentrer une serie de nombre à l'envers");

// console.log(reverseNumber(serieNb));

let divPart2 = (nb) => {
  let nb = nb % 2;
  switch (nb) {
    case 0:
      alert(`le num ${nb} est divisible par 2 \n ${nb}:2 = ${nb / 2}`);
      break;
    case 1:
      alert("Ce nombre n'est pas divisible par 2");
      break;
    default:
      alert("Veuillez rentrer une valeur correct");
      break;
  }
};

// let nb = prompt("Veuillez rentrer un nombre");
// divPart2(nb);

// let logIn = (mdp) => {
//   while (mdp != "mdp") {
//     mdp = prompt("Le mot de passe rentrer est incorrect, Veuillez réessayer!");
//   }

//   alert("Vous êtes connecté");
// };

// let mdp = prompt("Veuillez rentrer votre mot de passe");

// logIn(mdp);
