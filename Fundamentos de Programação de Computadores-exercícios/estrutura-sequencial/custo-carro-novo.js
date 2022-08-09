let calcLucroDistribuidor = (preco, percentualLucro) => (preco * percentualLucro / 100);
let  calcImposto = (preco, percentualImposto) => (preco * percentualImposto / 100);
let calcPrecoFinal = (preco, lucroDistribuidor, imposto) => preco + lucroDistribuidor + imposto;

function main(){
    let precoDeFabrica;
    let percentualLucro;
    let percentualImposto;
    let lucroDistribuidor = calcLucroDistribuidor(precoDeFabrica, percentualLucro);
    let valorImposto = calcImposto(precoDeFabrica, percentualImposto);
    let precoFinal = calcPrecoFinal(precoDeFabrica, lucroDistribuidor, valorImposto);
    console.log(precoFinal);
}

main();