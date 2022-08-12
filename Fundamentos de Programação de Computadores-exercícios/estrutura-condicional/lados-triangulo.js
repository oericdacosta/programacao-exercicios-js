let isTriangulo = (x, y, z) => (x < y+z && y < x+z && z < x+y);

function verificaTipoTriangulo(x, y, z){
    if(!isTriangulo(x, y, z)) return console.log("Não é possível formar um triângulo com essas medidas");

    if(x === y && y === z) return console.log("triângulo Equilátero");
    if(x === y || x === z || z === y) return console.log("Triângulo Isósceles");

    return console.log("Triangulo escaleno");
}

function main(){
    let ladoX = 5;
    let ladoY = 3;
    let ladoZ = 4;
    if(!ladoX || !ladoY || !ladoZ) return;
    if(ladoX < 0 || ladoY < 0 || ladoZ < 0) return;
    verificaTipoTriangulo(ladoX, ladoY, ladoZ);
}

main();