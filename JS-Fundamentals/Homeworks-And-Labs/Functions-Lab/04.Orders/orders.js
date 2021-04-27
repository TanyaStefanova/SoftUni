function totalPrice(product, quantity) {
    let price = 0;

    console.log(orders(product, quantity));

    function orders(product, quantity) {
        switch (product) {
            case 'coffee': price = 1.50; break;
            case 'water': price = 1.00; break;
            case 'coke': price = 1.40; break;
            case 'snacks': price = 2.00; break;
        }
        let finalPrice = (price * quantity).toFixed(2);
        return finalPrice;
    }
}

totalPrice('water', 5);
totalPrice('coffee', 2)

