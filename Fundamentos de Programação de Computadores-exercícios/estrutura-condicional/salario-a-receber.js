let calcSalarioFuncionario = (salarioLiquido, gratificacao) => Number((salarioLiquido + gratificacao).toFixed(2));

let calcGratificacao = salarioLiquido => (salarioLiquido <= 300) ? 100 : 50;

let calcSalarioLiquido = (salarioBruto, impostoDeRenda) => salarioBruto - (salarioBruto * impostoDeRenda);

function calcImposto(salarioBruto){
    if(salarioBruto < 200) return 0;
    return (salarioBruto >= 200 && salarioBruto < 500) ? 0.1 : 0.2;
}

let calcSalarioBruto = (salarioMes, valorHoraExtra) => salarioMes + valorHoraExtra;

function acrescentarDependentes(salario,numDependentes){
    if(numDependentes < 0 || Number.isNaN(numDependentes)) return;
    numDependentes = numDependentes ?? 0;
    return salario + (numDependentes * 32);
}

let calcSalarioMes = (horasTrabalhadas, valorHoraTrabalho) => horasTrabalhadas * valorHoraTrabalho;

function calcHoraExtra(valorHoraTrabalho,horasExtras){
    if(horasExtras < 0 || Number.isNaN(horasExtras)) return;
    horasExtras = horasExtras ?? 0;
    return horasExtras * (valorHoraTrabalho + (valorHoraTrabalho * 0.5));
}

function calcValorHora(horasTrabalhadas){
    if(horasTrabalhadas < 0 || Number.isNaN(horasTrabalhadas)) return;
    horasTrabalhadas = horasTrabalhadas ?? 0;
    return horasTrabalhadas / 5;
}

function main(){
    let salarioMinimo = 100;
    if(!salarioMinimo) return;

    let horasTrabalhadas = 16;
    let horasExtras = 2;
    let numDependentes = 2;

    let valorHoraTrabalho = calcValorHora(horasTrabalhadas);
    let valorHoraExtra = calcHoraExtra(valorHoraTrabalho,horasExtras);

    let salarioMes = calcSalarioMes(horasTrabalhadas, valorHoraTrabalho);
    salarioMes = acrescentarDependentes(salarioMes,numDependentes);

    let salarioBruto = calcSalarioBruto(salarioMes, valorHoraExtra);
    let impostoDeRenda = calcImposto(salarioBruto);
    let salarioLiquido = calcSalarioLiquido(salarioBruto, impostoDeRenda);
    let gratificacao = calcGratificacao(salarioLiquido);

    let salarioFuncionario = calcSalarioFuncionario(salarioLiquido, gratificacao);

    console.log(salarioFuncionario);
}

main();