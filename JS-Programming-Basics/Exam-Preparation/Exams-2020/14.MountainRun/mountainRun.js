function mountainRun(arg1, arg2, arg3){
let record = arg1;
let distanceMeters = arg2;
let timeInSecPerMeter = arg3;

let timeForDistance = distanceMeters * timeInSecPerMeter;
let delay = Math.floor(distanceMeters /50) * 30;
let finalTime = timeForDistance + delay;

if(finalTime < record){
console.log(`Yes! The new record is ${finalTime.toFixed(2)} seconds.`);
}else{
    console.log(`No! He was ${Math.abs(record - finalTime).toFixed(2)} seconds slower.`);
}
}
mountainRun(1377, 389, 3)    