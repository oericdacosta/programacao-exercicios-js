function calcFatorial(num){
    let fat = 1;
    if(num === 0 || num === 1) return fat;
    
    for(let i = 1; i <= num; i++){
        fat *= i;
    }
    return fat;
}

function main(){
    let num;
    fat = calcFatorial(num);
    console.log(fat);
}

main();