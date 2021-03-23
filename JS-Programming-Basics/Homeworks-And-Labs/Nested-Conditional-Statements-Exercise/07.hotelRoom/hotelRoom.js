function hotelRoom(arg1, arg2) {
    let month = arg1;
    let nights = Number(arg2);
    let studio = 0;
    let apartment = 0;
    let studioPrice = 0;
    let apartmentPrice = 0;

    if (month === "May" || month === "October") {
        studio = 50;
        apartment = 65;
        studioPrice = studio * nights;
        apartmentPrice = apartment * nights;
        if (nights > 7 && nights <= 14) {
            studioPrice = studioPrice * 0.95;
        } else if (nights > 14) {
            studioPrice = studioPrice * 0.70;
            apartmentPrice = apartmentPrice * 0.90;
        }
    }

    if (month === "June" || month === "September") {
        studio = 75.20;
        apartment = 68.70;
        studioPrice = studio * nights;
        apartmentPrice = apartment * nights;
        if (nights > 14) {
            studioPrice = studioPrice * 0.80;
            apartmentPrice = apartmentPrice * 0.90;
        }
    }

    if (month === "July" || month === "August") {
        studio = 76;
        apartment = 77;
        studioPrice = studio * nights;
        apartmentPrice = apartment * nights;
        if (nights > 14) {
            apartmentPrice = apartmentPrice * 0.90;
        }
    }
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
hotelRoom("August", "20")