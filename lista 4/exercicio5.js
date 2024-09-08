console.log("Média Ponderada (valor máx.10)");

let AV1 = parseFloat(prompt("Digite a AV1: "));
let AV2 =parseFloat(prompt("Digite a AV2: "));
let AV3 = parseFloat(prompt("Digite a AV3: "));

//multiplicar cada nota pelo seu peso
let AV1_nxp = AV1 * 2;
let AV2_nxp = AV2 * 3;
let AV3_nxp = AV3 * 5;

//somando as (notas+pesos)
let soma= AV1_nxp + AV2_nxp + AV3_nxp;

//soma dos pesos
let pesos = 2+3+5;

//resultado
let resultado = soma/pesos;

console.log("Nota final é = " + resultado);