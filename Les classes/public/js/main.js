//Exo 1

// class Personnage {
//   constructor(age, nom, ville) {
//     this.age = age;
//     this.nom = nom;
//     this.ville = ville;
//   }

//   sePresenter() {
//     console.log(`Bonjour, je m'appelle ${this.nom}`);
//   }
// }

// let perso1 = new Personnage(28, "EL", "Bruxelles");

// let perso2 = new Personnage(30, "Hustler", "London");

// console.log(perso1, perso2);

// perso1.sePresenter();
// perso2.sePresenter();

//Exo 2

// class Lieu{
//   constructor(nom,contenu,ingredients){
//     this.nom = "cuisine";
//     this.contenu = contenu;
//     this.ingredients = ingredients;

//   }
// }

// //Instanciation
// let maison = new Lieu("maison",[]);

// let epicerie = new Lieu("epicerie",[],[]);

// let cusine = new Lieu("cuisine",[],[]);

// class Ingredient{
//     constructor(nom,etat,prix){
//       this.nom = nom;
//       this.etat = etat;
//       this.prix = prix;
//     }
// }

// //instanciation
// let poivron = new Ingredient("poivron","entier",1);

// let oignon = new Ingredient("oignon","entier",2);

// let oeuf = new Ingredient("oeuf","entier",4);

// let epice = new Ingredient("epice","moulu",3.25);

// let paprika = new Ingredient("paprika","moulu",1.5);

// let fromage = new Ingredient("fromage","coupé",16);

// class Personne{
//     constructor(nom,lieu,argent,panier){
//         this.nom = nom;
//         this.lieu = lieu;
//         this.argent = argent;
//         this.panier = panier;
//     }

//     seDeplacer(x){

//     }

//     payer(x){

//     }
// }

// //Instanciation

// let personnage = new Personne("Maxime","néant",100,[]);

//Exo 3

class Objet {
  constructor(nom, prix) {
    this.nom = nom;
    this.prix = prix;
  }
}

let pomme = new Objet("pomme", 0.5);

let mangue = new Objet("mangue", 1);

let panier = [pomme, mangue];

class Personnage {
  constructor(nom, sac, argent) {
    this.nom = nom;
    this.sac = sac;
    this.argent = argent;
  }

  prendre(objet) {
    this.sac.push(objet);
  }

  acheter(vendeur, objet) {
    this.prendre(...vendeur.sac.splice(vendeur.sac.indexOf(objet), 1));
    this.argent -= objet.prix;
    vendeur.argent += objet.prix;
  }
}

let perso1 = new Personnage("Paul", [pomme, mangue], 50);

let perso2 = new Personnage("Taulier", [], 20);
//new constructor()
perso2.acheter(perso1, pomme);

console.log(perso2, perso1);
