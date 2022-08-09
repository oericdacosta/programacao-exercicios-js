let calcRendimento = (valorDeposito, taxaDeJuros) => (valorDeposito * taxaDeJuros / 100);
let calcValorTotal = (valorDeposito, rendimento) => (valorDeposito + rendimento).toFixed(2);
function main(){
    let valorDeposito = 130.78;
    let taxaDeJuros = 20;
    let rendimento = calcRendimento(valorDeposito, taxaDeJuros);
    let valorTotal = calcValorTotal(valorDeposito, rendimento);
    console.log(rendimento, valorTotal);
}

main()