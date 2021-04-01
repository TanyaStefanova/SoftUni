function minNumber(input) {
    let num = Number(input[0]);
    let min = Number(input[1]);
 
    for (let i = 1; i <= num; i++) {
 
        let currentNum = Number (input[i]);
       
        if (currentNum < min) {
            
            min =currentNum;
        }
 
    }
console.log(min);
 
}
minNumber(["3","-10","20","-30"])

