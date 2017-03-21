/**
 * 
 * Network requests, lesson 3.6
 * @author Mike Whitfield
 * 
 * Let's talk about HTTP and HTTPS.  They are protocols that were invented 
 * around the time of the WWW for network endpoints to talk to one another and
 * specifically to trade around the format called HTML.  At the time, people
 * didn't understand what HTTP could do that FTP and telnet couldn't already 
 * do.  It was a little strange to people at the time, but like most advances
 * in technology Tim Berners Lee (author of HTTP) felt strongly that it would
 * increase the usability of internet systems and cajole others to join.
 * 
 * TBM's experiment worked and almost thirty years later the WWW has flourished.
 * HTTP is different from FTP in that it structures requests between GET/POST/
 * PUT/DELETE/UPDATE.  HTTP also includes most of the information a server needs
 * inside headers.  Every time your browser makes a request it sends headers 
 * to the server and receives headers back.  This tells your browser to render
 * an image, for instance.  It tells your browser the length of the contents
 * returned.  Sometimes, it tells your browser to initiate a download instead
 * of trying to display it.
 * 
 * In addition, HTTP provides a structured set of status codes to tell you and
 * your browser what happened. A 200 response is a success.  A 403 response says
 * the resource is forbidden.  If you get a 404, then you've navigated somewhere
 * that doesn't exist.
 * 
 * Could we invent some kind of virtual reality kind of internet for the next 
 * thirty years?  Maybe.  For now, HTTP is the most successful way to transfer
 * data (probably) in human history.
 * 
 * 1. https://github.com/request/request
 */

// this is not a default node dependency, but that's okay because it works!
var request = require('request');
request('http://google.com', function(error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
});