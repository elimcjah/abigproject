/**
 * Loops, lesson 2.4
 * @author Mike Whitfield
 * 
 * Loops are blocks of code that run more than once.  Loops always have some 
 * termination logic, otherwise the loop would run forever.
 * 
 * Loops typically store state.  If a loop did not store state related to the
 * "current iteration", it might be hard to do something meaningful inside the
 * code block.
 * 
 * The easiest example of a loop is to iterate through an array or object.  
 * A second example of a loop is a program loop which terminates only when the 
 * user exits the program.
 * 
 */

var getFirstTenBooks = function() {
    return JSON.parse(
        require('fs').readFileSync(__dirname + '/../books.json', 'UTF8'))
        .slice(0, 10);
}
var books = getFirstTenBooks();
for (var i = 0; i < books.length; i++) {
    // do something with the first ten books
    books[i].index = i;
}

var i = 0;
var book = books[i];
while (book[i]) {
    book[i].index = i;
    i++; // in a while loop we have to set this manually or it will loop infinitely
    // notice how our condition in the while statement is less formalized
}

// the for..of loop works only for iterables
for (var book of books) {
    // books is an array, so each iteration we can skip the 'i' stuff
}

// objects aren't iterable, but we can use a for..in loop to iterate over the properties
for (var property in books[0]) {
    // this loops through each property in an object
}

// we can use a for..in on an array as well
for (var index in books) {
    let book = books[index];
    // now let's do something with book
}