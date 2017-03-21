/**
 * @file
 * This assignment has you simplify an object.  You need to get really good
 * at composing simple objects into human-readable formats, and you need to
 * likewise break those human-readable objects apart into simple parts so they
 * can be edited.
 *
 * To complete this assignment, examine the books structure in books.json.
 *
 * You'll be benefitted to test your function using the "getFirstTenBooks"
 * function.  It's recommended to leverage a combination of console.log's
 * and the debugger to see what's going on where.
 */

// COMPLETE

var getFirstTenBooks = function() {
    return JSON.parse(
        require('fs').readFileSync(__dirname + '/../books.json', 'UTF8'))
        .slice(0, 10);
}

/**
 * Filter the inputted object for just the selected columns.
 */
function filterColumns(books, columns = ['title', 'author_data']) {

    let byColumns = [];

    for(let i = 0; i < books.length; i++ ){
        let singleObjects = columns.reduce(function(o, k) { o[k] = books[0][k]; return o; }, {});

        byColumns.push(singleObjects);
    }

       return byColumns;
}

filterColumns(getFirstTenBooks());