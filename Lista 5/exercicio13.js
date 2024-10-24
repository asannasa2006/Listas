console.log("--- Exercício 13 ---\n");

console.log("Código dos produtos: \n ABCD  - Valor:R$ 5,30 \nXYPK - Valor:R$ 6,00 \nKLMP - Valor:R$ 3,20 \nQRST - Valor:R$ 2,50\n");

let produto = prompt("Digite o código do produto: ");

let quant = parseInt(prompt("Digite a quantidade do produto: "));

let total;

if( produto == 'ABCD' ){
    total= 5.30 * quant;
    console.log("O valor total de " + quant + " produtos é de " + total.toFixed(2));
}
else if ( produto == 'XYPK' ){
    total= 6.00 * quant;
    console.log("O valor total de " + quant + " produtos é de " + total.toFixed(2));
}
else if ( produto == 'KLMP'){
    total= 3.20 * quant;
    console.log("O valor total de " + quant + " produtos é de " + total.toFixed(2));
}
else if ( produto == 'QRST' ){
    total= 2.50 * quant;
    console.log("O valor total de " + quant + " produtos é de " + total.toFixed(2));
}
else{
    console.log("O código do produto é inválido.")
}