let calcAumento = (salario) =>{
    let aumentoEmPorcentagem = 25;
    return (salario + ( salario * aumentoEmPorcentagem / 100)).toFixed(2);
}

function main(){
    let salario;
    let novoSalario = calcAumento(salario);
    console.log(novoSalario);
}

main();