let calcValorTotal = (precoCarga, imposto) => precoCarga + (precoCarga * imposto);

function calcImposto(codigo){
    let taxas = [0.35, 0.25, 0.15, 0.5, 0];
    return taxas[codigo - 1];
}

function calcPreco(codigoCarga, pesoCarga){
    if(codigoCarga >= 10 && codigoCarga <= 20) return 100 * pesoCarga;
    if(codigoCarga >= 21 && codigoCarga <= 30) return 250 * pesoCarga;
    return 340 * pesoCarga;

}

let convertePeso = pesoTonelada => pesoTonelada * 1000;

let isNan = num => Number.isNaN(num);

function main(){
    let codigoEstado;
    if(isNan(codigoEstado) || codigoEstado < 1 || codigoEstado > 5) return;
    codigoEstado = codigoEstado ?? 1;

    let pesoCargaToneladas;
    if(isNan(pesoCargaToneladas)) return;
    pesoCargaToneladas = pesoCargaToneladas ?? 1;
    
    let codigoCarga;
    if(isNan(codigoCarga) || codigoCarga < 10 || codigoCarga > 40) return;
    codigoCarga = codigoCarga ?? 10;

    let pesoCargaKg = convertePeso(pesoCargaToneladas);
    let precoCarga = calcPreco(codigoCarga, pesoCargaKg);
    let imposto = calcImposto(codigoEstado);
    let valorTransportado = calcValorTotal(precoCarga, imposto);
    console.log(pesoCargaKg, precoCarga, imposto, valorTransportado);
}

main();