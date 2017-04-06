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
 * Sort the inputted set of books by name.
 * @param {Array<Object>} books An array of books.
 * @param {Boolean} asc If true, returns list in ascending order.
 * @returns {Array} An array of books, sorted by name.
 */
function sortByName(books, asc = true) {
    return books.sort((b1, b2) => {
        let b1Title = b1['title'] || b1['title_latin'];
        let b2Title = b2['title'] || b2['title_latin'];
        if (b1Title < b2Title) {
            return -1;
        } else if (b1Title == b2Title) {
            return 0;
        } else {
            return 1;
        }
    });
}

/** 
 * Sort the inputted set of books by author.
 * @param {Array<Object>} books An array of books.
 * @param {Boolean} asc If true, returns list in ascending order.
 * @returns {Array} An array of books, sorted by name.
 */
function sortByAuthor(books, asc = true) {
    return books.sort((b1, b2) => {
        if (!b1['author_data'] || !b1['author_data'].length) {
            return -1;
        }
        if (!b2['author_data'] || !b2['author_data'].length) {
            return 1;
        }
        let b1Author = b1['author_data'][0]['name'];
        let b2Author = b2['author_data'][0]['name'];
        if (b1Author < b2Author) {
            return -1;
        } else if (b1Author == b2Author) {
            return 0;
        } else {
            return 1;
        }
    });
}

module.exports.sortByName = sortByName;
module.exports.sortByAuthor = sortByAuthor;