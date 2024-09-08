console.log("Evento da Fábrica");

let segundos= parseInt(prompt("Digite os segundos: "));

const horas= 3600; // número de segundo em uma hora
const min= 60; // números de segundos por min

//calcular hora
let horas_total= Math.floor(segundos/horas);
let resto_segundos = segundos % horas; 

//calcular minutos
let min_total = Math.floor(resto_segundos/ min);

//restante de segundos 
let segundos_total= resto_segundos % min

console.log("Tempo total: " + horas_total + " horas, " + min_total + " minuto/s e " + segundos_total + "segundos.")

