console.log("Pontos");

let x1 = parseInt(prompt("Valor do ponto x1:"));
let y1 = parseInt(prompt("Valor do ponto y1:"));
let x2 = parseInt(prompt("Valor do ponto x2:"));
let y2 = parseInt(prompt("Valor do ponto y2:"));

let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

console.log("A distância entre os pontos é: " + distance);