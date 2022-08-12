let verificaPar = x => (x % 2 === 0) ? "Par" : "impar";

function main(){
    let num;
    num  = num ?? 0;

    if(Number.isNaN(num)) return
    
    let parOuImpar = verificaPar(num);
    console.log(parOuImpar);
}

main();