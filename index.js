// Named Exports
// const { add, sub } = require("./calculator");

/* Default Exports
const add = require('./calculator')
*** */

// console.log(add(6, 3));
// console.log(sub(6, 3));

// Single Module Js
//
// const greetings = (name) => {
//   console.log(`Hello ${name}`);
// };

// greetings("Ram");
// greetings("Abhi");

// Cheat Sheets

//
// Common Js Module Exports

// 1. Default Exports

// 1.1 Exporting a variable while defining
//
// const num = require('./sample');
// Results a Syntax Error in sample.js
//

// 1.2 Exporting a variable after defining
//
// const value = require('./sample')
// console.log(value);
//

// 1.3 Exporting a value or and expression
//
// const result = require('./sample')
// console.log(result)
//

// 1.4 Exporting a function while defining
//
// const sum = require('./sample');
// console.log(sum(2, 6));
//

// 1.5 Exporting a function after defining
//
// const sum = require('./sample')
// console.log(sum(2, 6));
//

// 1.6 Exporting a class while defining
//
// const StudentDetails = require('./sample')
// const studentDetails = new StudentDetails("Ram", 15);
// console.log(studentDetails);
// console.log(studentDetails.name);
//

// 1.7 Exporting a class after defining
//
// const StudentDetails = require("./sample");
// const studentDetails = new StudentDetails("Ram", 15);
// console.log(studentDetails);
// console.log(studentDetails.name);
//

// 2. Named Exports

// 2.1 Exporting multiple variables while defining
//
// const {value, studentName} = require('./sample');
// console.log(value);
// console.log(studentName);
// SyntaxError: Unexpected identifier ------ in sample.js
//

// 2.2 Exporting multiple variables after defining
//
// const {value, studentName} = require("./sample");
// console.log(value);
// console.log(studentName);
//

// 2.3 Exporting multiple values and expressions
//
// const {sum, sub} = require('./sample');
// console.log(sum);
// console.log(sub);
//

// 2.4 Exporting multiple functions while defining
//
// const {sum, sub} = require("./sample");
// console.log(sum(2, 6));
// console.log(sub(8, 3));
//

// 2.5 Exporting multiple functions after defining
//
// const {sum, sub} = require("./sample");
// console.log(sum(2, 6));
// console.log(sub(8, 3));
//

// 2.6 Exporting multiple classes while defining
//
// const {studentDetails, carDetails} = require("./sample");
// const newStudentDetails = new studentDetails("Ram", 15);
// console.log(newStudentDetails)
// console.log(newStudentDetails.name);
// //
// const newCarDetails = new carDetails("Alto", "60kmph");
// console.log(newCarDetails);
// console.log(newCarDetails.name);
//

// 2.7 Exporting multiple classes after defining
//
// const {studentDetails, carDetails} = require("./sample");
// const newStudentDetails = new studentDetails("Ram", 15);
// console.log(newStudentDetails);
// console.log(newStudentDetails.name);
// const newCarDetails = new carDetails("Alto", "60kmph");
// console.log(newCarDetails);
// console.log(newCarDetails.name);
//
