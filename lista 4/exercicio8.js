console.log("--Equações Lineares--");

let A = parseInt(prompt("Digite A: "));
let B = parseInt(prompt("Digite B: "));
let C = parseInt(prompt("Digite C: "));
let D = parseInt(prompt("Digite D: "));
let E = parseInt(prompt("Digite E: "));
let F = parseInt(prompt("Digite F: "));

//calculos
let denominador = (A*E) - (B*D);
let x = (C*F)-(B*F)/denominador;
let y = (A*F)-(C*D)/denominador;

let arredondado_X = x.toFixed(2);
let arredondando_Y = y.toFixed(2);

console.log("O valor de x é: " + arredondado_X);
console.log("O valor de Y é: " + arredondando_Y);