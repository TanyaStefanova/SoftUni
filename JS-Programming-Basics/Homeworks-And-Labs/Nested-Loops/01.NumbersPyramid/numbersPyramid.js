function pyramind(input) {
    let index = 0;
    let number = Number(input[index]);

    let current = 1;
    let isBigger = false;
    let printCurrentLine = "";

    for (let row = 1; row <= number; row++) {
        for (let cols = 1; cols <= row; cols++) {
if(current > number){
    isBigger = true;
    break;

}
printCurrentLine += current + " ";
current++;
        }
console.log(printCurrentLine);
printCurrentLine = "";
if(isBigger){
    break;
}
    }
}
pyramind(["12"])