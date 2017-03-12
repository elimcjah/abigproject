/**
 * 
 * classes as templates, lesson 3.8
 * @author Laurie Linz
 * 
 * Classes help simplifiy prototype-based inheritance. A class can be created to 
 * simplifiy object creation providing clear and simple syntax. 
 * 
 */

class Book {
    constructor (title, author, date, genre) {
        this.title = title;
        this.author = author;
        this.date = date;
        this.genre = genre;
    }
}

const the_hobbit = new Book('The Hobbit', 'Tolkien', 1937, 'non-fiction')