myVar = 2;
let tabExo = ["String", myVar, 5, 7, true];

console.log(tabExo);

//2.
console.log(tabExo.length);

//3.

tabExo.pop();

console.log(tabExo);

//4.

tabExo.shift();

console.log(tabExo);

//5.

tabExo.push("Element1");
tabExo.push(false);

console.log(tabExo);

//6.

tabExo.unshift("nickname", "ElsonG", 12);

console.log(tabExo);

//7.

tabExo.reverse();

console.log(tabExo);

//8.

let box_fanny = [];
//premier objet
box_fanny.push("firstElt");

// let secondElt = prompt("Tu peux taper le 2eme elements que tu veut rajouter:");
let secondElt = "Whatsup";
box_fanny.push(secondElt);

alert(box_fanny);

//3ieme objet avant les autres
// let thirdElt = prompt("Tu peux taper le 3eme elements que tu veut rajouter:");
let thirdElt = "Eastcoast";
box_fanny.unshift(thirdElt);
alert(box_fanny);

//3 objet a la fin
box_fanny.push(1, 2, 3);

alert(box_fanny);

//suppresion 3 premier objets + Rajout d'un

box_fanny.splice(0, 3, "premier");

alert(`nb d'objet box_fanny:${box_fanny.length}`);

//suppresion des 2 derniers elements

box_fanny.pop();
box_fanny.pop();

//suppresion des 2 derniers elements
box_fanny.shift();
box_fanny.shift();
