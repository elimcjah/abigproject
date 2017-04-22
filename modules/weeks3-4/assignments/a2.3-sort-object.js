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

// TODO redo so that the solution works to sort by the last name.

let getFirstTenBooks = function() {
    return JSON.parse(
        require('fs').readFileSync(__dirname + '/../books.json', 'UTF8'))
        .slice(100, 110);
}

/**
 * Sort the inputted set of books by name.
 * @param {Array<Object>} books An array of books.
 * @param {Boolean} asc If true, returns list in ascending order.
 */

function sortByName(books, asc = true) {

    if(asc !== true){
        books = books.sort((a, b) => a['title_long'].toLocaleLowerCase() < b['title_long'].toLowerCase());
    }
    else{
        books = books.sort((a, b) => a['title_long'].toLocaleLowerCase() > b['title_long'].toLowerCase());
    }
    return books;
}

/**
 * Sort the inputted set of books by author.
 * @param {Array<Object>} books An array of books.
 * @param {Boolean} asc If true, returns list in ascending order.
 */

function sortByAuthor(books, asc = true) {
    for(let i = 0; i < books.length; i++) {

        // Create a property of 'author' with a value of an empty array to each book
        books[i].author = [];

        // Iterate through all author_data in each book
        for (let j = 0; j < books[i]['author_data'].length; j++) {

            // If there is no comma in the author data name field
            if (books[i]['author_data'][j]['name'].indexOf(',') === -1) {

                // Push that name to the newly created author property
                books[i]['author'].push(books[i]['author_data'][j]['name']);
            }

            // If there is a comma in the name
            if(books[i]['author_data'][j]['name'].indexOf(',') !== -1){

                // create an empty array
                let x = [];

                // for each book and each author name in that book, split the name into parts of an array
                x = books[i]['author_data'][j]['name'].split(' ');

                // Iterate through part of the name
                for(let k = x.length; k >= 2; k--){

                    // Take the last element from the array
                    let p = x.pop();

                    // Add the 'popped' element to the beginning of the new array
                    x.unshift(p);

                }

                // Join the elements of the array to create 1 element in the array
                x = x.join(' ');

                // Replace the left over commas with a blank space.
                x = x.replace(',', '');

                // Add the authors to the newly created authors property of each book.
                books[i]['author'].push(x);
            }
        }
    }

    if(asc !== true){
        books = books.sort((a, b) => a['author'][0] < b['author']);
    }
    else{
        books = books.sort((a, b) => a['author'][0] > b['author']);
    }

    for(let i = 0; i < books.length; i++){
        console.log(books[i]['author']);
    }

    return books;
}

sortByAuthor(getFirstTenBooks());