/**
 * Functions, lesson 2.5
 * @author Mike Whitfield
 * 
 * In this module, you will understand functions a little better.  Functions are
 * labels that tell a code block to execute more than once.  Inside a computer
 * program, the processor is instructed to point to that function.
 * 
 * Functions may be customized by the inclusion of parameters.  Parameters are
 * just variables, remember.  In ES6, they may be initialized with default
 * values.
 * 
 * Functions always return to the context they were called from.  Functions
 * may return simple data, complex data, or even other functions.
 * 
 */

try {
    getString('some string'); // err!, reverseString is a function expression
} catch(e) {}

hello(); // ok, hello is a function statement and is hoisted

function hello() {
    console.log('hi!');
}

var getString = function(input) {
    return reverseString(input);
}

// this function is "hoisted"
var reverseString = function(input) {
    return input.split('').reverse().join('');
}

getString('some string'); // gnirts emos

function outer() {
    function inner() {
        console.log('ok!');
    }

    inner(); // ok!
}

try {
    inner(); // error!
} catch(e) {}
