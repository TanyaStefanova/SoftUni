function volleyball(arg1, arg2, arg3){
let typeOfYear = arg1;
let holidays = Number(arg2);
let weekendsHome = Number(arg3);
let weekends = 48;
let weekendsSofia = (weekends - weekendsHome) * 3/4;
let holidayGames = holidays * 2/3;
let totalGames = weekendsSofia + weekendsHome + holidayGames;
if(typeOfYear === "leap"){
console.log(Math.floor(totalGames * 1.15));
} else if(typeOfYear === "normal"){
    console.log(Math.floor(totalGames));
}

}
volleyball("leap","0","1")