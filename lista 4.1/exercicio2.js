console.log("N° inteiros e positivos");

let A = parseInt(prompt("Primeiro número: "));
let B = parseInt(prompt("Segundo número: "));
let C = parseInt(prompt("Terceiro número: "));

let r = Math.pow(A + B, 2);
let s = Math.pow(B + C, 2);

let D = (r + s) / 2;

console.log("O resultado da expressão é: " + D);
