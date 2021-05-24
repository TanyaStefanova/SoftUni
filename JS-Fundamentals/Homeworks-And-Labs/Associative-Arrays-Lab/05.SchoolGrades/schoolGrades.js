function schoolGrades(arr) {
    let students = {};

    for (let line of arr) {
        let current = line.split(' ');
        let name = current.shift();
        current.map(Number);

        if (!students.hasOwnProperty(name)) {
            students[name] = [];
        }
        for (let num of current) {
            students[name].push(num);
        }
    }
    let entries = Object.entries(students);
    entries.sort(([nameA, gradesA], [nameB, gradesB]) => {

        let averageA = 0;
        for (let num of gradesA) {
            averageA += Number(num);
        }
        averageA = averageA / gradesA.length;

        let averageB = 0;
        for (let num of gradesB) {
            averageB += Number(num);
        }
        averageB = averageB / gradesB.length;

        return averageA - averageB;

    });

    for (let [name, grades] of entries) {
        console.log(`${name}: ${grades.join(', ')}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])