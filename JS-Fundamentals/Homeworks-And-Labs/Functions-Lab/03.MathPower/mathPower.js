function mathPower(num, power) {
    let result = 1;
    for (let i = 0; i < power; i++) {
        result *= num;
    }
  console.log(result);
}
mathPower(3, 4);  

// let result = Math.pow(num,power)
    // let result = num ** power;