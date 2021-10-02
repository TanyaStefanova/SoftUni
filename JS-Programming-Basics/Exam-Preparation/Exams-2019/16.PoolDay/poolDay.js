function poolDay(arg1, arg2, arg3, arg4) {
    let people = arg1;
    let entrance = arg2;
    let poolBed = arg3;
    let umbrella = arg4;
    let entranceAllPeople = people * entrance;
    let peopleWithPoolBed = Math.ceil(people * 0.75);
    let poolBedFees = peopleWithPoolBed * poolBed;
    let umbrellaFees = (Math.ceil(people / 2) * umbrella);

    let finalPrice = entranceAllPeople + poolBedFees + umbrellaFees;

    console.log(`${finalPrice.toFixed(2)} lv.`);
}
poolDay(100, 8, 6, 4)
