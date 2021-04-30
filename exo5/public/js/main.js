// partie 1
//1.
let phrase = "Bonjour tout le monde ";

// 2.
console.log(phrase.length);

// 3.
phrase = phrase.trimEnd();

console.log(phrase);

// 4.
console.log(phrase.length);
// 5.
console.log(phrase.charAt(phrase.length - 1));

// 6.
phrase = phrase.replace("Bonjour", "");
console.log(phrase);
// 7.
phrase = "Bonjour" + phrase.substr(0);

console.log(phrase);

// 8.
phrase = phrase.substr(0, 7);

console.log(phrase);

// 9.
phrase = phrase + " number";
phrase = phrase.replace("number", "string");
console.log(phrase);

// 10.
console.log(Math.round(Math.random() * 100));
