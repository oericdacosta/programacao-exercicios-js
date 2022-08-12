function verificarCategoria(salario){
    if(salario <= 350) return "A";
    if(salario > 350 && salario < 600) return "B";
    return "C";
}

let calcSalarioLiquido = (salario, imposto, gratificacao) => salario - imposto + gratificacao;

function calcGratificacao(salario, tempoServico){
    if(salario === 0) return 0;
    if(salario <= 500){
        return (tempoServico > 0 && tempoServico <= 3) ? 20 : 50;
    }
    if(tempoServico > 0 && tempoServico <= 3) return 23;
    if(tempoServico > 3 && tempoServico < 6) return 35;
    return 33;
}

function calcImposto(salario){
    if(salario < 200) return 0;
    if(salario >= 200 && salario < 450) return salario * 0.03;
    if(salario >= 450 && salario < 700) return salario * 0.08;
    return salario * 0.12;
}

function main(){
    let salarioBase;
    salarioBase = salarioBase ?? 200;
    if(Number.isNaN(salarioBase)) return;
    if(salarioBase < 0) return;

    let tempoServico;
    tempoServico = tempoServico ?? 3;
    if(Number.isNaN(tempoServico)) return;
    if(tempoServico < 0) return;

    let imposto = calcImposto(salarioBase);
    let gratificacao = calcGratificacao(salarioBase, tempoServico);
    let salarioLiquido = calcSalarioLiquido(salarioBase, imposto, gratificacao);
    let categoria = verificarCategoria(salarioLiquido);
    console.log(imposto, gratificacao, salarioLiquido, categoria);
}

main();