/**
 * 
 * classes as templates, lesson 3.8
 * @author Laurie Linz
 * @author Mike Whitfield
 * 
 * Classes help simplifiy prototype-based inheritance. A class can be created to 
 * simplifiy object creation providing clear and simple syntax. 
 * 
 */

class Book {
    /**
     * A constructor is a special function (it's a language keyword) called
     * when a class is "instantiated".  A class is instantiated when it is 
     * called like a function with the "new" keyword.  This is similar to the 
     * examples presented in 3.2.  In this way, a class can be thought of 
     * as a shortcut for writing a function that returns an object.  The 
     * primary difference is that a class is also a container for other 
     * functions.
     * 
     * Each time a new class object is instantiated, the constructor is called
     * and a new object is allocated and assigned to this.  Each time a 
     * function in this class is called, it is called with the correct "this"
     * context.
     */
    constructor (title, author, date, genre) {
        this.title = title;
        this.author = author;
        this.date = date;
        this.genre = genre;
    }

    /**
     * This is a function. Each time the function is called, the special "this"
     * object is attached as the context of the function.  The function
     * readBook might be best thought of as a function that operates on a data
     * type specified by the class.
     */
    readBook() {
        console.log(`Now reading ${this.title} by ${this.author}.`);
    }
}

const the_hobbit = new Book('The Hobbit', 'Tolkien', 1937, 'non-fiction');
// since classes receive a new "this" object each time, they can be reused
const star_wars = new Book('Star Wars IV: A New Hope', 'George Lucas', 1976, 
    'fiction');
// the reuse of a class is one of the primary reasons for object oriented programming


/*
  Now let's redefine the Game class from 3.1, this time using classes as
  templates.
 */
// notice that we add a constructor, remove the static keywords, 
// and reference instance variables using this.* instead of Game.*
class Game {
    constructor() {
        this.rl = require('readline').createInterface({
            input: process.stdin
        });

        this.state = [];
        this.started = false;

        this.title = '';

        this.initilaize();
    }
    
    processInput() {
        var stdin = process.openStdin(); 

        this.rl.on('line', function (input) {
            this.receiveInput(input);
            return false;
        });

        this.rl.on('close', function (input) {
            this.receiveInput(input);
            return false;
        });
    }

    currentState() {
        return this.state.slice(-1)[0];
    }

    displayWelcomeMenu() {
        console.log('Welcome to ' + this.title);
        console.log('===');
        console.log('   Main Menu');
        console.log('1. Start New Game');
        console.log('2. Quit Game');
        
        this.state.push('mainMenu');
    }

    draw() {
        switch (this.currentState()) {
            case 'gameOptions':
                this.gameOptions();
            break;
            case 'mainMenu':
                this.displayWelcomeMenu();
            break;
            case 'quit':
                this.quitScreen();
            break;
        }
    }
    
    enterGame(name) {
        this.started = true;
        process.argv[2] = name;
        require('node-games');
        this.started = false;
    }

    gameOptions() {
        console.log('       a. spacecraft');
        console.log('       b. snake');
        console.log('');
        console.log('       x. back');
    }

    hasStarted() {
        return this.started;
    }

    initilaize() {
        this.title = 'Mike\'s Arcade';
        this.state = []; // state here is explicit

        this.displayWelcomeMenu();
        this.processInput();
    }

    quitScreen() {
        console.log('Are you sure you want to quit (Y/N)?');
    }

    receiveInput(char) {
        switch(this.currentState()) {
            case 'gameOptions':
                if (char == 'a') {
                    this.enterGame('spacecraft');
                }
                if (char == 'b') {
                    this.enterGame('snake');
                }
                if (char == 'x') {
                    this.state.pop();
                }
            break;
            case 'mainMenu':
                if (char == '1') {
                    this.state.push('gameOptions');
                }
                if (char == '2') {
                    this.state.push('quit');
                }
            break;
            case 'quit':
                if (char == 'y') {
                    process.exit();
                }
                this.state.pop();
            break;
        }

        this.draw();
    }
}

module.exports = Game;