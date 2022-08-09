let calcIdade = (anoAtual, anoNascimento) => anoAtual - anoNascimento;

function main(){
    let anoAtual;
    let anoNascimento;
    let idade = calcIdade(anoAtual ,anoNascimento);
    console.log(idade);
}

main();