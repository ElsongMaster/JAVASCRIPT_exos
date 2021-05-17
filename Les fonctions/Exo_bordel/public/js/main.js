// let classeCoding19 = [];
// let bordel = () => {
//   let heure = 8;
//   let min = 43;
//   let cpt = 0;
//   let timing;

//   while (cpt < 47) {
//     if (min == 60) {
//       min = 0;
//       heure++;
//     }
//     if (min >= 0 && min < 10) {
//       timing = `${heure}h0${min}:`;
//     } else {
//       timing = `${heure}h${min}:`;
//     }

//     // console.log(timing);
//     switch (timing) {
//       case "8h43:":
//         // console.log(`il est ${timing} Fanny arrive en classe`);
//         classeCoding19.push("Fanny");
//         break;
//       case "8h44:":
//         alert(
//           `Chris rentre, allume son PC et commence à mettre à jour ses notes`
//         );
//         classeCoding19.push("Chris");

//         break;

//       case "8h45:":
//         alert(`Nasila Stan Mouna et Jean rejoignent la classe`);

//         classeCoding19.push("Nasila", "Stan", "Mouna", "Jean");

//         break;
//       case "8h51":
//         alert(
//           `Stan et Jean voient Django passer devant la porte et vont rejoindre`
//         );
//         classeCoding19.splice(classeCoding19.indexOf("Stan"), 0);
//         classeCoding19.splice(classeCoding19.indexOf("Jean"), 0);

//         break;
//       case "8h55:":
//         alert("Ali et Agim rentre en classe en faisant un maximum de bruit");
//         classeCoding19.push("Ali", "Agim");
//         break;
//       case "8h56:":
//         classeCoding19.push("Antoine");

//         alert(
//           "Antoine rentre en classeJ'ai besoin de me prendre un petit café avant de me mettre au travail, j'arrive"
//         );
//         classeCoding19.pop();
//         break;
//       case "8h59:":
//         alert("Yassine arrive avec sa petite plante. Quelle niews les gars!");
//         classeCoding19.push("Yassine");
//         break;
//       case "9h00":
//         alert("Seifedin et Haroune rentrent et observent tout le monde");
//         classeCoding19.push("Seifedin", "Haroune");
//         break;

//       case "9h03:":
//         break;
//       case "9h04":
//         alert("Kevin rentre en classe avec sa petite tasse de café");
//         classeCoding19.push("Kevin");
//         break;
//       case "9h05:":
//         alert(
//           "Van Hoa et kevin rentre en classe tous contents de n'avoir que 5 min de retard"
//         );
//         alert(
//           "Fanny: Vous êtes en retard! /n Bon j'arrive je dois rapidement aller discuter avec le boss de molengeek"
//         );
//         classeCoding19.splice(classeCoding19.indexOf("Fanny"), 0);
//         break;
//       case "9h10:":
//         alert("Adil rentre avec sa petite tasse de café");
//         classeCoding19.push("Adil");
//         break;
//       case "9h20:":
//         alert("Fanny rentre en classe et commence à  donner cours");
//         classeCoding19.push("Fanny");
//         break;
//       case "9h30:":
//         alert("Lira rentre en classe et tout le monde le regarde");
//         break;
//     }
//     cpt++;
//     min++;
//   }
//   alert(classeCoding19);
// };

// //push

// bordel();

// //Correction;

// let classeCoding19 = [];

// let ajouter = (prenom, phrase) => {
//   let tabTemp = prenom.split();
//   for (let i = 0; i < tabTemp.length; i++) {
//     classeCoding19.push(tabTemp[i]);
//   }
//   console.log(phrase);
//   console.log(classeCoding19);

// };

// let retirer = (prenom, phrase, nbr) => {
//   classeCoding19.splice(classeCoding19.indexOf(prenom), nbr);
//   console.log(phrase);
//   console.log(classeCoding19);
// };

// ajouter("Elvis", "Chouette c'est bientôt le weekend");

let addition = (nb1, nb2) => {
  return nb1 + nb2;
};

let resFunct = addition(2, 3);

console.log(`funct1:${resFunct}`);

let additionBis = (nb1, nb2) => {
  let res;

  res = nb1 + nb2;
};

let resFunct1 = additionBis(2, 3);

console.log(`funct2:${resFunct1}`);
