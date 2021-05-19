function flightSchedule(arr) {
    let [flights, changedFlights, status] = [...arr];
    let schedule = {};

    for (let line of flights) {
        let [flight, destination] = line.split(' ');
        schedule[flight] = {
            destination,
            status: 'Ready to fly'
        }
    }
  
    for(let line of changedFlights){
        let [flight, status] = line.split(' ');
        if(schedule.hasOwnProperty(flight)){
            schedule[flight].status = status;
        }
    }
    
    Object.keys(schedule).forEach(key => {
        if(schedule[key].status == status[0]){
            console.log(`{ Destination: '${schedule[key].destination}', Status: '${schedule[key].status}' }`);
        }
    })
}
flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
])

// flightSchedule([['WN269 Delaware',
// 'FL2269 Oregon',
//  'WN498 Las Vegas',
//  'WN3145 Ohio',
//  'WN612 Alabama',
//  'WN4010 New York',
//  'WN1173 California',
//  'DL2120 Texas',
//  'KL5744 Illinois',
//  'WN678 Pennsylvania'],
//  ['DL2120 Cancelled',
//  'WN612 Cancelled',
//  'WN1173 Cancelled',
//  'SK330 Cancelled'],
//  ['Ready to fly']
// ])