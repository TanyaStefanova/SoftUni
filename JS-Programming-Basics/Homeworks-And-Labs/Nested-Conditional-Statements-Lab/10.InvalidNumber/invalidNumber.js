function invalidNumber(arg){
let number = Number(arg);
let isValid = number >= 100 && number <= 200 || number === 0;
if(!isValid){
    console.log("invalid");

}
}
invalidNumber("100")