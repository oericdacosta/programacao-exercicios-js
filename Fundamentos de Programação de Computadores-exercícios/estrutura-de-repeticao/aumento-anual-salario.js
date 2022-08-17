function calcAumentos(salarioInicial, percentualAumento, anoAtual){
    let qtdAumentos = anoAtual - 2007;
    let novoSalario = salarioInicial + percentualAumento * salarioInicial;
    for(let i = 1; i <= qtdAumentos; i++){
        percentualAumento *= 2;
        novoSalario = novoSalario + percentualAumento * novoSalario;
    }
    return Number(novoSalario.toFixed(2));
}

function main(){
    let salarioInicial = 1000;
    let percentualAumento = 0.015;
    let anoAtual;
    let salarioAtual = calcAumentos(salarioInicial, percentualAumento, anoAtual);
    console.log(salarioAtual);
}

main();