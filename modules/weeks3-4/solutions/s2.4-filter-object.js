/**
 * @file
 * This function has you filter the books object by the date it was published.
 * Careful, this one is tricky!  Study the books.json object format before
 * attempting this one.  The data is non-uniform, and you'll need to do string
 * extraction using patterns to succeed.
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
 * Finds four consecutive digits inside a string.
 * @param {String} str The string to search.
 * @return {Number} The four-digit number or null if no number was found.
 */
var findYearDigits = function(str) {
    let result = (new RegExp(/(\D|^)(\d{4})(\D|$)/, 'g')).exec(str);
    return !result ? null : parseInt(result[2]);
}

/** 
 * Filter the inputted books bounded by input year.
 * @param {Array} books An array of books.
 * @param {Number} yearMin The start year to filter by.
 * @param {Number} yearMax The end year to filter by.
 * @return {Array} The array of books, filtered by their publish date.
 */
function filterByDate(books, yearMin, yearMax) {
    return books.filter((book) => {
        let year = findYearDigits(book['edition_info']);
        if (year == null) {
            return false;
        }
        if (year < yearMin) {
            return false;
        } else if (year > yearMax) {
            return false;
        }
        return true;
    });
}

module.exports = filterByDate;