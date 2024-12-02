//
// Cheat Sheets
//
//
// ES6 Module Exports //////////////////////////////////////

// 1. Default Exports
//
// 1.1 Exporting a variable while defining
//
// export default let value = 5;
// SyntaxError: Unexpected strict mode reserved word --------------------
//

// 1.2 Exporting a variable after defining
//
// let a = 5;
// export default a;
//

// 1.3 Exporting a value or expression
//
// export default 5 * 3;
//

// 1.4 Exporting a function while defining
//
// export default function (num1, num2) {
//     return num1 + num2;
// };
//

// 1.5 Exporting a function after defining
//
// function sum(num1, num2) {
//     return num1 + num2;
// };
// export default sum;
//

// 1.6 Exporting a class while defining
//
// export default class StudentDetails{
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
// export default StudentDetails;
//

//
// 2. Named Exports
//

// 2.1 Exporting multiple variable while defining
//
// export let value = 5;
// export let studentName = "Rahul";
//

// 2.2 Exporting multiple variable after defining
//
// let value = 5;
// const studentName = "Rahul";
// export {value, studentName};
//

// 2.3 Exporting multiple functions while defining
//
// export function sum(num1, num2) {
//     return num1 + num2;
// };
// export function sub(num1, num2) {
//     return num1 - num2;
// };
//

// 2.4 Exporting multiple functions after defining
//
// function sum(num1, num2) {
//     return num1 + num2;
// };
// function sub(num1, num2) {
//     return num1 - num2;
// };
// export {sum, sub};
//

// 2.5 Exporting multiple classes while defining
//
// export class StudentDetails{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// };
// export class CarDetails{
//     constructor(name, speed){
//         this.name = name;
//         this.speed = speed;
//     }
// };
//

// 2.6 Exporting multiple classes after defining
//
// class StudentDetails{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// };
// class CarDetails{
//     constructor(name, speed){
//         this.name = name;
//         this.speed = speed;
//     }
// };
// export {StudentDetails, CarDetails};
//

