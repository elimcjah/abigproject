/**
 * @file
 * Similar to tanks-static.js, in this assignment you'll implement the game 
 * 'tanks'.  Instead of using static functions, you'll implement tanks by 
 * overriding the class described in 3.9.
 * 
 * To do this, you'll need to author an override for the Game.receiveInput and 
 * Game.gameOptions functions.
 */

var Game = require(__dirname + '/../3.9-classes_as_templates.js');

class TanksGame extends Game {
    gameOptions() {
        super.gameOptions(); // do we need to call this?
    }
    receiveInput(char) {
        super.receiveInput(char); // do we need to call this?
    }
}

new TanksGame();