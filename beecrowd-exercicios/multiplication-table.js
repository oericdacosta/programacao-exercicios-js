function multiplicationTable(num){
    for(let i = 1; i <= 10; i++){
        console.log(`${i} x ${num} = ${i*num}`);
    }
}

function main(){
    let num = 140;
    if(!num) return;
    multiplicationTable(num);
}

main();