var person = {
    name: "Mayank Kumar",
    gender: "male"
 }
 
 var employee = {
    id: 1001
 }
 
 employee.__proto__ = person;
 console.log(person.__proto__);
 console.log(employee.__proto__);