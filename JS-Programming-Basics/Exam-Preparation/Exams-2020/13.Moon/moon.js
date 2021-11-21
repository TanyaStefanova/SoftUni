function moon(arg1, arg2) {
    let averageSpeed = Number(arg1);
    let litersFor100Km = Number(arg2);

    let toTheMoonAndBack = 384400 * 2;
    let time = Math.ceil(toTheMoonAndBack / averageSpeed);
    let finalTime = time + 3;
    let litersUsed = (litersFor100Km * toTheMoonAndBack) / 100;
    console.log(finalTime);
    console.log(litersUsed);
}
moon(15000, 4)