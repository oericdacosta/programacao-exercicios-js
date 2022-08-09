let mediaPonderada = (nota1, nota2, nota3, peso1, peso2, peso3) => ((nota1*peso1 + nota2*peso2 + nota3*peso3)/(peso1 + peso2 + peso3)).toFixed(1);

function main(){
    let nota1;
    let nota2;
    let nota3;
    let peso1;
    let peso2;
    let peso3;
    let media = mediaPonderada(nota1, nota2, nota3, peso1, peso2, peso3);
    console.log(media);
}

main()