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

var getFirstTenBooks = function() {
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
    if(partial == true){

        // Iterate through each book in the books object
        for(let i = books.length - 1; i >= 0; i--){

            // For each book find the long title, uppercase it, and search for an index of input title
            if(books[i]['title_long'].toUpperCase().indexOf(title) == -1 ){

                // If the title isn't found then splice the book from the book list
                books.splice(i,1);
            }
        }
    }


    // If looking for an exact match
    if(partial == false){

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
    if(books.length == 0){

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
}

/** 
 * Return all books matching the author.
 */
function searchAuthor(books, author, partial = true) {
    // Remove case-sensitivity from the input title
    //author = author.toUpperCase();



    // Iterate through each book in the books array
    for(let i = 0; i < books.length; i++){

        books[i].author = [];

        // Iterate through all author_data in each book
        for(let j = 0; j < books[i]['author_data'].length; j++){

            if(books[i]['author_data'][j]['name'].indexOf(',') !== -1){

                books[i]['author'].push(books[i]['author_data'][j]['name']);
            }
            if(books[i]['author_data'][j]['name'].indexOf(',') == -1){
                let x = [];
                x = books[i]['author_data'][j]['name'].split(' ');
                let p = x.pop();

                x.unshift(p);

                if(x.length > 2){


                }
                if(1 < x.length <2){


                }

                console.log(x.length);
                x = x.join();
                console.log(x);

            }
        }

        //console.log(books[i].author);

    }

    // If Looking for a partial match
    // if(partial == true){
    //
    //     // Iterate through each book in the books object
    //     for(let i = books.length - 1; i >= 0; i--){
    //
    //         // For each book find the long title, uppercase it, and search for an index of input title
    //         if(books[i]['title_long'].toUpperCase().indexOf(title) == -1 ){
    //
    //             // If the title isn't found then splice the book from the book list
    //             books.splice(i,1);
    //         }
    //     }
    // }
    //
    //
    // // If looking for an exact match
    // if(partial == false){
    //
    //     // Iterate through each book in the books object again.
    //     for(let i = books.length - 1; i >= 0; i--){
    //
    //         // If the input title is not equal to the long title with case-sensitivity removed
    //         if(title !== books[i]['title_long'].toUpperCase()){
    //
    //             // remove that book from the list
    //             books.splice(i,1);
    //         }
    //     }
    // }
    //
    // // OUTPUT:
    //
    // // If there are no books left in the books array
    // if(books.length == 0){
    //
    //     // Let the user know there are no results.
    //     console.log('Sorry. No matches meet your criteria.')
    // }
    //
    // // If there are books left in the books array
    // if(books.length > 0){
    //     // Iterate through the books array
    //     for(let i = 0; i < books.length -1; i++){
    //
    //         // Console log the title
    //         console.log(books[i]['title_long'])
    //     }
    // }

}

//searchTitle(getFirstTenBooks(), 'java', partial = true);

searchAuthor(getFirstTenBooks());
