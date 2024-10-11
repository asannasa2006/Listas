console.log("---Exercício 1---");

let nota_1 = parseFloat(prompt("Digite a nota 1: "));
let nota_2 = parseFloat(prompt("Digite a nota 2: "));
let nota_3 = parseFloat(prompt("Digite a nota 3: "));

let nota_final = (nota_1 + nota_2 + nota_3) / 3;

if (nota_final >= 6.0) {
    console.log("Aprovado");
} 
else {
    console.log("Reprovado");
}
