console.log("Circunferência: Longitude da circunferência e área");

let raio = prompt(parseFloat("Digite o raio da circunferência:"));
let pi = 3.1415;

let area = pi * (raio*raio);
let longitude = 2 * pi * raio;

let areaarrendondada = area.toFixed(2);
let longitudeareedondada = longitude.toFixed(2);

console.log("Área:" + areaarrendondada);
console.log("Longitude:" + longitudeareedondada);
