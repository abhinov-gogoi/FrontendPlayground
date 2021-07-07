// Primitive Data Types vs Reference Data Types
console.log("Primitive Data Types vs Reference Data Types")


//--------------------     PRIMITIVE      -----------------------------
// Primitive -> String, Number, Boolean, Null, Undefined, Symbols(ES6)

// String
const name = "Jon Doe";
console.log(typeof name);

// Number
const age = 24;
console.log(typeof age);

// Boolean
const hasKids = false;
console.log(typeof hasKids);

// Null
const car = null;
console.log(typeof car);

// Undefined
let test;
console.log(typeof test);

// Symbol
const sym = Symbol();
console.log(typeof sym);

// ---------------- REFERENCE TYPES - objects ---------------------
// Reference -> Arrays, ObjectLiterals, Functions, Dates, Anything Else...

// Array 
const arr = [1, 2, "hello", true];
console.log(typeof arr);

// object literal 
const person = {
  name : "Abhi",
  age: 24,
  isAwesome: true
}
console.log(typeof person);

// Date
const date = new Date();
console.log(date);
console.log(typeof date);
