
console.log("Idade em anos");

const dias_em_anos= 365.25; // para contar anos bissextos
const dias_em_meses= 30.417; //quantidade aprox. de dias por mês.

let dias = parseInt(prompt("Quantos dias você tem: "));

//calcular anos
let anos= Math.floor(dias/dias_em_anos); 
let resto_de_dias = Math.floor(dias % dias_em_anos); //o % é o resto da divisão entre as variáveis

//calcular meses
let meses = Math.floor(resto_de_dias/dias_em_meses); // O math.floor arredenda para o menor número inteiro (ex. 34.5= 34)
resto_de_dias = Math.floor(resto_de_dias % dias_em_meses);

console.log("São aproximadamente " + anos + " ano/s, " + meses + " mês/meses e " + resto_de_dias + "dias/s")
console.log("Idade em anos"); 