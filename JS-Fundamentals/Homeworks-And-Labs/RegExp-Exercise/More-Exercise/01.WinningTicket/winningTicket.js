function winningTicket(arr) {
    let current = arr.shift().split(', ');
    for (let line of current) {
        let currentLine = line.trim();
        if (currentLine.length == 20) {
            let left = currentLine.substring(0, currentLine.length / 2);
            let right = currentLine.substring(currentLine.length / 2);

            let jackpotPattern = /[\$\@\^\#]{10}/g;
            let winningPattern = /[\$\@\^\#]{6,9}/g;
            let jackpotMatchLeft = left.match(jackpotPattern) 
            let jackpotMatchRight = right.match(jackpotPattern);
            let matchLeft = left.match(winningPattern);
            let matchRight = right.match(winningPattern);

            if (jackpotMatchLeft && jackpotMatchRight && jackpotMatchLeft[0] == jackpotMatchRight[0]) {
                console.log(`ticket "${currentLine}" - ${right.length}${right[0]} Jackpot!`);
            } else if (matchLeft && matchRight) {
                let match = Math.min(matchLeft[0].length, matchRight[0].length);
                console.log(`ticket "${currentLine}" - ${match}${matchLeft[0][0]}`);
            } else{
                console.log(`ticket "${currentLine}" - no match`);
            }
        } else if(currentLine.length !== 20){
            console.log('invalid ticket');
        }
    }
}

// let pattern = /(?=.{20}).*?(?=(?<ch>[@#$^]))(?<match>\k<ch>{6,}).*(?<=.{10})\k<match>.*/;
 
// arr = arr[0].trim().split(/\s*,\s*/);
// for (let line of arr){
//     let match = pattern.exec(line);

//     if (match){
//         if (match.groups.match.length >= 6 && match.groups.match.length <= 9){
//             console.log(`ticket "${line}" - ${match.groups.match.length}${match.groups.ch}`)
//         } else if (match.groups.match.length == 10){
//             console.log(`ticket "${line}" - ${match.groups.match.length}${match.groups.ch} Jackpot!`)                                
//         }          
//     } else if (line.length !== 20){
//         console.log('invalid ticket')
//     } else {
//         console.log(`ticket "${line}" - no match`)
//     }
// }
// }

winningTicket([ 'Cash$$$$$$Ca$$$$$$sh, $$$$$$$$$$##$$$$$$$$, $$$$$$@@@@@@@@$$$$$$' ]);
// winningTicket(['$$$$$$$$$$$$$$$$$$$$   ,   aabb  ,     th@@@@@@eemo@@@@@@ey']);
// winningTicket([ 'validticketnomatch:(, @@th@@@@@@e@@@@@@@@@, Ca$$$$$$$$Ca$$$$$$sh, ' ])
