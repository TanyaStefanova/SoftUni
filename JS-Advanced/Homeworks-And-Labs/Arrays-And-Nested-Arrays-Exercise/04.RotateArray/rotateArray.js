function solve(arr, num) {

    for(let i = num; i > 0; i--){
        let el = arr.pop();
        arr.unshift(el);
    }
    
    console.log(arr.join(' '));
}
solve(['1', 
'2', 
'3', 
'4'], 
2);