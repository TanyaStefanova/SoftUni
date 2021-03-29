function sumOfNumbers(arg){
let number = arg;
let result = 0;
for(let i = 0; i < number.length; i++){
    let char = Number(number[i]);
    result += char;
    
}
console.log(`The sum of the digits is:${result}`);
}
sumOfNumbers("1234")