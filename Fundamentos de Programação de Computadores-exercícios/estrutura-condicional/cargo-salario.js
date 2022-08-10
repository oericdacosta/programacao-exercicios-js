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
    let salarioAtual;
    let cargo = descrubraCargo(codigo);
    let novoSalario = calcNovoSalario(salarioAtual, calcPercentualAumento(codigo));
    console.log(codigo, cargo, salarioAtual, novoSalario);
}

main();