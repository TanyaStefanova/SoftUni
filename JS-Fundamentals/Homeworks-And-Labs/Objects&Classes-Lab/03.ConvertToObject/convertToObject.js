function convertToObject(jsonStr){
let obj = JSON.parse(jsonStr);

for(let key in obj){
console.log(`${key}: ${obj[key]}`);
}
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')