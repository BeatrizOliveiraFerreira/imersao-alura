var numeroSecreto = parseInt(Math.random() * 1001);

var tentativas = 0;

while(chute != numeroSecreto) {
    var chute = prompt('Digite um número entre 0 e 1000')
    ///
    if(chute == numeroSecreto) {
        alert('Acertou')
    } else if (chute > numeroSecreto) {
        alert(`Errou ... o número secreto é menor`)
    } else if (chute < numeroSecreto) {
        alert(`Errou ... o número secreto é maior`)
    }
    
    tentativas++;
}

if (tentativas > 15) {
    alert('Já deu 15 tentativas, você perdeu!!')
}

