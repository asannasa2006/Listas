console.log("---Exercício 7 ---");

let n1 = parseInt(prompt("Digite um número inteiro: "));

if (n1%2 === 0 ){
    console.log("O número " + n1 + " é par. ");
}
else {
    console.log("O número " + n1 + " é ímpar.");
}

if (n1>0){
    console.log("O número " + n1 +  " é positivo ");
} else if (n1 < 0) {
    console.log("O número " + n1 + " é negativo.");
} else {
    console.log("O número é zero.");
}