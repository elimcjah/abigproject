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

var getFirstTenBooks = function() {
    return JSON.parse(
        require('fs').readFileSync(__dirname + '/../books.json', 'UTF8'))
        .slice(0, 10);
}

// console.log(getFirstTenBooks().keys)

/** 
 * Filter the inputted books bounded by input year.
 */
function filterByDate(books, yearMin, yearMax) {

    // iterate through each book
    for(let i = 0; i<books.length; i++){

        // Remove all characters except hyphens from edition_info and publisher_text
        let aaed  = books[i]['edition_info'].replace(/[^0-9\-]/g,'');
        let aapub = books[i]['publisher_text'].replace(/[^0-9\-]/g,'');

        // If the first character in new variables is a hyphen Remove
        if(aaed.charAt(0) == '-'){
            aaed = aaed.substring(1);
        }
        if(aapub.charAt(0) == '-') {
            aaed = aaed.substring(1);
        }

        // Add a new property to each book for date that will include month
        books[i].date_published = aaed ? aaed : aapub;

        // Add a new property to each book with just the year
        books[i].year = aaed ? aaed.substring(0,4) : aapub;

        //  ALL BOOKS HAVE A KEY OF 'year' NOW.

    }

    // FILTER OUT BOOKS OLDER THAN yearMin

    if(yearMin == undefined){
        yearMin = -1;
    }

    // Iterate through each book again
    for(let j = books.length - 1; j >= 0; j--){

        // Remove all books that aren't aren't greater than yearMin
        // Since yearMin implies that it can be equal then we will use > not >=
        if(books[j].year && yearMin && yearMin > books[j].year){
            books.splice(j,1);
        }

        // BOOKS ARRAY NOW HAS BEEN MODIFIED TO REMOVE ALL BOOKS OLDER THAN yearMin!
    }

    // FILTER OUT BOOKS NEW THAN yearMax

    // Plan for error from undefined
    if(yearMax == undefined){
        yearMax = 9999;
    }

    // Iterate through each book again
    for(let k = books.length - 1; k >= 0; k--){

        // Remove all books that aren't aren't less than yearMax
        // Since yearMax implies that it can be equal then we will use > not >=
        if(books[k].year && yearMax && yearMax < books[k].year){
            books.splice(k,1);
        }

        // BOOKS ARRAY NOW HAS BEEN MODIFIED TO REMOVE ALL BOOKS NEWER THAN yearMax!
    }

    // Return each long book title to the console.  Can be sent through a 'return' as well with a few modifications.
    for(let i = 0; i < books.length; i++){

        // If a book is returned because its year is missing the user should be alerted to this reason.
        if(books[i].year == '' ){
            console.log(books[i]['title_long'] +' **** RETURNED BECAUSE NO YEAR PUBLISHED FOUND ****');
        }
        else{
            // Return all books with a long title and year.
            console.log(books[i]['title_long'] + ' from ' + books[i]['year']);
        }
    }
}

filterByDate(getFirstTenBooks(), 1998, 2000);