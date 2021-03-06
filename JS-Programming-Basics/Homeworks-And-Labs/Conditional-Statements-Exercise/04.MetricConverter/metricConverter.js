function converter(arg1, arg2, arg3) {
    let number = Number(arg1);
    if (arg2 === "mm") {
        if (arg3 === "m"){
            result = arg1 / 1000;

    } else if (arg3 === "cm") {
        result = arg1 / 10;
    }
}
if (arg2 === "m") {
    if (arg3 === "cm"){
        result = arg1 * 100;

} else if (arg3 === "mm") {
    result = arg1 * 1000;
}
}
if(arg2 === "cm"){
    if(arg3 === "m"){
        result = arg1 / 100;
    } else if(arg3 === "mm"){
        result = arg1 * 10;
    }

}
console.log(result.toFixed(3));
}
converter("45", "cm", "mm")