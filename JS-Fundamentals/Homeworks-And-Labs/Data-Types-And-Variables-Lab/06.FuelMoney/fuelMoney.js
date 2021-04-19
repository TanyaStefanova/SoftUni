function fuelMoney(distance, passengers, priceLiterDiesel) {
let passengersIncrease = passengers * 0.1;
let fuel = (distance / 100) * 7 + passengersIncrease;
let money = fuel * priceLiterDiesel;
console.log(`Needed money for that trip is ${money}lv.`);
}
fuelMoney(90, 14, 2.88)