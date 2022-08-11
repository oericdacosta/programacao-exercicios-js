function menuDeOpcoes(opcaoUsuario){
    if(!opcaoUsuario || opcaoUsuario !== 1 && opcaoUsuario !== 2 && opcaoUsuario !== 3) return;
    
    return (opcaoUsuario === 1) ? calcImposto() : (opcaoUsuario === 2) ? calcNovoSalario() : classificarSalario();
}

function main(){
    let opcaoUsuario = 0;
   console.log(menuDeOpcoes(opcaoUsuario));
}