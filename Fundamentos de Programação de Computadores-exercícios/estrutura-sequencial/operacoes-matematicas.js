let aoQuadrado = (num) => Math.pow(num, 2);
let aoCubo = (num) => Math.pow(num, 3);
let raizQuadrada = (num) => Math.sqrt(num);
let raizCubica = (num) => Math.cbrt(num).toFixed(2);

function main(){
    let num;
    console.log(aoQuadrado(num), aoCubo(num), raizQuadrada(num), raizCubica(num));
}

main();