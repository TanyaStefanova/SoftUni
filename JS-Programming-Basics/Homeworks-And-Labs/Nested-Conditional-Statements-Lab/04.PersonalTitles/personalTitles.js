function titles(arg1, arg2) {
    let age = Number(arg1);
    let sex = arg2;
    if (sex === "m") {
        if (age >= 16) {
            console.log("Mr.");
        } else {
            console.log("Master");
        }
    }
    if (sex === "f") {
        if (age >= 16) {
            console.log("Ms.");
        } else {
            console.log("Miss");
        }

    }
}
titles("13.5", "m")