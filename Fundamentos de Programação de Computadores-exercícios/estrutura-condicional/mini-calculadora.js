let somaNumeros = (x, y) => x + y;
let calcRaizQuadrada = x => Math.sqrt(x); 

let escolheOperacao = opcaoUsuario =>{
    if(!opcaoUsuario || opcaoUsuario != 1 && opcaoUsuario != 2) return "Não é possível fazer essa operação";

    let num1;
    if(!num1) return;
    
    if(opcaoUsuario === 1){
        let num2;
        if(!num2) return;
        return somaNumeros(num1, num2);
    }

    if(num1 < 0) return;

    return calcRaizQuadrada(num1);
}

function main(){
    let opcaoUsuario = 1;
    let operacao = escolheOperacao(opcaoUsuario);
    operacao = operacao ?? "Não foi possível fazer esta operação";
    console.log(operacao);
}

main();