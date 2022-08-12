let ordemCrescente = (num1, num2, num3) =>{
    if(num1 >= num2 && num1 > num3){
        return (num2 > num3) ? `${num3}, ${num2}, ${num1}` : `${num2}, ${num3}, ${num1}`;
    } 
    
    if(num2 > num1 && num2 >= num3){
        return (num1 > num3) ? `${num3}, ${num1}, ${num2}` : `${num1}, ${num3}, ${num2}`
    }
    
    if(num3 >= num1 && num3 > num2){
        return (num1 > num2) ? `${num2}, ${num1}, ${num3}` : `${num1}, ${num2}, ${num3}`
    } 
    
    return `${num3}, ${num2}, ${num1}`;
}

function main(){
    let num1;
    num1 = num1 ?? 1;
    let num2;
    num2 = num2 ?? 2;
    let num3;
    num3 = num3 ?? 3;

    if(Number.isNaN(num1) || Number.isNaN(num2) || Number.isNaN(num3)) return;
    
    let ordem = ordemCrescente(num1, num2, num3);
    console.log(ordem);
}

main();