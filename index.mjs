// Named Exports
// import {add, sub} from "./calculator.mjs";

/* Default Exports 
import add from './calculator.mjs';
*/

// console.log(add(6, 3));
// console.log(sub(6, 3));

//
// Cheat Sheets
//
//
// ES6 Module Exports //////////////////////////////////////

// 1. Default Exports
//
// 1.1 Exporting a variable while defining
//
// import value from './sample.mjs';
// console.log(value);
// SyntaxError: Unexpected strict mode reserved word ------------ in sample.mjs
//

// 1.2 Exporting a variable after defining
//
// import a from "./sample.mjs";
// console.log(a);
//

// 1.3 Exporting a value or expression
//
// import result from "./sample.mjs";
// console.log(result);
//

// 1.4 Exporting a function while defining
//
// import sum from "./sample.mjs";
// console.log(sum(2, 6));
//

// 1.5 Exporting a function after defining
//
// import sum from "./sample.mjs";
// console.log(sum(2, 6));
//

// 1.6 Exporting a class while defining
//
// import StudentDetails from "./sample.mjs";
// const newStudentDetails = new StudentDetails("Ram", 15);
// console.log(newStudentDetails);
// console.log(newStudentDetails.name);
//

// 1.7 Exporting a class after defining
//
// import StudentDetails from "./sample.mjs";
// const newStudentDetails = new StudentDetails("Ram", 15);
// console.log(newStudentDetails);
// console.log(newStudentDetails.name);
//

//
// 2. Named Exports
//

// 2.1 Exporting multiple variable while defining
//
// import { value, studentName } from "./sample.mjs";
// console.log(value);
// console.log(studentName);
//

// 2.2 Exporting multiple variable after defining
//
// import { value, studentName } from "./sample.mjs";
// console.log(value);
// console.log(studentName);
//

// 2.3 Exporting multiple functions while defining
//
// import { sum, sub } from "./sample.mjs";
// console.log(sum(4, 2));
// console.log(sub(4, 2));
//

// 2.4 Exporting multiple functions after defining
//
// import { sum, sub } from "./sample.mjs";
// console.log(sum(4, 2));
// console.log(sub(4, 2));
//

// 2.5 Exporting multiple classes while defining
//
// import { StudentDetails, CarDetails } from "./sample.mjs";
// const newStudentDetails = new StudentDetails("Ram", 15);
// console.log(newStudentDetails);
// console.log(newStudentDetails.name);
// const newCarDetails = new CarDetails("Alto", "60kmph");
// console.log(newCarDetails);
// console.log(newCarDetails.name);
//

// 2.6 Exporting multiple classes after defining
//
// import { StudentDetails, CarDetails } from "./sample.mjs";
// const newStudentDetails = new StudentDetails("Ram", 15);
// console.log(newStudentDetails);
// console.log(newStudentDetails.name);
// const newCarDetails = new CarDetails("Alto", "60kmph");
// console.log(newCarDetails);
// console.log(newCarDetails.name);
//