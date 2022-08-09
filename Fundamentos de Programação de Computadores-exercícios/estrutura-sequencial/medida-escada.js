let calcRadiano = (angulo) => (angulo * Math.PI / 180).toFixed(2); 
let medidaEscada = (altura, angulo) => (altura / Math.sin(angulo));

function main(){
    let anguloEscadaChao;
    let alturaParede;
    let anguloRadiano = calcRadiano(anguloEscadaChao);
    let escada = medidaEscada(alturaParede, anguloRadiano);
    console.log(escada);
}

main();