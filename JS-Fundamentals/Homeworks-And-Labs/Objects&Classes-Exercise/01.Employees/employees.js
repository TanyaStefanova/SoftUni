function employees(arr) {

    let employees = {};
    for (let el of arr) {
        employees[el] = el.length;
    }

    Object.entries(employees).forEach(x => {
        console.log(`Name: ${x[0]} -- Personal Number: ${x[1]}`);
    });
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])