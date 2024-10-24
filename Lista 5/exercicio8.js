console.log("---Exercício 8 ---");

let cachorro_quente = 100;
let bauru_simples = 101;
let bauru_c_ovo = 102;
let hamburgue = 103;
let chesseeuguer = 104;
let refrigerante = 105;

let pedido = parseInt(prompt("Digite o código do pedido: "));

let valor;

if (pedido == cachorro_quente){
    valor = 1.20;
}
else if (pedido == bauru_simples){
    valor = 1.30;
}
else if (pedido == bauru_c_ovo){
    valor = 1.50;
}
else if (pedido == hamburgue){
    valor = 1.20;
}
else if (pedido == chesseeuguer){
    valor = 1.30;
}
else if (pedido == refrigerante){
    valor = 1;
}
else {
    console.log("Código do pedido inválido.");
    valor = 0; 
}

if(valor>0){
    console.log("O valor do pedido é R$ " + valor.toFixed(2));
}