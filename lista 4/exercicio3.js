console.log("Idade em dias");

let anos = parseInt(prompt("Anos: "));
let meses = parseInt(prompt("Meses: "));
let dias = parseInt(prompt("Dias: "));

let dias_ano =  anos*365
let dias_meses = meses*30

let total = dias_ano + dias_meses + dias;

console.log("Idade em dias: " + total);