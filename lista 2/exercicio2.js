console.log("Lan House");

let tempoDeUso = prompt (parseInt("Qual o tempo de uso?:"));
let divisao = tempoDeUso/15;
let arredondamento = Math.ceil (divisao);

console.log(tempoDeUso + "minutos");
console.log("Valor a pagar: " + (arredondamento*2));