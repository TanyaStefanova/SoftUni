function cinemaTickets(input) {
    let index = 0;
    let command = input[index];

    let kids = 0;
    let student = 0;
    let standard = 0;
    let totalTickets = 0;

    while (command !== "Finish") {
        let currentTotal = 0;
        let name = command;
        index++;
        command = input[index];
        let freeSeats = Number(command);
        index++;
        command = input[index];
        while (command !== "End") {
            if (command === "kid") {
                kids++;
                currentTotal++;
                totalTickets++;
            } else if (command === "student") {
                student++;
                currentTotal++;
                totalTickets++;
            } else if (command === "standard") {
                standard++;
                currentTotal++;
                totalTickets++;
            }
            if (currentTotal >= freeSeats) {
                break;
            }
            index++;
            command = input[index];
        }
        console.log(`${name} - ${(currentTotal / freeSeats * 100).toFixed(2)}% full.`);
        index++;
        command = input[index];
        if (command === "Finish") {
            break;
        }
    }
    if (command === "Finish") {
        console.log(`Total tickets: ${totalTickets}`);
        console.log(`${(student / totalTickets * 100).toFixed(2)}% student tickets.`);
        console.log(`${(standard / totalTickets * 100).toFixed(2)}% standard tickets.`);
        console.log(`${(kids / totalTickets * 100).toFixed(2)}% kids tickets.`);
    }
}
cinemaTickets([
    'The Matrix', '20',
    'student', 'standard',
    'kid', 'kid',
    'student', 'student',
    'standard', 'student',
    'End', 'The Green Mile',
    '17', 'student',
    'standard', 'standard',
    'student', 'standard',
    'student', 'End',
    'Amadeus', '3',
    'standard', 'standard',
    'standard', 'Finish'
])

// [
//     'Taxi',
//     '10', 'standard',
//     'kid', 'student',
//     'student', 'standard',
//     'standard', 'End',
//     'Scary Movie',
//     '6', 'student',
//     'student', 'student',
//     'student', 'student',
//     'student', 'Finish']