function newHome(arg1, arg2, arg3) {
    let type = arg1;
    let countFlowers = Number(arg2);
    let budget = Number(arg3);
    let rosesPrice = 5;
    let dahliasPrice = 3.80;
    let tulipsPrice = 2.80;
    let narcissusPrice = 3;
    let gladiolusPrice = 2.50;
    let expenses = 0;
    switch (type) {
        case "Roses":
            expenses+= countFlowers * rosesPrice;
            if(countFlowers > 80){
                expenses = expenses * 0.90;
            } 
            break;
        case "Dahlias":
            expenses+= countFlowers * dahliasPrice;
            if(countFlowers > 90){
                expenses = expenses * 0.85;
            } 
            break;
        case "Tulips":
            expenses+= countFlowers * tulipsPrice;
            if(countFlowers > 80){
                expenses = expenses * 0.85;
            } 
            break;
        case "Narcissus":
            expenses+= countFlowers * narcissusPrice;
            if(countFlowers < 120){
                expenses = expenses * 1.15;
            } 
            break;
        case "Gladiolus":
            expenses+= countFlowers * gladiolusPrice;
            if(countFlowers < 80){
                expenses = expenses * 1.20;
            } 
            break;

    }

    if (budget >= expenses) {
        console.log(`Hey, you have a great garden with ${countFlowers} ${type} and ${(budget - expenses).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(expenses - budget).toFixed(2)} leva more.`);
    }
}
newHome("Roses","55","250")