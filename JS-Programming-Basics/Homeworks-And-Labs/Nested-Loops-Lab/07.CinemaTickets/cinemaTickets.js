function cinemaTickets(input) {
     let index = 0;
    let movie = input[index++];
 
    let studentTicketsCount = 0;
    let standardTicketsCount = 0;
    let kidsTicketsCount = 0;
    let totalTicketsCount = 0;
 
    while (movie !== "Finish") {
 
        let currentStudentTicketsCount = 0;
        let currentStandardTicketsCount = 0;
        let currentKidsTicketsCount = 0;
        let currentTotalTicketsCount = 0;
 
        let seatsCount = Number(input[index++]);
        let typeOfTicket = input[index++];
 
        while (typeOfTicket !== "End") {
 
            currentTotalTicketsCount++;
            totalTicketsCount++;
 
            if (typeOfTicket === "student") {
 
                currentStudentTicketsCount++;
                studentTicketsCount++;
 
            } else if (typeOfTicket === "standard") {
 
                currentStandardTicketsCount++;
                standardTicketsCount++;
 
            } else if (typeOfTicket === "kid") {
 
                currentKidsTicketsCount++;
                kidsTicketsCount++;
 
            }
 
            if (currentTotalTicketsCount >= seatsCount) {
                break;
             }
             
            typeOfTicket = input[index++];
 
        }
 
        let currentHallCapacity = (currentTotalTicketsCount / seatsCount) * 100;
        console.log(`${movie} - ${currentHallCapacity.toFixed(2)}% full.`);
 
        movie = input[index++];
 
    }
 
    let studentTicketsPortion = (studentTicketsCount / totalTicketsCount) * 100;
    let standardTicketsPortion = (standardTicketsCount / totalTicketsCount) * 100;
    let kidsTicketsPortion = (kidsTicketsCount / totalTicketsCount) * 100;
 
    console.log(`Total tickets: ${totalTicketsCount}`);
    console.log(`${studentTicketsPortion.toFixed(2)}% student tickets.`);
    console.log(`${standardTicketsPortion.toFixed(2)}% standard tickets.`);
    console.log(`${kidsTicketsPortion.toFixed(2)}% kids tickets.`);
 
}
cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])
