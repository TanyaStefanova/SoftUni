function suppliesForSchool(arg1, arg2, arg3, arg4) {
let countPenPakcages = arg1;
let countMarkerPackages = arg2;
let detergentLiters = arg3;
let discountPercent = arg4;

let moneyForPens = countPenPakcages * 5.80;
let moneyForMarkers = countMarkerPackages * 7.20;
let moneyForDetergent = detergentLiters * 1.20;
let totalMoney = moneyForDetergent + moneyForMarkers + moneyForPens;
let finalMoney = (totalMoney - ((totalMoney * discountPercent) /100)).toFixed(3);
console.log(finalMoney)
}
suppliesForSchool(4, 2, 5, 13)