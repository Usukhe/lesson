console.log("object");

let person = {
    firstname: "Naraa",
    lastname: "Dorj",
    age: 22,
    address: {
        district: "HUD"
    },
    score: [90, 90, 100],
};

console.log("Person", person);
console.log("Person-name", person.firstname);
console.log("Person-name", person.lastname);
console.log("Person-nas", person.age);
console.log("Person-nas", person["age"]);
console.log("Person-adress", person.address.district);
console.log("score", person.score[2]);



