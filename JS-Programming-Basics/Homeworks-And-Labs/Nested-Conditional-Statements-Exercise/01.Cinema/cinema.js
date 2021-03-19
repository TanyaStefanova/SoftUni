function cinema(arg1, arg2, arg3){
let type = arg1;
let r = Number(arg2);
let c = Number(arg3);
let income = 0;
if(type === "Premiere"){
    income = r * c * 12.00;

}else if (type === "Normal"){
    income = r * c * 7.50;
    
}else if (type === "Discount"){
    income = r * c * 5.00;

}
console.log(`${income.toFixed(2)} leva`);
}
cinema("Discount","12","30")
