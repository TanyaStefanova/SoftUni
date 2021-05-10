function listOfProducts(arr) {

    arr.sort();
    let number = 1;

    for (let el of arr) {
        console.log(`${number}.${el}`);
        number++;
    }
}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);