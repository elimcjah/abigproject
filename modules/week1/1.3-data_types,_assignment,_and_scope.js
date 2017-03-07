/**
 * Data Types, lesson 1.3
 * @author Mike Whitfield
 * 
 * Now would be a good time to read the "Data Structures and Types" section on
 * MDN (see link #1 below).  Stop when you get to literals.
 * 
 * JavaScript is loosely typed and gives you as the programmer a lot of
 * flexibility and choice in writing code.  In other languages, type is very
 * strictly enforced, i.e. your application will not run if you pass an
 * incorrect type into a function.  If you incorrectly assign a variable, your
 * program likewise will not run in a typed language.
 * 
 * JavaScript is also distinguished by its browser origins.
 * 
 * 1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types 
 * TODO: add more links
 */

// because these variables are set as "const", they can't be changed once set!
const number = 1; // this is a Number Types
const float = 1.1; // this is still a Number Type
const string = 'Howdy!'; // this is a string type
const array = [1, 2, 3]; // an "array" of values
const object = {
    stringProperty: 'Hello'
}; // an "object" that has property name "stringProperty" set to a value of 'Hello'

// JavaScript is "loosely typed", meaning different data types "interoperate"
var newNumber = number + float; // this is fine, no error
var newString = string + number; // Howdy!1
var newerString = newString + 123; // Howdy!1123
var newArray = array + number // yields a string, (weird) "1,2,31"

var a, b, c; // declare multiple variables in one line

/*
 Assignment is defined as associating some variable label with a value or a
 reference to another value.
 */
[a, b, c] = array; // assigns the first three elements of array to a, b, c
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
a = 2, b = 3; // this works as well
a++; // a equals 3
c = a++ + b; // c equals 6
c = ++a + b; // c equals 8
c = -6;

/* 
 Scope is defined as parts of the code where some variables can be "seen"
 and some variables cannot.
 */
var a = 3;
{
    // i'm a "block"
    let a = 2; // let declares a variable that exists only in scope
    {
        console.log('This is a scope within a scope');
    }
}
console.log(a); // i'm 3

someFunction(); // language quirk: this still works.
function someFunction() {
    console.log('i\'m "hoisted"');
}

// someOtherFunction(); // error!
var someOtherFunction = function() {
    console.log('i\'m a "function literal"');
};