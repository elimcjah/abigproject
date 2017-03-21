/**
 * 
 * setTimeout and setInterval, lesson 3.5
 * @author Mike Whitfield
 * 
 * Asynchronous programming might be an alias for, "multi-threaded" programming.
 * Multi-threaded programming originates with the idea that an OS might be able
 * to simultaneously update multiple programs before displaying output to the 
 * screen.  This allows any program to receive user inputs and update the screen
 * before the screen is refreshed.
 * 
 * In JavaScript, there is a single thread with an "event loop".  The event loop
 * is what allows behavior similar to multi-threading.
 * 
 * When you run the two main functions, setTimeout and setInterval, you are 
 * "detaching" from the process thread and running in a separate execution
 * pipeline.  This gives the program the appearance of multi-threadedness.
 * 
 * Some serious ramifications exist if you do not cleanup created intervals.
 * Likewise, JavaScript typically produces memory links if thousands of
 * timeouts are used.
 * 
 * As we'll learn, setTimeout and setInterval are important for understanding
 * the asynchronous nature of JavaScript.  The way we deal with setTimeout 
 * and setInterval create implications for how we write code in JavaScript to
 * work with network requests and to run non-blocking code.
 * 
 * 1. https://developer.mozilla.org/en-US/Add-ons/Code_snippets/Timers
 */

var a = 0;
setTimeout(() => {
    a++; // a == 2 after 50ms
}, 50);
a++; // a == 1

setTimeout(() => {
    // even though this timeout has no timeout attached,
    // it will run asynchronously on the first loop that is run
    // which sometimes happens much quicker than 1ms
    console.log('this prints second');
});
console.log('this prints first');

var itv = setInterval(() => {
    console.log('prints every second');
}, 1000);
setTimeout(() => {
    clearInterval(itv); // it's imperative to clearInterval for any intervals created
}, 5000);