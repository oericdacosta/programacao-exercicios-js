let mediaAritmetica = (nota1, nota2, nota3) => ((nota1 + nota2 + nota3)/3).toFixed(1);

function main(){
    let nota1;
    let nota2;
    let nota3;
    let media = mediaAritmetica(nota1, nota2, nota3);
    console.log(media);
}

main()