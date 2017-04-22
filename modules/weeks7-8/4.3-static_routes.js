/**
 * @author Mike Whitfield
 * A "static route" is a "middleware" that reads the filesystem, and uses the 
 * appropriate content-type and other needed header information to serve files.  
 * 
 * Servers typically have functioned to send the majority of its files via
 * the filesystem.  For instance, placing an index.html file into the "www/"
 * or "public/" directory has long been a pattern of web servers.  
 * 
 * Part of the utility of a web server is that serves a common set of files
 * with the appropriate HTTP headers including content-type and content-length. 
 * This includes media files like images, sounds, movies.  It also includes 
 * standard files for displaying HTML pages like .js, .html, .css.
 * 
 * In this example, we'll see how serving files *without* content-length and 
 * content-type headers either trigger the browser to download the file or it
 * triggers the file to be displayed with garbage-looking text.
 */


/**
 * This is a basic Express server for 4.3.  It adds a setupStaticRoutes 
 * function.
 * @class
 */
class Server {
    /**
     * Recall that the constructor runs when we instantiate a "new" Server 
     * object.
     */
    static initialize() {
        Server.express = require('express');
        Server.app = this.express(); // we want to maintain the express object
    }

    /**
     * Sets up the necessary routing.
     */
    static setupRoutes() {
        // this is a route.  the asterisk denotes that the route applies to 
        // all incoming path requests.
        Server.app.all('*', function(req, res, next) {
            console.log('Requested path: ', req.path); // the reuested URI
            console.log('Query string: ', req.query); // the querystring for GET requests

            // our req object tells about the HTTP request.
            // our res object gives us access to control the response.
            // our next object allows us to programmatically goto the next route
            next(); // goto the next routes

            // if we didn't call next, we'd never fulfill the request!
        });
    }

    /**
     * Sets up static routes.
     */
    static setupStaticRoutes() {
        // just use the static route for jpgs.
        Server.app.all('/4.3/*.jpg', function(req, res, next) {
            res.send(require('fs').readFileSync(__dirname + 
                '/www/4.3/waterfall-served-without-headers.jpg'));
        });
        // just use the static route for jpgs.
        Server.app.all('*.jpg', Server.express.static(__dirname + '/www'));
        // now add everything else.
        Server.app.all('*', Server.express.static(__dirname + '/www'));
    }

    /**
     * Starts an Express.js server.  If port 3000 is not open, throws an error.
     * @return {Promise} A promise that resolves when the server is up, throws
     * if port 3000 is occupied or some other error occurs.
     */
    static startServer() {
        return new Promise((resolve, reject) => {
            try {
                Server.app.listen(3000, function() {
                    console.info('Server listening on port 3000');
                    resolve();
                });
            } catch(e) {
                reject(e);
            }
        });
    }
}

module.exports = Server;

module.exports.nowYouTry = function() {
    Server.initialize();
    // navigate to localhost:3000/4.3/waterfall-served-without-headers.jpg
    Server.app.all('/4.3/*.jpg', function(req, res, next) {
        // uncomment this line, and watch as the browser forces a download!
        // next();
        res.set('content-type', 'image/jpeg');
        res.set('etag', (new Date).getTime()); // an etag is a unique identifier used in caching
        res.send(require('fs').readFileSync(__dirname + 
            '/www/4.3/waterfall-served-without-headers.jpg'));
    });
    // navigate to localhost:3000/4.3/html-served-with-plaintext.html
    Server.app.all('/4.3/*.html', function(req, res, next) {
        // comment the following line & watch as the browser renders the HTML!
        // hint: make sure to use a hard-refresh so you don't load from cache
        // https://superuser.com/questions/220179/how-can-i-do-a-cache-refresh-in-google-chrome
        res.set('content-type', 'text/plain');
        res.set('etag', (new Date).getTime()); // an etag is a unique identifier used in caching
        next();
    });
    Server.setupRoutes();
    Server.setupStaticRoutes();
    // Start the server 
    Server.startServer();
}
// uncomment the following line and run, "node ./4.3-static_routes.js"
// module.exports.nowYouTry();