function roadRadar(speed, area) {

    if (area == 'motorway') {
        if (speed > 130) {
            if (speed - 130 <= 20) {
                console.log(`The speed is ${speed - 130} km/h faster than the allowed speed of 130 - speeding`);
            } else if (speed - 130 <= 40) {
                console.log(`The speed is ${speed - 130} km/h faster than the allowed speed of 130 - excessive speeding`);
            } else {
                console.log(`The speed is ${speed - 130} km/h faster than the allowed speed of 130 - reckless driving`);
            }
        } else{
            console.log(`Driving ${speed} km/h in a 130 zone`);
        }
    } else if (area == 'interstate') {
        if (speed > 90) {
            if (speed - 90 <= 20) {
                console.log(`The speed is ${speed - 90} km/h faster than the allowed speed of 90 - speeding`);
            } else if (speed - 90 <= 40) {
                console.log(`The speed is ${speed - 90} km/h faster than the allowed speed of 90 - excessive speeding`);
            } else {
                console.log(`The speed is ${speed - 90} km/h faster than the allowed speed of 90 - reckless driving`);
            }
        } else{
            console.log(`Driving ${speed} km/h in a 90 zone`);
        }
    } else if (area == 'city') {
        if (speed > 50) {
            if (speed - 50 <= 20) {
                console.log(`The speed is ${speed - 50} km/h faster than the allowed speed of 50 - speeding`);
            } else if (speed - 50 <= 40) {
                console.log(`The speed is ${speed - 50} km/h faster than the allowed speed of 50 - excessive speeding`);
            } else {
                console.log(`The speed is ${speed - 50} km/h faster than the allowed speed of 50 - reckless driving`);
            }
        } else{
            console.log(`Driving ${speed} km/h in a 50 zone`);
        }
    } else if (area == 'residential') {
        if (speed > 20) {
            if (speed - 20 <= 20) {
                console.log(`The speed is ${speed - 20} km/h faster than the allowed speed of 20 - speeding`);
            } else if (speed - 20 <= 40) {
                console.log(`The speed is ${speed - 20} km/h faster than the allowed speed of 20 - excessive speeding`);
            } else {
                console.log(`The speed is ${speed - 20} km/h faster than the allowed speed of 20 - reckless driving`);
            }
        } else{
            console.log(`Driving ${speed} km/h in a 20 zone`);
        }
    }
}
roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')


// Slightly different task:
// function demo(speed, area) {
//     switch(area){
//         case 'motorway':
//         if(speed > 130 && speed <=150){
//             console.log('speeding');
//         }else if(speed > 150 && speed <= 170){
//             console.log('excessive speeding ');
//         } else if(speed > 170){
//             console.log('reckless driving ');
//         }
//         break;
//         case 'interstate':
//             if(speed > 90 && speed <=110){
//                 console.log('speeding');
//             }else if(speed > 110 && speed <= 130){
//                 console.log('excessive speeding ');
//             } else if(speed > 130){
//                 console.log('reckless driving ');
//             }
//         break;
//         case 'city':
//             if(speed > 50 && speed <=70){
//                 console.log('speeding');
//             }else if(speed > 70 && speed <= 90){
//                 console.log('excessive speeding ');
//             } else if(speed > 90){
//                 console.log('reckless driving ');
//             }
//         break;
//         case 'residential':
//             if(speed > 20 && speed <=40){
//                 console.log('speeding');
//             }else if(speed > 40 && speed <= 60){
//                 console.log('excessive speeding ');
//             } else if(speed > 60){
//                 console.log('reckless driving ');
//             }
//         break;
//     }
//     }
//     demo(200, 'motorway');