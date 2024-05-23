/** 
 * -----------------------------------------
 * Chapter 1 - Intro and Basic of JS
 * (i) how to add js 
 * (ii) Variables, Constants and Comments
 * (iii) Datatypes
 * (iv) Strings
 * (v) Strings methods
 * (vi) Numbers
 * (vii) Type conversions
 * (viii) Arrays
 * (ix) Boolean values and comparisons
 * -----------------------------------------
 *
 * Chapter 2 - Control Flow
 * (i) For loops 
 * (ii) While Loops
 * (iii) Do-while Loops
 * (iv) If, else, else-if
 * (v) nested if
 * (vi) Break and Continue
 * (vii) Logical Operators
 * (viii) Variables and Block Scope
 * (ix) Ternary operators
 * (x) Switch statement
 */

// chapter-1 -----------------------------------------------------------------------------

// variables in js
// 3 type - var, let, const. This all are keyword which are using to declare variable.
//var score = 75;
//var score = 35;
//let score = 55;
//socre = 54;
//const score = 95;
//score =45;
// console.log(score);
// console.log("The value  off the score is",score )
//document.write(score)


//----------------------------------------------------
// Datatypes
// Numbers = 1, 2, 22, 33, 7.55, 3.4
// String = "I am a string", "34", 'I am also string'
// Bollean = true or false
// Null = if we create a variable which don't have any value store initially


// undefined = if a variable declare but not initialize
// let score;
// console.log(score);

// object = complex data structure (array)

//----------------------------------------------------
// 

// Strings

// // print a simple string value
// let fname = "Priyanshu"
// let sname = "Sardar"
// console.log(fname,sname)


// string concatination


// method 1 using + operator
// let fullname = fname +""+ sname;
// console.log(fullname);

// method 2 using template literals
//     let fullname = `My First Name is ${fname} and my last name is ${sname}`;
// console.log(fullname)

// Getting string character
// console.log(fname[0])

// string methods
// console.log(fname.toLowerCase())
// console.log(sname.toUpperCase())

// commmon string methods
let hobbies = "Coding is my passion";
console.log(hobbies);
// trim mrthods
// let result = hobbies.trim();
// console.log(result)

// includes methods
// result = hobbies.includes("passion");
// console.log(result);
// slice methods
// let result = hobbies.slice(13,20)
// console.log(result)
// convert a string into array
// let StringToArray = hobbies.split("-");
// console.log(StringToArray)
// console.log(StringToArray.length)

// js string are Immutable
let str = "Hello";
console.log(str);
str[0] = "hiiiiiiii"
console.log(str)

//--------------------------------------------


// Numbers


// Mathematical operators


// Concatination of numbers


// Loose Equality(==) vs strong Equality(===) Operator


// ---------------------------------------------


// Type conversion


//----------------------------------------------


// Arrays


// access


// modify


// join method


// indexOf()


// concat method


// Length property


// Push()


// pop()


// chapter-1 --------------------------------------------------------------------------------


// chapter-2 -----------------------------------------------------------------------------

//-------------------------
// For loops


// use case of for loops


// while loops


// do while loops


//--------------------------

// if, else, else-if



//--------------------------


// Break and Continue

// Break


// Continue


//--------------------------


// Logical Operators


//--------------------------



// Variable and Block scope


//-------------------------


// Ternary Operators


//------------------------


// Switch case statement


//------------------------


// chapter-2 -----------------------------------------------------------------------------