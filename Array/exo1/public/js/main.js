let codings = ["coding11", "coding12", "coding13"];

//1.
console.log(codings);

//2.
console.log(codings.length);

//3.

console.log(codings[0]);
console.log(codings[1]);
console.log(codings[2]);

//4.
codings.push("Elvis");

//5.

console.log(codings);

//6.

codings.splice(codings.length - 1, 1, "Cancelled");

//7.

console.log(codings[3]);

//8.

codings.pop();

//9.

console.log(codings);
