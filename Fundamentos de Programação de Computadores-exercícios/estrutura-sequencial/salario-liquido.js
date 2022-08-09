let calcSalarioLiquido = (salarioBruto) =>{
    let gratificacao = 5.0 / 100;
    let imposto = 7.0 / 100;
    return salarioBruto + (salarioBruto * gratificacao)  - (salarioBruto * imposto);
}

function main(){
    let salarioBruto = 100;
    let salarioLiquido = calcSalarioLiquido(salarioBruto);
    console.log(salarioLiquido);
}

main()