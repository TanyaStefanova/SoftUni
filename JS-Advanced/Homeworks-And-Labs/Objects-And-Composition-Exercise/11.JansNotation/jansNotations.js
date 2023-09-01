// Мое 100/00:
function solve(arr) {

    function operators(operator, x, y) {
        if (operator == '+') {
            let output = x + y;
            result.pop();
            result.pop();
            result.push(output);
            return result;
        } else if (operator == '-') {
            let output = x - y;
            result.pop();
            result.pop();
            result.push(output);
            return result;
        } else if (operator == '*') {
            let output = x * y;
            result.pop();
            result.pop();
            result.push(output);
            return result;
        } else if (operator == '/') {
            let output = x / y;
            result.pop();
            result.pop();
            result.push(output);
            return result;
        }
    }

    let result = [];

    for(let el of arr){
        if (!isNaN(el)) {
            result.push(el);
        } else {
            if (result.length < 2) {
                return 'Error: not enough operands!';
                break;
            } else {
                let last = result[result.length - 1];
                let previous = result[result.length - 2];
                operators(el, previous, last);
            }
        }
    }

    return result.length === 1 ? result[0] : `Error: too many operands!`;
}
solve([5,
    3,
    4,
    '*',
    '-']);

// solve([3,
//     4,
//     '+']
//    );

//    solve([7,
//     33,
//     8,
//     '-']);

// solve([15,
//     '/']);

    // Друго 100/100:
    // function foo(arr) {
    //     let result = []
    //     let workArr = arr.includes("error")
    //         ? arr.slice(0, arr.indexOf("error"))
    //         : arr.slice()
    //     const operators = {
    //         "+": (x, y) => x + y, 
    //         "-": (x, y) => y - x,
    //         "/": (x, y) => y / x,
    //         "*": (x, y) => x * y,
    //     }
    
    //     const updateArr = (arr, o) => {
    //         const temp = arr.slice()
    //         temp.push(operators[o](temp.pop(), temp.pop()))
    //         return temp
    //     }
    
    //     for (let i = 0; i < workArr.length; i += 1) {
    //         if (typeof workArr[i] === "number") {
    //             result.push(workArr[i])
    //         } else {
    //             if (result.length < 2) {
    //                 return `Error: not enough operands!`
    //             }
    //             result = updateArr(result, workArr[i])
    //         }
    //     }
    
    //     return result.length === 1 ? result[0] : `Error: too many operands!`
    // }
    // foo([5,
    //         3,
    //         4,
    //         '*',
    //         '-']);
        