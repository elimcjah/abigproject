/**
 * 
 * callbacks and promises, lesson 3.7
 * @author Mike Whitfield
 * 
 * By now, we have most of the needed tools to understand what a callback is
 * and why JavaScript might require us to author lots of callbacks.  We know
 * that functions in JavaScript execute asynchronously when a setTimeout or a
 * setInterval is called, and as we'll learn both input events and network
 * requests are asynchronous.
 * 
 * Furthermore, we have the tools needed to change the context of any calling
 * function using bind/apply/call.  This will become more improtant as we go 
 * through the course.
 * 
 * When functions execute asynchronously, there is no added value to the program
 * unless the result of the asynchronous function modifies the program in some
 * meaningful way.
 * 
 * In this module, you'll learn about a "callback" which is a pattern.  Any time
 * a pattern is discussed in this course, it means it is a stylistic choice
 * developers make, usually for good reason.  Patterns are less enduring than 
 * standards or language syntax, but still usually important even if to only
 * a particular kind of development.
 * 
 * Due to the importance of callbacks in JavaScript, callbacks evolved into a
 * syntactic structure called a Promise.  Promises alleviate the circumstance
 * where many developers were authoring 3rd party libraries to handle more 
 * complex callback use cases.  Promises represent a unique syntax that 
 * achieves nothing in the language that couldn't be achieved by composing 
 * existing syntax.
 * 
 * Lastly, this module explores how asynchronous functions can still modify
 * program state internally, although this use case is less reusable.
 * 
 */

text = '';
writeToScreen() {
    console.log(text);
}

var request = require('request');
request('http://google.com', function(error, response, body) {
    // this function is actually a callback!
    /*
     the following function relies on static data.  this is neither a callback
     nor is it a promise.  technically, writeToScreen might be thought of as a
     callback, but generally a callback should be "user supplied" meaning
     that the callback should be a variable passed into a function.  note that
     there is a separation between the data and the control in that the "body"
     is data being stored in "global scope" and the "writeToScreen" is a 
     function indicating a control mechanism to run after the network request
     completes.
    */
    text = body;
    writeToScreen(); 
});

var writeToFile = function(data, fname) {
    // try/catch in case of error, filesystems are flunky
    try {
        require('fs').writeFileSync(fname, data); // done
        require('fs').unlinkSync(fname); // delete the fname now
    } catch(e) {}
}

var loadGoogle = function(callback) {
    var request = require('request');
    request('http://google.com', function(error, response, body) {
        /*
         This is a callback.  Sometimes callbacks don't need data, and callbacks
         only care that an asynchronous function has completed.  Other times,
         the asnychronous function -- as with a network request -- returns
         useful data.
        */
        // this line is new, it's called the "ternenary operator" and 
        // condenses if/else statements onto one line.  
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
        var fname = 'google' + ((!error) ? response.statusCode : 'err') + 
            '.html';
        callback(body, fname);
    });
}

loadGoogle(writeToFile);


loadGoogle = function() {
    var request = require('request');
    // NOTE THAT THE PROMISE MUST BE RETURNED SYNCHRONOUSLY!
    return new Promise(function(resolve, reject) {
        // we are now inside a promise, yay.
        // resolve and reject are both functions.  you call them like callbacks,
        // except they are like *universal* callbacks.
        // recall that promises structure the callback pattern.
        
        // note that many older libraries still use callbacks heavily.
        request('http://google.com', function(error, response, body) {
            var fname = 'google' + ((!error) ? response.statusCode : 'err') + 
                '.html';
            if (error) {
                reject(error); // whoops, an error occurred, handle gracefully
            } else {
                // ok we resolved
                // we pass data into a resolve, just like a callback
                resolve(data, fname);
            }
        });
    });
}

var promise = loadGoogle(); // it returns a promise, 'member?
// we might read a promise like, "when X is resolved, then..." where X is the fn
promise.then(function(data, fname) {
    writeToFile(data, fname);
}).catch(function(err) {
    console.log('oh no, an error occurred!');
});
// or for short since writeToFile has the same "function signature"
promise.then(writeToFile);