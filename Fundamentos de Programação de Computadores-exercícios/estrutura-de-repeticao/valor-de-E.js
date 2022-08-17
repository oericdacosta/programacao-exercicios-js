function calculaFatorial(num){
    let fat = 1;
    if(num === 0) return fat;
    for(let i = 1; i <= num; i++){
        fat = fat * i;
    }
    return fat;
}

function calculaE(num){
    let E = 1;
    for (let i = 0; i <= num; i++) {
        let fat = calculaFatorial(i);
        E = E + 1/fat;
    }
    console.log(E);

}

function main(){
    let num = 0;
    calculaE(num);
}

main();