let qtdDegraus = (alturaDegrau, alturaUsuario) => alturaUsuario / alturaDegrau;

function main(){
    let alturaDegrau;
    let alturaUsuario;
    let degraus = qtdDegraus(alturaDegrau, alturaUsuario);
    console.log(degraus);
}

main();