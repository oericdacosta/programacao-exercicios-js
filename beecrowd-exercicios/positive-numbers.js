function positiveNumbers(n1, n2, n3, n4, n5, n6){
    let positiveNumbers = 0;
    let numbers = [n1, n2, n3, n4, n5, n6];
    for(let i = 0; i < 6; i++){
        if(numbers[i] >= 0) positiveNumbers++;
    }
    return positiveNumbers;
}

function main(){
    let num1, num2, num3, num4, num5, num6;
    if(isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5) || isNaN(num6)) return console.log("Valor não válido");
    let totalPositiveNumber = positiveNumbers(num1, num2, num3, num4, num5, num6);
    console.log(totalPositiveNumber);
}

main();