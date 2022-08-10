let verificaPar = x => (x % 2 === 0) ? "Par" : "impar";

function main(){
    let num;
    let parOuImpar = verificaPar(num);
    console.log(parOuImpar);
}

main();