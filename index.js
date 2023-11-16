// desafio criptomoedas
var nome = prompt("Digite seu nome");
var opcao = prompt("Digite 1 para para converter para criptomoedas ou  2 para anos Luz?");

if (opcao === '1') {
    var criptomoedas = 0.001;
    var valorEmDolar = parseFloat(prompt("Digite quanto você quer converter para Dolar: "));
    valorEmReal = valorEmDolar * criptomoedas;
    valorEmReal = valorEmReal.toFixed(2);
    alert("Olá " + nome + " o valor convertido em real é : " + "R$" + valorEmReal);
}

else {
    var anosLuz = 9.500000000000;
    var valorEmAnoNormal = parseFloat(prompt("Digite quantos anos você converter para anos luz: "));
    valorNaTerra = valorEmAnoNormal * anosLuz;

    alert("Olá " + nome + " o ano em anos luz é: " + valorNaTerra);  
}




