function leapYears(arg1, arg2) {
    let firstLeapYear = Number(arg1);
    let finalYear = Number(arg2);

    for (let i = firstLeapYear; i <= finalYear; i += 4) {
        console.log(i);
    }
}
leapYears("2020", "2032")