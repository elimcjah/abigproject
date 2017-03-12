/**
 * 
 * bind, apply, call, lesson 3.6
 * @author Mike Whitfield
 * 
 * It's very common for JavaScript to include highly nested functions and 
 * JavaScript will make many network requests returning asynchronously.  When 
 * this occurs, it becomes important to set the context a function executes with
 * or to return context to a function after some asynchronous return.
 * 
 * In JavaScript we ensure this by calling one of the context binding functions:
 *      bind
 *      apply
 *      call
 * 
 * These functions accept an object that then is assigned to the special 'this'
 * object discussed in lesson 3.2.  This works because even Object literals have
 * a this object, although it's implicit.
 * 
 * Take a look below for some examples of how object binding works and when
 * you might use it.
 */

var playSport = function(stadium, weather) {
    console.log('now playing ' + this.name + ' at ' + stadium + ' stadium.');
    console.log(weather);
    this.play();
    try {
        this.takeShot();
    } catch(e) {
        // undefined for baseball
    }
    try {
        this.hitBall();
    } catch(e) {
        // undefined for basketball, hockey
    }
}

var baseball = {
    name: 'baseball',
    play: function() {
        console.log('now playing baseball');
    },
    homeScore: 0,
    awayScore: 0,
    hitBall: function() {
        let timeToHitBall = 500;
        setTimeout(function() {
            this.homeScore++;
        }.bind(this), timeToHitBall);
    },
    takeShot: function() {
        this.hitBall();
    }
};

var basketball = {
    name: 'basketball',
    play: function() {
        console.log('now playing basketball');
    },
    homeScore: 0,
    awayScore: 0,
    takeShot: function() {
        let timeToTakeShot = 300;
        setTimeout(function() {
            this.homeScore++;
        }.bind(this), timeToTakeShot);
    }
};

var hockey = {
    name: 'hockey',
    play: function() {
        console.log('now playing hockey');
    },
    homeScore: 0,
    awayScore: 0,
    takeShot: function() {
        let timeToTakeShot = 300;
        setTimeout(function() {
            this.homeScore++;
        }.bind(this), timeToTakeShot);
    }
};

playSport.call(baseball, 'yankees', 'today is sunny with a high of 63F');
// 'now playing baseball at yankees stadium.'
// 'today is sunny with a high of 63F'

playSport.apply(basketball, ['pepsi center', 'tonight it\'s cloudy with a high of 47F']);
// 'now playing basketball at pepsi center.'
// 'tonight it\'s cloudy with a high of 47F'

// this should also work fine, but you probably would use call/apply instead
playSport.bind(hockey)('boston garden', 'tonight it\'s a cold night with a high of ' + 
    '24F and a wind chill of -6F');