function PUM(num){
    let number =  0
    let numbers = [];
    for(let i = 1; i <= num; i++){
        for(let j = 1; j <= 4; j++){
            number++;
            numbers.push(number);
            if(number % 4 === 0){
                numbers.pop();
                numbers.push("PUM");
            }
            console.log(numbers[number - 1]);
        }
        console.log("");
    }
}

function main(){
    let num = 7;
    PUM(num);
}

main();