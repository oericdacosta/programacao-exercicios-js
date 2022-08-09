let calcQtdRacao = (peso, racao1, racao2) => peso - 5 * (racao1 + racao2);

function main(){
    let pesoRacaoEmGramas = 1000;
    let qtdRacaoGato1 = 100;
    let qtdRacaoGato2 = 100;
    let racaoFinal = calcQtdRacao(pesoRacaoEmGramas, qtdRacaoGato1, qtdRacaoGato1);
    console.log(racaoFinal);
}

main();