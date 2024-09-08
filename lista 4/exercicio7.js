console.log("--Preço total do veículo--");

let fabrica = parseFloat(prompt("Digite o valor de fábrica do veículo: "));

//calcular o preço do distribuidor (28%)
let distribuidor1 = fabrica * 0.28;
let distribuidor = distribuidor1.toFixed(2);//para aparecer apenas 2 num. decimais

//calcular impostos (45%)
let imposto = fabrica * 0.45;
let impostos = imposto.toFixed(2);

//total
let total = fabrica + distribuidor1 + imposto;

console.log("Distribuidor: "+ distribuidor);
console.log("Impostos: " + impostos);
console.log("O preço total é de: " + total);