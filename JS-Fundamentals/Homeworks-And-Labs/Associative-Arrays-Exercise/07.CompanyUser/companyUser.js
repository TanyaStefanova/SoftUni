function companyUser(arr) {
    let users = {};
    // let users = new Map();
    for (let line of arr) {
        let [company, employee] = line.split(' -> ');
        if (!users.hasOwnProperty(company)) {
            users[company] = [];
        }
        if (!users[company].includes(employee)) {
            users[company].push(employee);
        }
        // if (!users.has(company)) {
        //     users.set(company, []);
        // }
        // if (!users.get(company).includes(employee)) {
        //     users.get(company).push(employee);
        // }
    }
    let companies = Object.entries(users).sort((a, b) => a[0].localeCompare(b[0]));
    // let companies = Array.from(users).sort((a, b) => a[0].localeCompare(b[0]));

    companies.forEach(company => {
        console.log(`${company[0]}`);
        for (let id of company[1]) {
            console.log(`-- ${id}`);
        }
    });
}

companyUser([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111']);