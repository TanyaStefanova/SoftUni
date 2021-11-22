function trekking(input) {
    let index = 0;
    let totalGroups = Number(input[index++]);
    let totalPeople = 0;
    let groupMusala = 0;
    let groupMontblanc = 0;
    let groupKilimandjaro = 0;
    let groupK2 = 0;
    let groupEverest = 0;

    for (let i = 1; i <= totalGroups; i++) {
        let peopleInGroup = Number(input[index]);
        totalPeople += peopleInGroup;
        if (peopleInGroup <= 5) {
            groupMusala += peopleInGroup;
        } else if (peopleInGroup >= 6 && peopleInGroup <= 12) {
            groupMontblanc += peopleInGroup;
        } else if (peopleInGroup >= 13 && peopleInGroup <= 25) {
            groupKilimandjaro += peopleInGroup;
        } else if (peopleInGroup >= 26 && peopleInGroup <= 40) {
            groupK2 += peopleInGroup;
        } else if (peopleInGroup >= 41) {
            groupEverest += peopleInGroup;
        }
        index++;
        peopleInGroup = Number(input[index]);
    }
    console.log((groupMusala / totalPeople * 100).toFixed(2) + "%");
    console.log((groupMontblanc / totalPeople * 100).toFixed(2) + "%");
    console.log((groupKilimandjaro / totalPeople * 100).toFixed(2) + "%");
    console.log((groupK2 / totalPeople * 100).toFixed(2) + "%");
    console.log((groupEverest / totalPeople * 100).toFixed(2) + "%");
}
trekking([10, 10, 5, 1, 100, 12, 26, 17, 37, 40, 78])












