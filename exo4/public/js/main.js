prompt("Quel est ton prénom ?");

// partie 2
prompt("Quel est ton age ?");

// partie 3
let nom_complet1 = prompt("Quel est ton nom et prenom?");
alert(nom_complet1);

//partie 4

let nom_complet2 = prompt("Quel est ton nom et prenom?").toUpperCase();

alert(`Bonjour ${nom_complet2}`);

function hello(prenom, nom) {
  alert(`Bonjour ${prenom} ${nom}`);
}

// let prenom = 'Elvis';
// let nom = 'Dushime';
hello("Elvis", "Dushime");
