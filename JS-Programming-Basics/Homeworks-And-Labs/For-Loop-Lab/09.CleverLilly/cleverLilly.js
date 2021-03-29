function cleverLily(arg1, arg2, arg3) {
    let age = Number(arg1);
    let washingMachinePrice = Number(arg2);
    let toyPrice = Number(arg3);
    let birthdayMoney = 10;
    let money = 0;
    let toys = 0;
    let tempMoney = 10;

    for (let i = 1; i <= age; i++) {
            if (i % 2 !== 0) {
            toys++;
        }else {
            money += tempMoney - 1;
            tempMoney += 10;
        }
    }
    money += toys * toyPrice;

    if (money >= washingMachinePrice) {
        console.log(`Yes! ${(money - washingMachinePrice).toFixed(2)}`);
    } else if (washingMachinePrice > money) {
        console.log(`No! ${(washingMachinePrice - money).toFixed(2)}`);
    }
}

cleverLily("21", "1570.98", "3")