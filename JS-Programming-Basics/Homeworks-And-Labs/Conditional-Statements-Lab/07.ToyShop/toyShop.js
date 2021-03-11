function toyShop(arg1, arg2, arg3, arg4, arg5, arg6) {
    let vacationPrice = Number(arg1);
    let puzzels = Number(arg2);
    let dolls = Number(arg3);
    let bears = Number(arg4);
    let minions = Number(arg5);
    let trucks = Number(arg6);
    let money = puzzels * 2.60 + dolls * 3 + bears * 4.10 + minions * 8.20 + trucks * 2;
    let totalCountToys = puzzels + dolls + bears + minions + trucks;
    if (totalCountToys >= 50) {
        money = money * 0.75;
    }
    money = money * 0.90;

    if (money >= vacationPrice) {
        let result = Math.abs(money - vacationPrice);
        console.log(`Yes! ${result.toFixed(2)} lv left.`)
    }
    else {
        let result = Math.abs(money - vacationPrice);
        console.log(`Not enough money! ${result.toFixed(2)} lv needed.`)
    }

}
toyShop("40.8", "20", "25", "30", "50", "10")