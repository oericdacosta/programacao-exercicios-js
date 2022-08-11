let somaNumeros = (x, y) => x + y;
let calcRaizQuadrada = x => Math.sqrt(x); 

let escolheOperacao = opcaoUsuario =>{
    if(!opcaoUsuario || opcaoUsuario != 1 && opcaoUsuario != 2) return "Não é possível fazer essa operação";

    let num1 = 4;
    
    if(opcaoUsuario === 1){
        let num2 = 3;
        return somaNumeros(num1, num2);
    }

    return calcRaizQuadrada(num1);
}

function main(){
    let opcaoUsuario;
    let operacao = escolheOperacao(opcaoUsuario);
    console.log(operacao);
}

main();