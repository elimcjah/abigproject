/**
 * Variables and Functions, lesson 1.2
 * @author Mike Whitfield
 *
 * Be aware of variables.  You can assign them values.  Some values are numbers.
 * Others are strings.  Go read about the basics while you're at it (see link
 * below #1).  Ignore the stuff about function/variable hoisting for now.  You
 * can wait until module 2 to read about data types.
 *
 * In this module, your goal is to read the code and
 * you will learn that there is a function that answers if the input value,
 * 'guess' matches the summation of variables defined elsewhere.  You should
 * read more about functions (see link #2).
 *
 * You will also learn from this module that each file is a module in Node.
 * Modules can "export" values so other modules can access the exported values.
 * Values are always exported by key names.  You identify key names using the
 * property accessor (see link #3).  You read more about modules if you
 * get bored here, but you should understand we're using Node's module system,
 * for now (see link #4) :)
 *
 * #1 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types
 * #2 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
 * #3 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors
 * #4 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
 */

'use strict';
var a = 4; // the variable 'a' is set to 12
var b = 8;
let c = 4; // why does this line start with 'let' and not 'var'?
let d; // we'll talk about the 'let' keyword in a later module
var hello = 'Hello, World!'; // set hello variable to 'Hello, World!' string

/**
 * Answers true or false if the guess correctly matches the numbers.
 * @param {Number} guess The guess you make.
 * @return {Boolean} True if the guess matches the summation of a, b, c, d.
 */
var makeGuess = function(guess) {
    let a = 20;
    let d = 42;

    // c should be 4, please :)
    return (a + b + c + d) == guess; // is value left of == equal to 'guess'?
};

/*
 Functions sometimes live on objects.  In the following case,
 "console" is an object, and "log" is a *property* on "console".  You call a 
 function by adding open and close parentheses.  Anything in between the 
 parentheses is a parameter.  Parameters are comma separated.
 */
console.log(hello); // you can pass variables into functions
makeGuess(a + b + c + d);
