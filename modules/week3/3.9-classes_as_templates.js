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
        }.bind(this));

        this.rl.on('close', function (input) {
            this.receiveInput(input);
            return false;
        }.bind(this));
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