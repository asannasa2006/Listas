console.log("SuperMercado")

let produto= prompt (parseFloat("Digite o preço do produto: "));
let totalparcial = produto *2;
let totalpromocional = produto/2;

console.log(produto);
console.log("Total a pagar:" + (totalparcial + totalpromocional));