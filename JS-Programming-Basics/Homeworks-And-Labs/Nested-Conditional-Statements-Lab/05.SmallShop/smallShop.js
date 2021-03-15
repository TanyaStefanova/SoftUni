function smallShop(arg1, arg2, arg3) {
    let product = arg1;
    let city = arg2;
    let quantity = Number(arg3);
    if (product === "coffee") {
        if (city === "Sofia") {
            console.log(quantity * 0.50);
        } else if (city === "Plovdiv") {
            console.log(quantity * 0.40);
        } else if (city === "Varna") {
            console.log(quantity * 0.45);
        }
    }
    if (product === "water") {
        if (city === "Sofia") {
            console.log(quantity * 0.80);
        } else if (city === "Plovdiv") {
            console.log(quantity * 0.70);
        } else if (city === "Varna") {
            console.log(quantity * 0.70);
        }
    }
    if (product === "beer") {
        if (city === "Sofia") {
            console.log(quantity * 1.20);
        } else if (city === "Plovdiv") {
            console.log(quantity * 1.15);
        } else if (city === "Varna") {
            console.log(quantity * 1.10);
        }
    }
    if (product === "sweets") {
        if (city === "Sofia") {
            console.log(quantity * 1.45);
        } else if (city === "Plovdiv") {
            console.log(quantity * 1.30);
        } else if (city === "Varna") {
            console.log(quantity * 1.35);
        }
    }
    if (product === "peanuts") {
        if (city === "Sofia") {
            console.log(quantity * 1.60);
        } else if (city === "Plovdiv") {
            console.log(quantity * 1.50);
        } else if (city === "Varna") {
            console.log(quantity * 1.55);
        }
    }
}
smallShop("sweets", "Sofia", "2.23")