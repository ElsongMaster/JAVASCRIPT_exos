// let day = prompt("Quel jour sommes-nous?");
// switch (day) {
//   case "lundi":
//     alert("J'ai cours et je m'occupe comme je peux");
//     break;

//   case "mardi":
//     alert("J'ai cours et je m'occupe comme je peux");

//     break;

//   case "mercredi":
//     alert("J'ai cours et je m'occupe comme je peux");

//     break;

//   case "jeudi":
//     alert("J'ai cours et je m'occupe comme je peux");

//     break;

//   case "vendredi":
//     alert("J'ai cours et je m'occupe comme je peux");

//     break;
//   case "samedi":
//   case "dimanche":
//     break;
//   default:
//     alert("Entrer un vrai jour de la semaine");
//     break;
// }

// //2
// let meteo = prompt("Quelle temps fait-il");
// switch (meteo) {
//   case "pluie":
//     alert("Il pleut. Je prend un parapluie");

//     break;

//   case "soleil":
//     alert("Il fait ensoleillé. Je peux sortir en t-shirt et shirt");
//     break;

//   case "neige":
//     alert("Il neige. prendre mon petit thermos avec une boisson chaude ");
//     break;

//   case "nuages":
//     alert("Il y a des nuages, il y a des risques de pluie");
//     break;

//   case "orages":
//     alert("prevoir un casque anti bruit");
//     break;

//   default:
//     break;
// }

//Exo 3

let nbr1 = parseInt(prompt("rentrer un nombre "));

let operateur = prompt("Rentrer le symbole de l'opérateur de calcul");

let nbr2 = parseInt(prompt("Rentrer un second nombre"));

let res;

switch (operateur) {
  case "/":
    res = nbr1 / nbr2;
    alert(`le résultat de la division est: ${res}`);

    break;

  case "*":
    res = nbr1 * nbr2;
    alert(`le résultat de la multiplication est: ${res}`);

    break;

  case "+":
    res = nbr1 + nbr2;
    alert(`le résultat de l'addition est: ${res}`);

    break;

  default:
    alert("Le symbole rentrer n'est pas reconnu");
    break;
}
