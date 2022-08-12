function classificarSalario(salario){
    if(salario < 350) return "Mal Remunerado";
    if(salario >= 350 && salario < 600) return "Normal";
    return "Bem remunerado";
}

let calcSalarioLiquido = (salario, imposto, gratificacao, auxilio) => salario - imposto + gratificacao + auxilio;

function calcAuxilio(categoria, coeficiente, salario){
    return (categoria === "O" || coeficiente <= 25) ? salario / 3 : salario / 2;
}

let calcGratificacao = (turno, horasTrabalhada) => (turno === "N" && horasTrabalhada > 80) ? 50 : 30;

function calcImposto(categoria, salario){
    if(categoria === "O"){
        return (salario < 300 ) ? salario * 0.03 : salario * 0.05;
    }
    return (salario < 400) ? salario * 0.04 : salario * 0.06;
}

let calcSalarioBruto = (horasTrabalhada, coeficienteSalario) => horasTrabalhada * coeficienteSalario;

function calcCoeficiente(turno, salario){
    if(turno === "M") return salario * 0.1;
    if(turno === "V") return salario * 0.15;
    return salario * 0.12;
}

function main(){
    let salarioMinimo = 1000;
    if(!salarioMinimo || salarioMinimo < 0) return;

    let turnoTrabalho = "V";
    if(!turnoTrabalho || turnoTrabalho !== "M" && turnoTrabalho !== "V" && turnoTrabalho !== "N"){
        return console.log("Turno inválido")
    }

    let categoria = "O";
    if(!categoria || categoria !== "O" && categoria !== "G") return console.log("Categoria inválida");

    let horasTrabalhada = 120;
    if(!horasTrabalhada || horasTrabalhada < 0) return;

    let coeficienteSalario = calcCoeficiente(turnoTrabalho, salarioMinimo);
    let salarioBruto = calcSalarioBruto(horasTrabalhada, coeficienteSalario);
    let imposto = calcImposto(categoria, salarioBruto);
    let gratificacao = calcGratificacao(turnoTrabalho, horasTrabalhada);
    let auxilio = calcAuxilio(categoria, coeficienteSalario, salarioBruto);
    let salarioLiquido = calcSalarioLiquido(salarioBruto, imposto, gratificacao, auxilio);
    let classficacao = classificarSalario(salarioLiquido);
    console.log(coeficienteSalario, salarioBruto, imposto, gratificacao, auxilio, salarioLiquido, classficacao)
}

main();