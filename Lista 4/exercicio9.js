console.log("--- Exercício 9 ---");

let sexo = parseInt(prompt("Digite 1 para sexo FEMININO e 2 para MASCULINO."));
let h = parseFloat(prompt("Digite sua altura: "));

let peso_ideal;

if (sexo == 1 ){
    peso_ideal = (62.1*h)-44.7;    
}

if (sexo == 2 ){
    peso_ideal= (72.7 *h) -58;
}
else{
    console.log("O seu sexo é inválido.");
    peso_ideal= null
}

if(peso_ideal !== nul ){
console.log("Seu peso idel é: " + peso_ideal);
}