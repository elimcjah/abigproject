/**
 * 
 * JSON, lesson 3.4
 * @author Mike Whitfield
 * 
 * Object that are initialized using the curly braces are known as object
 * literals and are usually one in the same as JSON.  There are some important
 * distinctions about JSON that are different from object literals, however.
 * 
 * 1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
 */

JSON.parse("{'property': 123}").property; // 123
typeof JSON.stringify({
    animalType: 'cat',
    sound: 'meow'
}); // string