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

let getFirstTenBooks = function() {
    return JSON.parse(
        require('fs').readFileSync(__dirname + '/../books.json', 'UTF8'))
        .slice(100, 110);
};

/**
 * Filter the inputted object for just the selected columns.
 */

function filterColumns(books, columns) {

    // Create an empty array push results
    let byColumns = [];

    // Iterate through each book.
    for(let i = 0; i < books.length; i++ ){

        // Reduce the objects to return only properties requested as input parameters
        let singleObject = columns.reduce(function(o, k) { o[k] = books[i][k]; return o; }, {});

        // Push those answers to the byColumns empty array created at beginning of the function
        byColumns.push(singleObject);
    }
 console.log(byColumns);
    return byColumns;
}

filterColumns(getFirstTenBooks(),['edition_info', 'title', 'book_id']);

module.exports = {
   filterColumns: filterColumns
};