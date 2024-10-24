console.log("--- Exercício 12 ---\n");

console.log("Código dos produtos: \n1001 - Valor:R$ 5,32 \n1324 - Valor:R$ 6,45 \n6548 - Valor:R$ 2,37 \n0987 - Valor:R$ 5,32 \n7623 - Valor:R$ 6,45")

let produto = prompt("Digite o código do produto: ");

let quant = parseInt(prompt("Digite a quantidade do produto: "));

let total;

if( produto == '1001' ){
    total= 5.32 * quant;
    console.log("O valor total de " + quant + " produtos é de " + total);
}
else if ( produto == '1324' ){
    total= 6.45 * quant;
    console.log("O valor total de " + quant + " produtos é de " + total);
}
else if ( produto == '6548'){
    total= 2.37 * quant;
    console.log("O valor total de " + quant + " produtos é de " + total);
}
else if ( produto == '0987' ){
    total= 5.32 * quant;
    console.log("O valor total de " + quant + " produtos é de " + total);
}
else if ( produto == '7623' ){
    total= 6.45 * quant;
    console.log("O valor total de " + quant + " produtos é de " + total);
}
else{
    console.log("O código do produto é inválido.")
}