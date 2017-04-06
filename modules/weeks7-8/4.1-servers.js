/**
 * @author Mike Whitfield
 * Client/Server models are fundamental.  The only alternatives to client/server
 * models is the means by which state information is processed on the client.
 * In other words, when we look really closely, the classical client/server
 * model has the server dictate everything the client presents.  This is similar
 * to a command-line prompt where the only thing rendered is the user input
 * and the output of a run command.  If the OS is the "server", then the 
 * terminal screen is the client.
 * 
 * Typically, in a browser, the client is the browser itself whereas the server
 * is the machine that provides the files the browser renders.  The role of the
 * server becomes stylistic under different models, therefore.  
 * 
 * If we were talking about games, we might begin to understand different 
 * client models when we talk about how much computation the client does vs.
 * the server.  For instance, "particle effects" like the sparks from a 
 * rocket shell are almost always agreed upon to render on a game client.  The
 * reason is that it's unimportant for all clients to see the rocket sparks
 * exactly the same, and it would add an unnecessary load to the server and 
 * the network simultaneously.
 * 
 * It becomes mathematically interesting when clients introduce a behavior 
 * called "prediction".  Character models often receive animation instructions
 * that are based on an initial network state.  Sometimes, prediction gets the
 * prediction wrong, and the client can always be corrected with the next server
 * data point that comes over the pipe.  In an elegant way, games go on to 
 * smoothly correct for these errors to transition the predictions back to the
 * agreed on server state.
 * 
 * We can therefore think of a client as a set of inputs, and the server 
 * procsses our choices to produce the next set of display and choices.
 * 
 * The only reason to think of a server at all is because we want to have some
 * transactional behavior, or we want to check-in data for some reason.  It
 * becomes less important to analyze what is client and what is server in a 
 * local game where the only valuable "check-in" is saving a game to a local
 * filesystem.
 * 
 * An example of a highly transactional system would be an access control system
 * or bank software.
 * 
 * As we think in client/server models, it's relevant to think about where the
 * "line" is between client and server.  Web applications and mobile apps 
 * generally send "state" to the server after a user submits a request for 
 * new content, for instance.  The server then processes that state, using 
 * algorithms.  The server finally sends back some new state information to the
 * client.  This could be an entire page, or it could be some instruction to
 * load a page already internally stored on the client.
 * 
 * It's important to understand the theory behind client/server models so as to
 * not get lost in the shifts recent web technologies have made to reintroduce
 * "thick" clients.  As you read on in these lessons, you'll learn how JSON
 * is decidedly one of the simplest formats to send data through the pipe.
 */

/**
 * This is a basic Express server.  We'll build in this class in future 
 * modules.
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
        Server.app.all('*', function(req, res, next) {
            res.send(helloString);
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
    // using Server.app, initialize a server, changing the port on which the
    // server is run.

    // also, before running the server, call Server.initialize with some 
    // custom string to verify when you point your browser to the server
    // local that it is indeed the correct location.
}