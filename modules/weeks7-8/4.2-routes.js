/**
 * @author Mike Whitfield
 * Routes are almost a misnomer, or a concept that a pattern/practice more than 
 * anything defined in engineering rigor.  We might think of routes as closest
 * to predefined execution paths that a client and server communicate along.
 * 
 * Routes may have originated in a software framework like Ruby on Rails where
 * the authors wanted to better facilitate API creation.  In contrast to 
 * API "routes", servers also produce rendered templates that are sent to a
 * client for rendering as well.  API's generally output JSON or execute 
 * database commands.
 * 
 * It used to be that there was no specific URL-based interface for which API's
 * could be controlled.  Ruby on Rails attempted to standardize this syntax.
 */

/**
 * This is a basic Express server for 4.2.  It adds a setupRoutes function.
 * @class
 */
class Server {
    /**
     * Recall that the constructor runs when we instantiate a "new" Server 
     * object.
     */
    static initialize(helloString = 'Fancy!') {
        Server.express = require('express');
        Server.app = this.express(); // we want to maintain the express object
        Server.setupRoutes();
    }

    /**
     * Sets up the necessary routing.
     */
    static setupRoutes() {
        // this is a route.  the asterisk denotes that the route applies to 
        // all incoming path requests.
        //
        // *** IMPORTANT ***
        //
        // it's very *important* the order in which routes are added, since 
        // an incoming request will be checked against the available routes in
        // order!
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
                console.warn()
                reject(e);
            }
        });
    }
}

Server.initialize();
module.exports = Server;

module.exports.nowYouTry = function() {
    // You should now initialize the server, and this time you should mimick
    // the functionality in the Server.setupRoutes function using Server.app.

    // Create two routes.  One route should "pass-through" using next and
    // send our a console log message.  The other route should use res.send()
    // to send something back to the connected user.
    Server.startServer();
}
// uncomment the following line and run, "node ./4.2-routes.js"
// module.exports.nowYouTry();