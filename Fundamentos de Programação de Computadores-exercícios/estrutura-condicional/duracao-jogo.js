function criaHora(hora, minuto){
    return horario = {
        hora,
        minuto,
    }
}

function calculaDuracao(hInicial, hFinal){
    if(hInicial.minuto > hFinal.minuto){
        hFinal.minuto += 60;
        hFinal.hora--;
    }

    if(hInicial.hora > hFinal.hora) hFinal.hora += 24;

    return duracaoJogo = {
        horas: hFinal.hora - hInicial.hora,
        minutos: hFinal.minuto - hInicial.minuto,
    }

    
}

function main(){
    let horarioInicio = criaHora(23, 1);
    let horarioFinal = criaHora(11, 6);
    let duracaoJogo = calculaDuracao(horarioInicio, horarioFinal);
    console.log(duracaoJogo);
}

main();