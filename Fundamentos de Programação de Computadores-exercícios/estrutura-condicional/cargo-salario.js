function descrubraCargo(codigo){
    let cargos = ["Escriturário", "Secretário", "Caixa", "Gerente", "Diretor"];
    return cargos[codigo - 1];
}

function calcPercentualAumento(codigo){
    let perceituais = [0.5, 0.35, 0.2, 0.1];
    return perceituais[codigo - 1];
}

let calcNovoSalario = (salario, perceitual) => salario + (salario * perceitual);

function main(){
    let codigo;
    if(Number.isNaN(codigo) || codigo < 1 || codigo > 4) return;
    codigo = codigo ?? 1;

    let salarioAtual;
    if(Number.isNaN(salarioAtual) || salarioAtual < 0) return;
    salarioAtual = salarioAtual ?? 1000;

    let cargo = descrubraCargo(codigo);
    let novoSalario = calcNovoSalario(salarioAtual, calcPercentualAumento(codigo));

    console.log(codigo, cargo, salarioAtual, novoSalario);
}

main();