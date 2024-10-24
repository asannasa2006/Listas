console.log("--- Exercício 10 ---");

let saldo_m = parseInt(prompt("Digite o seu saldo médio: "));

let credito;

if (saldo_m <= 200 ){
    credito = null;
    console.log("Seu saldo médio é: "+saldo_m+ "\n Seu crédito = 0");
}
else if(saldo_m >= 201 && saldo_m <= 400){
    credito= (20/100)*saldo_m;
    console.log("Seu saldo médio é: "+saldo_m+ "\n Seu crédito = "+credito);
}
else if(saldo_m >= 401 && saldo_m <= 600){
    credito= (30/100)*saldo_m;
    console.log("Seu saldo médio é: "+saldo_m+ "\n Seu crédito = "+credito);
}
else if(saldo_m > 601){
    credito= (40/100)*saldo_m;
    console.log("Seu saldo médio é: "+saldo_m+ "\n Seu crédito = "+credito);
}