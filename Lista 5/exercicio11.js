console.log("--- Exercício 11 --- \n Selesone a média:");

let media = parseInt(prompt("\n Digite 1 para média aritmética. \nDigite 2 para média ponderada(3,3,4). \nDigite 3 para média harmônica. \n "));

console.log("----Digite as notas---- ");

let n1= parseFloat(prompt("Nota 1: "));
let n2= parseFloat(prompt("Nota 2: "));
let n3= parseFloat(prompt("Nota 3: "));

let resultado;

if (media == 1 ){
    console.log("Média Aritimética");
    resultado = (n1 + n2+ n3)/3;
    console.log("O resultado é: "+ resultado);
}

else if( media == 2){
    console.log("Média Ponderada");
    resultado = ((n1*3) + (n2*3)+ (n3*4))/10;
    console.log("O resultado é: "+ resultado);
}
else if( media == 3){
    console.log("Média Harmônica");
    resultado = 3 / ((1/n1) + (1/n2) + (1/n3));
    console.log("O resultado é: "+ resultado);
}
else{
    console.log("Média inválida.");
}