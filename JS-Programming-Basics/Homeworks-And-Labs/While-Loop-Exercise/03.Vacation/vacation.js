function vacation(input){
    let moneyNeeded = Number(input[0])
    let cash = Number(input[1]);
    let numSpendDays = 0;
    
    for(i = 2; i < input.length; i+=2){
    if(input[i] == "spend"){
        numSpendDays++;
        cash-= Number(input[i+1]);
        if(cash < 0){
            cash = 0;
        }
    }else if(input[i] == "save"){
    cash += Number(input[i+1]);
    }
    if(numSpendDays >= 5){
        console.log("You can't save the money.");
        console.log(`${i/2}`);
        break;
    }
    }
    if(cash >= moneyNeeded){
    console.log(`You saved the money for ${(i/2) - 1} days.`);
    }
    
    }
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])
