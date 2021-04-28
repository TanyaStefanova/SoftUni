function factorialDivision(a, b) {

    function factorialFirstNum(num) {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    }

    function factorialSecondNum(num) {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    }
    
    let output = (factorialFirstNum(a) / factorialSecondNum(b)).toFixed(2);
    console.log(output);
}
factorialDivision(6, 2);