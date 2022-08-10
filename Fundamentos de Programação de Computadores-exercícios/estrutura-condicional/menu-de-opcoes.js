function classificarSalario(){
    let salarioFuncionario;
    if(!salarioFuncionario || salarioFuncionario < 0) return;

    return (salarioFuncionario <= 750) ? "Mal remunerado" : "Bem remunerado";
}

function calcNovoSalario(){
    let salarioFuncionario;
    if(!salarioFuncionario || salarioFuncionario < 0) return;

    if(salarioFuncionario > 15000) return salarioFuncionario + 25;
    if(salarioFuncionario >= 750 && salarioFuncionario < 1500) return salarioFuncionario + 50;
    if(salarioFuncionario >= 450 && salarioFuncionario < 750) return salarioFuncionario + 75;

    return salarioFuncionario + 100;
}

function calcImposto(){
    let salarioFuncionario;
    if(!salarioFuncionario || salarioFuncionario < 0) return;

    if(salarioFuncionario < 500) return salarioFuncionario * 0.05;
    if(salarioFuncionario >= 500 && salarioFuncionario < 850) return salarioFuncionario * 0.1;
    
    return salarioFuncionario * 0.15;
}

function menuDeOpcoes(opcaoUsuario){
    if(!opcaoUsuario || opcaoUsuario !== 1 && opcaoUsuario !== 2 && opcaoUsuario !== 3) return;
    
    return (opcaoUsuario === 1) ? calcImposto() : (opcaoUsuario === 2) ? calcNovoSalario() : classificarSalario();
}

function main(){
    let opcaoUsuario;
   console.log(menuDeOpcoes(opcaoUsuario));
}

main();