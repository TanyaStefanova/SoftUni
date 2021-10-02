function repainting(arg1, arg2, arg3, arg4) {
    let nylon = Number(arg1);
    let paint = Number(arg2);
    let thinner = Number(arg3);
    let hours = Number(arg4);

    let nylonExpenses = (nylon + 2) * 1.5;
    let additionalPaint = paint * 0.10;
    let paintExpenses = (paint + additionalPaint) * 14.50;
    let thinnerExpenses = thinner * 5;
    let totalExpenses = nylonExpenses + paintExpenses + thinnerExpenses + 0.40;
    let feePerHour = totalExpenses * 0.30;
    let workerExpenses = feePerHour * hours;
    console.log(`Total expenses: ${(totalExpenses + workerExpenses).toFixed(2)} lv.`);
}
repainting(5, 10, 10, 1)