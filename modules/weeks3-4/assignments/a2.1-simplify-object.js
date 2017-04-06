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

/**
 * Gets the first ten books from the database.
 * @return {Array} An array of books containing the first ten entries.
 */
var getFirstTenBooks = function() {
    return JSON.parse(
        require('fs').readFileSync(__dirname + '/../books.json', 'UTF8'))
        .slice(0, 10);
}



/** 
 * Filter the inputted object for just the selected columns.
 * @param {Array} books The array of books.
 * @param {Array} columns An array of columns.
 * @return {Array} A filtered array of objects containing only the specified
 * columns.
 */
function filterColumns(books, columns = ['title', 'author']) {
    
}

module.exports = filterColumns;