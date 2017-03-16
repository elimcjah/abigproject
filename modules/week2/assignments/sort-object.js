/**
 * @file
 * Data constantly is being sorted and searched.  In this assignment, you'll
 * sort through the book list in books.json.
 * 
 * To complete this assignment, examine the books structure in books.json.
 * 
 * You'll be benefitted to test your function using the "getFirstTenBooks"
 * function.  It's recommended to leverage a combination of console.log's
 * and the debugger to see what's going on where.
 */

var getFirstTenBooks = function() {
    return JSON.parse(
        require('fs').readFileSync(__dirname + '/../books.json', 'UTF8'))
        .slice(0, 10);
}

/** 
 * Sort the inputted set of books by name.
 * @param {Array<Object>} books An array of books.
 * @param {Boolean} asc If true, returns list in ascending order.
 */
function sortByName(books, asc = true) {
    
}

/** 
 * Sort the inputted set of books by author.
 * @param {Array<Object>} books An array of books.
 * @param {Boolean} asc If true, returns list in ascending order.
 */
function sortByAuthor(books, asc = true) {
    
}

