function sum(x, y, z) {
    let sumFirstTwo = x + y;

   let result = subtract(sumFirstTwo, z);

    function subtract(a, b) {
        return a - b;
    }

    return result;   
}
console.log(sum(23, 6, 10));
console.log(sum(1, 17, 30));

/* function sumAndSubtract(x, y, z){
    let result = sum(x + y);

    function sum(a, b){
        return a + b;
    }

    return result - z;
}
console.log(sumAndSubtract(23, 6, 10))*/

/* Arrow function:
let sum = (a ,b) => a + b;*/