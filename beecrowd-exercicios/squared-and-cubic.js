function printSequence(num){
    let number = 0;
    let numbers = [];
    for(let i = 1; i <= num; i++){
        for(let j = 1; j <= 3; j++){
            number++;
            numbers.push(number);
            numbers.push(number ** 2);
            numbers.push(number ** 3);
            console.log(numbers[number-1])
        }
        console.log("");
    }
}

function main(){
    let num = 5;
    printSequence(num);
}

main();