console.log("Idade em anos");

let dias = parseInt(prompt("Quantos dias você tem: "));

let anos = dias/365.25;
let meses = (anos/12)*10;
let dias_sobrantes= (meses/30.417)*100;

let ano= Math.trunc(anos);
let mesess= Math.round(meses);
let dias_sobrantes2= Math.round(dias_sobrantes);

console.log("Você tem " + anos + " anos," + mesess + " meses e " + dias_sobrantes2 + " dia");
