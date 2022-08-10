let calcMedia = (nota1, nota2, nota3) => (nota1 + nota2 + nota3) / 3;
let verificaAprovacao = nota => (nota >= 0 && nota < 3) ? "Reprovado" : (nota >= 3 && nota < 7) ? "AF" : "Aprovado";
function main(){
    let nota1 = 0;
    let nota2 = 0;
    let nota3 = 1;
    let nota = calcMedia(nota1, nota2, nota3);
    let media = verificaAprovacao(nota);
    console.log(media);
}

main();