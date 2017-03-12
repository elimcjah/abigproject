/**
 * 
 * Classes as containers, lesson 3.1
 * @author Mike Whitfield
 * 
 * Object oriented programming discusses the use of "objects" as pre-defined
 * "instantiations" of data/control templates called classes.  At their
 * simplest, classes are containers for functions.
 * 
 * The objectives of object oriented programming are as follows:
 *      encapsulation   -> ensure everything is contained in one place/file
 *      extensbiility   -> ensure logical extension of functionality
 *      reuse           -> ensure reuse of functionality, no duplicate code
 *      data hiding     -> hide data not relevant to outside interaction
 * 
 * In this file, we'll look at the most basic function in a class, the static
 * function.  While the syntax utilizes an extra keyword, there is no state
 * storage implied and it's therefore the most like the key/value object store
 * previously discussed.
 * 
 */

class Game {
    static processInput() {
        var stdin = process.openStdin(); 
        Game.rl = require('readline').createInterface({
            input: process.stdin
        });

        Game.rl.on('line', function (input) {
            Game.receiveInput(input);
            return false;
        });

        Game.rl.on('close', function (input) {
            Game.receiveInput(input);
            return false;
        });
    }

    static currentState() {
        return Game.state.slice(-1)[0];
    }

    static displayWelcomeMenu() {
        console.log('Welcome to ' + Game.title);
        console.log('===');
        console.log('   Main Menu');
        console.log('1. Start New Game');
        console.log('2. Quit Game');
        
        Game.state.push('mainMenu');
    }

    static draw() {
        switch (Game.currentState()) {
            case 'gameOptions':
                Game.gameOptions();
            break;
            case 'mainMenu':
                Game.displayWelcomeMenu();
            break;
            case 'quit':
                Game.quitScreen();
            break;
        }
    }
    
    static enterGame(name) {
        Game.started = true;
        process.argv[2] = name;
        require('node-games');
        Game.started = false;
    }

    static gameOptions() {
        console.log('       a. spacecraft');
        console.log('       b. snake');
        console.log('');
        console.log('       x. back');
    }

    static hasStarted() {
        return Game.started;
    }

    static initilaize() {
        Game.title = 'Mike\'s Arcade';
        Game.state = []; // state here is explicit

        Game.displayWelcomeMenu();
        Game.processInput();
    }

    static quitScreen() {
        console.log('Are you sure you want to quit (Y/N)?');
    }

    static receiveInput(char) {
        switch(Game.currentState()) {
            case 'gameOptions':
                if (char == 'a') {
                    Game.enterGame('spacecraft');
                }
                if (char == 'b') {
                    Game.enterGame('snake');
                }
                if (char == 'x') {
                    Game.state.pop();
                }
            break;
            case 'mainMenu':
                if (char == '1') {
                    Game.state.push('gameOptions');
                }
                if (char == '2') {
                    Game.state.push('quit');
                }
            break;
            case 'quit':
                if (char == 'y') {
                    process.exit();
                }
                Game.state.pop();
            break;
        }

        Game.draw();
    }
}

module.exports = Game;