function sumOddNumbers(num1, num2){
    let sumOddNumber = 0;
    if(num1 > num2){
        num2++;
        for(let i = num2; i < num1; i++){
            if(i % 2 !== 0) sumOddNumber += i;
        }
        return sumOddNumber;
    }
    num1++;
    for(let i = num1; i < num2; i++){
        if(i % 2 !== 0) sumOddNumber += i;
    }
    return sumOddNumber;
}

function main(){
    let num1;
    let num2;
    let sum = sumOddNumbers(num1, num2);
    console.log(sum);
}

main();