function salary(input) {
    let countTabs = Number(input.shift());
    let theSalary = Number(input.shift());


    for (let i = 0; i < countTabs; i++) {
        switch (input.shift()) {
            case "Facebook":
                theSalary -= 150; break;
            case "Instagram":
                theSalary -= 100; break;
            case "Reddit":
                theSalary -= 50; break;
        }

    }
    if (theSalary <= 0) {
        console.log("You have lost your salary.");
    } else {
        console.log(theSalary);
    }
}
salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"])


