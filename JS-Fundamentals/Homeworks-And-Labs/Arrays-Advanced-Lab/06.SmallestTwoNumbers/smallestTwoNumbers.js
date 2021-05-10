function smallestTwoNums(arr){

arr.sort((a,b) => a-b);
let smallest = arr.slice(0,2);
console.log(smallest.join(' '));
}
smallestTwoNums([30, 15, 50, 5]);
smallestTwoNums([3, 0, 10, 4, 7, 3]);