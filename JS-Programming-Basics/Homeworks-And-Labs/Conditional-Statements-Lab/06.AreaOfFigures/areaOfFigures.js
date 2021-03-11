function figures(arg1, arg2, arg3) {
    let type = arg1;
    if (type === "square") {
        let sideA = Number(arg2);
        let result = sideA * sideA;
        console.log(result.toFixed(3));
    }
    else if (type === "rectangle") {
        let sideA = Number(arg2);
        let sideB = Number(arg3);
        let result = sideA * sideB;
        console.log(result.toFixed(3));
    }
    else if (type === "circle") {
        let radius = Number(arg2);
        let result = Math.PI * radius * radius;
        console.log(result.toFixed(3));
    }
    else {
        let sideA = Number(arg2);
        let hight = Number(arg3);
        let result = sideA * hight / 2;
        console.log(result.toFixed(3));
    }
}
figures("triangle", "4.5", "20")
