console.log("---Exercício 2---");

let n1 = parseInt(prompt("Digite o 1º número; "));
let n2 = parseInt(prompt("Digite o 2º número; "));
let n3 = parseInt(prompt("Digite o 3º número; "));

if (n1 >= n2 && n1 > n3){
    console.log(n1 + "é maior.")
}
if (n2> n1 && n2> n3){
        console.log(n2 + "é maior.");
    }
else{ 
    console.log(n3 + "é maior.");
}