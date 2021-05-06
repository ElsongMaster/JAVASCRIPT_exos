//Exo 1

// let nb1 = prompt("Rentrez un nombre:");

// let nb2 = prompt("rentrer de nouveau un nombre:");

// alert(`Le nombre ${nb1} et le nombre ${nb2} sont-ils égaux ?: ` + (nb1 == nb2));

//Exo 2

// let nb1 = prompt("Rentrez un nombre:");

// let nb2 = prompt("rentrer de nouveau un nombre:");

// alert(`Le nombre ${nb1} est-il plus petit que le nombre ${nb2}?: ` + (nb1 < nb2));

//Exo 3

// let nb1 = prompt("Rentrez un nombre:");

// let nb2 = prompt("rentrer de nouveau un nombre:");

// let nb3 = prompt("rentrer de nouveau un nombre:");

// alert(
//   `La somme du nombre ${nb1} + le nombre ${nb2} est-elle plus grande que le nombre ${nb3}: ` +
//     (nb1 + nb2 > nb3)
// );

//Exo 4
// let phrase = prompt("Veuillez rentrer une phrase:");

// let rep = parseInt(
//   prompt(
//     "Pouvez vous rentrer un nombre qui représente une estimation de la longueur de la phrase:"
//   )
// );

// if (rep == phrase.length) {
//   alert("Félicitation vous avez correctement estimez la longueur de la phrase");
// } else {
//   alert(
//     "Réponses incorrect, vous etiez à  " +
//       Math.abs(rep - phrase.length) +
//       " unités de la bonne réponse"
//   );
// }

//Exo 5

// let prenom = prompt("Veuillez rentrer votre prénom:");

// if (prenom.length == 0) {
//   prenom = prompt(
//     "Attention vous devez remplir le champs ci-dessous, Quel est votre prénom?"
//   );
// } else {
//   alert(`Bonjour ${prenom}`);
// }

//Exo 6

// let rep = confirm("Voulez-vous vous abonné?");

// if (rep == true) {
//   let formule = prompt(
//     "Quelle formule voulez-vous prendre: 'Luxe' ou 'Normal'?"
//   );

//   if (formule == "Luxe") {
//     alert("Félicitation vous avez choisi la formule Luxe !");
//   } else if (formule == "Normal") {
//     alert("Merci pour votre abonnement");
//   } else {
//     rep = confirm("êtes vous sur de ne vouloir choisir aucune des 2 options ?");

//     if (rep == true) {
//       alert("C'est dommage, bonne journée");
//     } else {
//       rep = prompt("Quelle formule voulez-vous prendre: 'Luxe' ou 'Normal'?");
//     }
//   }
// }

//Exo 7

// let quest1 = prompt(
//   "Quelle acteur americain incarne le héros du  film de christopher nolan de 2014 'Interstellar' ?"
// );

// let quest2 = prompt("Quel célebre dictateur dirigea l'URSS dans les années 20");

// let isRight1 = quest1.toUpperCase() == "MATTHEW MCCONAUGHEY";

// let isRight2 = quest2.toUpperCase() == "LENINE";

// if (isRight1 == true && isRight2 == true) {
//   alert("Félicitation vous avez répondu correctement au Quiz");
// } else if (isRight1 == true || isRight2 == true) {
//   if (isRight1 == false) {
//     alert("Tu y es presque, la question 1 n'est pas correct");
//   } else {
//     alert("Tu y es presque, la question 2 n'est pas correct");
//   }
// } else {
//   alert("Vous avez échoué, aucune des réponses n'est correct");
// }

//8

// let age = parseInt(prompt("Veuillez rentrer votre age:"));
// let msg;
// if (age <= 0) {
//   msg = "Vous n'êtes même pas nés, n'essayez même pas de tricher";
// } else if (parseInt(age) < 18 ) {
//   msg = "Vous êtes mineur, l'accès est réservé aux grands";
// else if(age == 18){
//     msg = "Vous pouvez y aller mais c'est tout juste");
// }
// } else if (age < 100) {
//   msg = "Vous êtes encore vivant? Eviter de voir ce film pour le rester.";}
// else{
//     msg = "Vous êtes majeur, vous pouvez réserver";
// }

// alert(msg);

//9
// part du principe que la saisie est bonne

// alert("Veuillez repondre aux questions suivantes par 'oui' ou 'non'");

// let rep1 = prompt("est-ce que vous êtes riche ?") == "oui";

// let rep2 = prompt("Voulez-vous partir en vacance ?") == "oui";

// let rep3 = prompt("est-ce que vous avez un chat ?") == "oui";

// if (!rep2) {
//   alert("Pas de problème, ne partez pas en vacances");
// }

// if (!rep1 || rep3) {
//   alert("Même si vous le voulez vous ne pouvez pas partir.");
// }

// if (rep1 && !rep3) {
//   alert("Vous pourriez partir en vacances si vous le voulez");
// }

// if (rep1 && rep2 && !rep3) {
//   alert("tout est parfait partez en vacances");
// }

// if (!rep1 && !rep2 && !rep3) {
//   alert("tous ce qu'elle dit est faux");
// }
