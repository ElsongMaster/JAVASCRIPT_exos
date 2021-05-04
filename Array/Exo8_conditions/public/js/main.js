// //1.
// console.log(1 == "1");

// //2.
// console.log(1 === "1");

// //3.

// let prenom = prompt("Quelle est ton prenom ?");
// if (prenom.length < 5) {
//   alert("ton prenom est trop court");
// }

// //4.

// res = prompt("Résous cette addation: \n 5 + 5 = ");

// if (res == 10) {
//   alert("Félicitation la réponse est correct");
// } else {
//   alert("La réponse est incorrect");
// }

// //5.

// let res2 = prompt("Donnez la réponse de la multiplication suivante: \n 5x5 =");

// if (res == 25) {
//   alert("Félicitation le réponse était bien 25 ");
// } else {
//   alert(`dommage tu n'était qu' à ${Math.abs(res - 25)} de la bonne réponse`);
// }

// //6.
// let tab = [];
// let val1 = prompt("Veuillez rentrer une valeur:");
// tab.push(val1);
// let val2 = prompt("Veuillez rentrer une valeur:");
// tab.push(val2);
// let val3 = prompt("Veuillez rentrer une valeur:");
// tab.push(val3);

// if (tab.length == 3) {
//   console.log(tab);
// }

// //7.

// let grandNombres = [];
// let petitNombres = [];

// val = prompt("Veuillez rentrer une valeur");
// if (val >= 12) {
//   grandNombres.push(val);
// } else {
//   petitNombres.push(val);
// }

// alert(`petitNombres: [${petitNombres}] \n grandNombres:[ ${grandNombres}] `);

//8.
alert(
  "Début du jeu de devinette:/n Vous devez entrer une valeur entre 0 et 10 et on a maximum 5 essaies pour trouver le nombre choisis "
);

let nbToFind = 6;
let res;
let nbEssaie = 0;
let find = false;
let endGame;

res = prompt("Veuillez rentrer un nombre:");
find = res == nbToFind;
if (find == false && nbEssaie <= 4) {
  nbEssaie = nbEssaie + 1;
  if (Math.abs(nbToFind - res) < 5) {
    alert("Le chiffre entrée n'est pas le bon mais vous n'êtes pas loin");
  } else {
    alert(
      "Le chiffre rentré n'est pas le bon et vous êtes plûtot éloigner de ce dernier"
    );
  }
} else if (find == true) {
  alert(
    `Féliciation le nombre à  trouver était bien: ${nbToFind} \n Fin du jeu.`
  );
} else {
  alert(
    "La partie est terminé et vous n'avez pas réussi à deviner le nombre à trouver. Pas de chance"
  );
}
endGame = find == true || nbEssaie >= 4;

if (endGame == false) {
  nbEssaie = nbEssaie + 1;
  res = prompt("Veuillez rentrer un nombre:");
  find = res == nbToFind;
  if (find == false && nbEssaie <= 4) {
    if (Math.abs(nbToFind - res) < 5) {
      alert("Le chiffre entrée n'est pas le bon mais vous n'êtes pas loin");
    } else {
      alert(
        "Le chiffre rentré n'est pas le bon et vous êtes plûtot éloigner de ce dernier"
      );
    }
  } else if (find == true) {
    alert(
      `Féliciation le nombre à  trouver était bien: ${nbToFind} \n Fin du jeu.`
    );
  } else {
    alert(
      "La partie est terminé et vous n'avez pas réussi à deviner le nombre à trouver. Pas de chance"
    );
  }
  endGame = find == true || nbEssaie >= 4;
}

if (endGame == false) {
  nbEssaie = nbEssaie + 1;
  res = prompt("Veuillez rentrer un nombre:");
  find = res == nbToFind;
  if (find == false && nbEssaie <= 4) {
    if (Math.abs(nbToFind - res) < 5) {
      alert("Le chiffre entrée n'est pas le bon mais vous n'êtes pas loin");
    } else {
      alert(
        "Le chiffre rentré n'est pas le bon et vous êtes plûtot éloigner de ce dernier"
      );
    }
  } else if (find == true) {
    alert(
      `Féliciation le nombre à  trouver était bien: ${nbToFind} \n Fin du jeu.`
    );
  } else {
    alert(
      "La partie est terminé et vous n'avez pas réussi à deviner le nombre à trouver. Pas de chance"
    );
  }
  endGame = find == true || nbEssaie >= 4;
}

if (endGame == false) {
  nbEssaie = nbEssaie + 1;
  res = prompt("Veuillez rentrer un nombre:");
  find = res == nbToFind;
  if (find == false && nbEssaie <= 4) {
    if (Math.abs(nbToFind - res) < 5) {
      alert("Le chiffre entrée n'est pas le bon mais vous n'êtes pas loin");
    } else {
      alert(
        "Le chiffre rentré n'est pas le bon et vous êtes plûtot éloigner de ce dernier"
      );
    }
  } else if (find == true) {
    alert(
      `Féliciation le nombre à  trouver était bien: ${nbToFind} \n Fin du jeu.`
    );
  } else {
    alert(
      "La partie est terminé et vous n'avez pas réussi à deviner le nombre à trouver. Pas de chance"
    );
  }
  endGame = find == true || nbEssaie >= 4;
}

if (endGame == false) {
  nbEssaie = nbEssaie + 1;
  res = prompt("Veuillez rentrer un nombre:");
  find = res == nbToFind;
  if (find == false && nbEssaie <= 4) {
    if (Math.abs(nbToFind - res) < 5) {
      alert("Le chiffre entrée n'est pas le bon mais vous n'êtes pas loin");
    } else {
      alert(
        "Le chiffre rentré n'est pas le bon et vous êtes plûtot éloigner de ce dernier"
      );
    }
  } else if (find == true) {
    alert(
      `Féliciation le nombre à  trouver était bien: ${nbToFind} \n Fin du jeu.`
    );
  } else {
    alert(
      "La partie est terminé et vous n'avez pas réussi à deviner le nombre à trouver. Pas de chance"
    );
  }
}
