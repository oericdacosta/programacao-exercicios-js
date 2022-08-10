let calcMediaPonderada = (nota1, nota2, nota3) => (nota1 + nota2 + nota3) / 3;
let calcConceito = (media) =>{
    if(!media) return "Não é um número"
    if(media < 0 || media > 10) return "A nota precisa estar entre 0 e 10";
    if(media >= 0 && media < 5) return "Conceito E";
    if(media >= 5 && media < 6) return "Conceito D";
    if(media >= 6 && media < 7) return "Conceito C";
    if(media >= 7 && media < 8) return "Conceito B";
    return "Conceito A"
}

function main(){
    let nota1;
    let nota2;
    let nota3;
    let media = calcMediaPonderada(nota1, nota2, nota3);
    let conceito = calcConceito(media);
    console.log(conceito, media);
}

main();