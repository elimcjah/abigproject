/**
 * Conditionals, lesson 2.3
 * @author Mike Whitfield
 * 
 * Conditionals are blocks of code that utilize statements resolving to 
 * true/false values.  If a conditional statement is true, then its block of
 * code executes.
 * 
 * Conditionals can be combined into if/else if/else statements.  This ensures
 * that only one of the blocks in the series executes.  Conditionals can be
 * nested as well.
 * 
 * Finally, logical operators can be used to relate conditional statements
 * using AND/OR/XOR/NOT.  Each of these values are significant and are
 * fundamental to the operation of a computer at a low level.
 * 
 * https://en.wikipedia.org/wiki/Truth_table
 * 
 */

var someFile = 'happy.class.js'; // a string, 'member?
if (someFile.endsWith('class.js')) {
    // code inside this block runs
} else {
    // code inside this block does not run
}

var bookListObj = {
    'Norse Mythology': {
        'author': 'Neil Gaiman',
        'reviewScore': 4.5,
        'upvote': function() {
            this.reviewScore += 0.1;
        }
    },
    'Echoes in Death': {
        'author': 'J.D. Robb',
        'reviewScore': 4.0,
        'upvote': function() {
            this.reviewScore += 0.1;
        }
    },
    'Hillbilly Elergy: A Memoir of a Family and Culture in Crisis': {
        'author': 'J.D. Vance',
        'reviewScore': 4.0,
        'upvote': function() {
            this.reviewScore += 0.1;
        }
    }
};

var book1 = bookListObj[Object.keys(bookListObj)[0]];
var book2 = bookListObj[Object.keys(bookListObj)[1]];
var book3 = bookListObj[Object.keys(bookListObj)[1]];
if (book1.reviewScore >= 4 && book2.reviewScore >= 4 && book3.reviewScore >= 4) {
    // all books reviewScore is >= 4
    console.log('all the books are good'); // this runs
}
if (!(book1.reviewScore > 4 && book2.reviewScore > 4 && book3.reviewScore > 4)) {
    // book2.reviewScore and book3.reviewScore are NOT > 4
    console.log('the books could still improve'); // this runs
}

/*
 In the below code, sometimes you might intend to run only one of the statements
 and erroneously run many due to having if blocks instead of if/else if/else blocks.

 The following runs upvotes on all the books if the condition passes.
 */
if (book1.reviewScore <= 4) {
    book1.upvote();
}
if (book2.reviewScore <= 4) {
    book2.upvote();
}
if (book3.reviewScore <= 4) {
    book3.upvote();
}

/*
 Below, the if/else if/else block only runs on the first occurrence of a 
 passing test.
 */
if (book1.reviewScore <= 4) {
    book1.upvote();
} else if (book2.reviewScore <= 4) {
    book2.upvote();
} else if (book3.reviewScore <= 4) {
    book3.upvote();
} else {
    console.log('found no books to upvote!');
}

/*
 Conditionals are sometimes helpful to determine if properties are set by relying
 on the value of "null" or "undefined" to resolve to false
 */
if (book1.downvote) {
    // does not get here, downvote DNE
} else {
    console.log('no downvote function exists!');
}

/*
 switch statements are excellent for strings where it would be annoying to 
 write many if/else if/else blocks or you want to combine statements for multiple
 inputs.
 */
var inputCommand = 'cd';
switch (inputCommand) {
    case 'cd':
        console.log('change directory');
    break;
    case 'cd ..':
        console.log('change directory up a level');
    break;
    case 'node someFiles.js':
        console.log('runs someFile.js in node');
    break;
    case 'ls -l':
    case 'ls': 
        console.log('list');
    break;
    default:
        console.log('unknown command!');
    break;
}