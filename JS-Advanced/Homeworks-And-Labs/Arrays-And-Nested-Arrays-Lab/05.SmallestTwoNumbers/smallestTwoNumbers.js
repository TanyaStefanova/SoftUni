function smallestTwoNumbers(arr) {
    
    let smallestTwoNums = arr.sort((a, b) => a - b).slice(0,2);
    console.log(smallestTwoNums.join(' '));
}