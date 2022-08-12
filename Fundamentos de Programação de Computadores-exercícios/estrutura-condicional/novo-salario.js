let calcNovoSalario = (salario, bonificacao, auxilio) => salario + bonificacao + auxilio;

let calcAuxilio = salario => (salario <= 600) ? 150 : 100;

let calcBonificacao = salario =>{
    if(salario <= 500) return salario * 0.05;
    if(salario > 500 && salario <= 1200) return salario * 0.12;
    return salario;
}

function main(){
    let salario;
    if(!salario || salario < 0) return;

    let bonificacao = calcBonificacao(salario);
    let auxilio = calcAuxilio(salario);
    let novoSalario = calcNovoSalario(salario, bonificacao, auxilio);
    console.log(novoSalario);
}

main();