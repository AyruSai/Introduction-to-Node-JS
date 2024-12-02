// Cheat Sheets

//
// Common Js Module Exports

// 1. Default Exports

// 1.1 Exporting a variable while defining
// => Results to syntax error
//
// module.exports = let value = 5;
// SyntaxError: Unexpected identifier ---------------
//

// 1.2 Exporting a variable after defining
//
// let value = 5;
// module.exports = value;
//

// 1.3 Exporting a value or and expression
//
// module.exports = 5 * 3;
//

// 1.4 Exporting a function while defining
//
// module.exports = function (num1, num2) {
//     return num1 + num2;
// };
//

// 1.5 Exporting a function after defining
//
// function sum(num1, num2) {
//     return num1 + num2;
// };
// module.exports = sum;
//

// 1.6 Exporting a class while defining
//
// module.exports = class StudentDetails{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// };
//

// 1.7 Exporting a class after defining
//
// class StudentDetails{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// };
// module.exports = StudentDetails
//
//

// 2. Named Exports

// 2.1 Exporting multiple variables while defining
//
// exports.value = let value = 5;
// exports.studentName = let studentName = "Rahul";
// SyntaxError: Unexpected identifier -----------------
//

// 2.2 Exporting multiple variables after defining
//
// let value = 5;
// exports.value = value;
// let studentName = "Rahul";
// exports.studentName =studentName;
//

// 2.3 Exporting multiple values and expressions
//
// let value = 2;
// exports.sum = 2 + 3;
// exports.sub = 3 - value;
//

// 2.4 Exporting multiple functions while defining
//
// exports.sum = function (num1, num2) {
//     return num1 + num2;
// };
// exports.sub = function sub(num1, num2) {
//     return num1 - num2;
// };
//

// 2.5 Exporting multiple functions after defining
//
// function sum(num1, num2) {
//     return num1 + num2;
// };
// exports.sum = sum;
// function sub(num1, num2) {
//     return num1 - num2;
// };
// exports.sub = sub;
//

// 2.6 Exporting multiple classes while defining
//
// exports.studentDetails = class StudentDetails{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// };
// exports.carDetails = class CarDetails{
//     constructor(name, age){
//         this.name = name;
//         this.speed = age;
//     }
// };
//

// 2.7 Exporting multiple classes after defining
//
// class studentDetails{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// };
// exports.studentDetails = studentDetails
// class carDetails{
//     constructor(name, age){
//         this.name = name;
//         this.speed = age;
//     }
// }
// exports.carDetails = carDetails;
//
