function changeBureau(arg1, arg2, arg3) {
    let countBitcoins = arg1;
    let countChina = arg2;
    let commissionPercent = arg3;

    let bitcoinsInBgn = countBitcoins * 1168;
    let chinaInDollars = countChina * 0.15;
    let chinaInBgn = chinaInDollars * 1.76;
    let totalBgn = bitcoinsInBgn + chinaInBgn;
    let totalEuro = totalBgn / 1.95;
    let commission = totalEuro * (commissionPercent / 100);

    let result = (totalEuro - commission).toFixed(2);
    console.log(result);
}
changeBureau(7, 50200.12, 3)
    
