function person(firstName, lastName, age) {
    let personInfo = {};
    personInfo.firstName = firstName;
    personInfo.lastName = lastName;
    personInfo.age = Number(age);

    return personInfo
}
let result = person("Peter", "Pan", "20");
console.log(result);


/* let personInfo = {
    firstName: firstName,
    lastName: lastName,
    age: age;
};
*/

/*
let personInfo = {
    firstName,
    lastName,
    age;
};
*/