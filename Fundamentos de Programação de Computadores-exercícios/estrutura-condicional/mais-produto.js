function classificarProduto(preco){
    if(preco <= 50) return "Barato";
    if(preco > 50 && preco < 100) return "Normal";
    return "Caro";
}

let valorTotal = (preco, desconto, valorAdcional) => preco - desconto + valorAdcional;

function calcDesconto(preco, tipo, refrigeracao){
    return (tipo === "A" && refrigeracao === "S") ? 0 : Number((preco * 0.03).toFixed(2));
}

let calcPrecoDeCusto = (preco, imposto) => preco + imposto;

let valorImposto = preco => (preco < 25) ? Number((preco * 0.05).toFixed(2)) : Number((preco * 0.08).toFixed(2))

function calcValor(refrigeracao, tipo, preco){
    if(refrigeracao === "N"){
        if(tipo === "A") return (preco < 15) ? 2 : 5;
        
        if(tipo === "L") return (preco < 10) ? 1.5 : 2.5;
        
        return (preco < 30) ? 3 : 2.5;
    }
    return (tipo === "A") ? 8 : 0;
}

function main(){
    let preco = 100;
    if(!preco || preco < 0) return console.log("Preço inválido");

    let tipo = "A";
    if(!tipo || tipo !== "A" && tipo !== "L" && tipo !== "V") return console.log("Tipo inválido");

    let refrigeracao = "S";
    if(!refrigeracao || refrigeracao !== "S" && refrigeracao !== "N");

    let valorAdcional = calcValor(refrigeracao, tipo, preco);
    let imposto = valorImposto(preco);
    let precoCusto = calcPrecoDeCusto(preco, imposto)
    let desconto = calcDesconto(precoCusto, tipo, refrigeracao);
    let precoFinal = valorTotal(precoCusto, desconto, valorAdcional);
    let classificacao = classificarProduto(precoFinal);
    console.log(valorAdcional, imposto, precoCusto, desconto, precoFinal, classificacao);
}

main();