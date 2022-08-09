let calcNovoSalario = (salario, percentualDeAumento) => (salario + (salario * percentualDeAumento / 100)).toFixed(2);
function main(){
    let salario;
    let percentualDeAumento;
    let novoSalario = calcNovoSalario(salario, percentualDeAumento);
    console.log(novoSalario);
}

main();