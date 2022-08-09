let calcAreatriangulo = (base, altura) => ((base * altura) / 2).toFixed(2);

function main(){
    let base = 5;
    let altura = 3;
    let areaTriangulo = calcAreatriangulo(base, altura);
    console.log(areaTriangulo);
}

main();