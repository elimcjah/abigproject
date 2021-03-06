/**
 * @file
 * This function has you searching by author and by title.  You'll want to
 * distinguish between an exact match or a partial match for this assignment.
 *
 * To complete this assignment, examine the books structure in books.json.
 *
 * You'll be benefitted to test your function using the "getFirstTenBooks"
 * function.  It's recommended to leverage a combination of console.log's
 * and the debugger to see what's going on where.
 */


let getFirstTenBooks = function() {
    return JSON.parse(
        require('fs').readFileSync(__dirname + '/../books.json', 'UTF8'))
        .slice(0, 10);
}

/**
 * Return all books matching the title.
 */

function searchTitle(books, title, partial) {

    // Remove case-sensitivity from the input title
    title = title.toUpperCase();

    // If Looking for a partial match
    if(partial === true){

        // Iterate through each book in the books object
        for(let i = books.length - 1; i >= 0; i--){

            // For each book find the long title, uppercase it, and search for an index of input title
            if(books[i]['title_long'].toUpperCase().indexOf(title) === -1 ){

                // If the title isn't found then splice the book from the book list
                books.splice(i,1);
            }
        }
    }

    // If looking for an exact match
    if(partial === false){

        // Iterate through each book in the books object again.
        for(let i = books.length - 1; i >= 0; i--){

            // If the input title is not equal to the long title with case-sensitivity removed
            if(title !== books[i]['title_long'].toUpperCase()){

                // remove that book from the list
                books.splice(i,1);
            }
        }
    }

    // OUTPUT:

    // If there are no books left in the books array
    if(books.length === 0){

        // Let the user know there are no results.
        console.log('Sorry. No matches meet your criteria.')
    }

    // If there are books left in the books array
    if(books.length > 0){

        // Iterate through the books array
        for(let i = 0; i < books.length -1; i++){

            // Console log the title
            console.log(books[i]['title_long'])
        }
    }

    return books;
}

/**
 * Return all books matching the author.
 */
function searchAuthor(books, author, partial = false) {

    // Remove case-sensitivity from the input title
    author = author.toUpperCase();

    // Iterate through each book in the books array
    for(let i = 0; i < books.length; i++){

        // Create a property of 'author' with a value of an empty array to each book
        books[i].author = [];

        // Iterate through all author_data in each book
        for(let j = 0; j < books[i]['author_data'].length; j++){

            // If there is no comma in the author data name field
            if(books[i]['author_data'][j]['name'].indexOf(',') === -1){

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

    // ALL AUTHORS ARE NOW BEING PLACED INTO A SINGLE ARRAY OF THE PROPERTY 'author' OF THE BOOK OBJECT


    // Because we are iterating through 2 arrays, it seems easier to just create a new array and push rather than splice.
    let booksWithAuthor = [];

    // If Looking for a partial match
    if(partial){

        // Iterate through each book in the books object
        for(let i = books.length - 1; i >= 0; i--){

            // Iterate through each author in the author array
            for(let j = 0; j < books[i].author.length; j++){

                // For each book find the author, uppercase it, and search for an index of input title
                if(books[i]['author'][j].toUpperCase().indexOf(author) !== -1 ){

                    // Add the book with matching author to the new booksWithAuthor Array.
                    booksWithAuthor.push(books[i]);
                }
            }
        }
    }

    // // If looking for an exact match
    if(partial === false){

        // Iterate through each book in the books object again.
        for(let i = books.length - 1; i >= 0; i--){

            // Iterate through each author in the author array.
            for(let j = 0; j < books[i].author.length; j++){

                // If the input author is not equal to the author in array with case-sensitivity removed
                if(author === books[i]['author'][j].toUpperCase()){

                    // push that book to the new book array
                    booksWithAuthor.push(books[i]);
                }
            }
        }
    }

    // OUTPUT:

    // If there are no books left in the books array
    if(booksWithAuthor.length === 0){

        // Let the user know there are no results.
        console.log('Sorry. No matches meet your criteria.')
    }

    // If there are books left in the books array
    if(booksWithAuthor.length > 0){

        // Iterate through the books array
        for(let i = 0; i < booksWithAuthor.length; i++){

            // Console log the title
            console.log(booksWithAuthor[i]);
        }
    }
    return booksWithAuthor;
}

//searchTitle(getFirstTenBooks(), 'java', partial = true);

searchAuthor(getFirstTenBooks(), 'CHRISTIAN WENZ');
