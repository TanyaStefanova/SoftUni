function dayOfWeek(str) {

    if (str == 'Monday') {
        console.log(1);
    } else if (str == 'Tuesday') {
        console.log(2);
    } else if (str == 'Wednesday') {
        console.log(3);
    } else if (str == 'Thursday') {
        console.log(4);
    } else if (str == 'Friday') {
        console.log(5);
    } else if (str == 'Saturday') {
        console.log(6);
    } else if (str == 'Sunday') {
        console.log(7);
    } else {
        console.log('error');
    }

    // switch(str){
    //     case'Monday': console.log(1);
    //     break;
    //     case 'Tuesday': console.log(2);
    //     break;
    //     case 'Wednesday': console.log(3);
    //     break;
    //     case 'Thursday': console.log(4);
    //     break;
    //     case 'Friday': console.log(5);
    //     break;
    //     case 'Saturday': console.log(6);
    //     break;
    //     case 'Sunday': console.log(7);
    //     break;
    //     default: console.log('error');
    //     break;
    // }
}
dayOfWeek('Monday');
dayOfWeek('Friday');
dayOfWeek('Invalid');