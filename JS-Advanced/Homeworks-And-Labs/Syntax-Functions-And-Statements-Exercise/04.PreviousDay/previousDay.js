function previousDay(year, month, day){
 
        let nextDay = new Date(year, month -1, day - 1);
        let newYear = nextDay.getFullYear();
        let newMonth = nextDay.getMonth() +1;
        let newDate = nextDay.getDate();
        console.log(`${newYear}-${newMonth}-${newDate}`);
}
previousDay(2016, 10, 1);
// previousDay(2016, 9, 30);