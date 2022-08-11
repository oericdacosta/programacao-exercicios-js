let precoTotalProduto = (precoTotal, imposto) => precoTotal + (precoTotal * imposto);

function valorImposto(codigoPaisOrigem){
    if(codigoPaisOrigem === 1) return 0;
    if(codigoPaisOrigem === 2) return 0.15;
    return 0.25;
}

function calcPrecoTotal(codigoProduto,pesoEmGramas){
    if(Number.isNaN(pesoEmGramas)) return 0;
    if(codigoProduto >= 1 && codigoProduto <= 4) return 10 * pesoEmGramas;
    if(codigoProduto >= 5 && codigoProduto <= 7) return 25 * pesoEmGramas;
    return 35 * pesoEmGramas;
}

let convertePesoProduto = pesoProdutoKg => pesoProdutoKg * 1000;

function main(){
    let codigoProduto;
    codigoProduto = codigoProduto ?? 0;
    if(codigoProduto < 1 && codigoProduto > 10) return;

    let pesoProdutoKg;
    pesoEmGramas = pesoEmGramas ?? 0;

    let codigoPaisOrigem;
    codigoPaisOrigem = codigoPaisOrigem ?? 0;
    if(codigoPaisOrigem < 1 && codigoPaisOrigem > 3) return;

    let pesoEmGramas = convertePesoProduto(pesoProdutoKg);
    let precoTotal = calcPrecoTotal(codigoProduto, pesoEmGramas);
    let imposto = valorImposto(codigoPaisOrigem);
    let precoTotalProduto = valorTotal(precoTotal, imposto);

    console.log(precoTotal, precoTotalProduto);
}

main();