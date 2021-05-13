function convertToJson(name, lastName, hairColor){
let obj = {};
obj.name = name;
obj.lastName = lastName;
obj.hairColor = hairColor;

let jsonStr = JSON.stringify(obj);
console.log(jsonStr);
}
convertToJson('George',
'Jones',
'Brown')