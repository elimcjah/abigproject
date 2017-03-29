

var getTenBooks = function() {
    return JSON.parse(
        require('fs').readFileSync(__dirname + '/../books.json', 'UTF8'))
        .slice(100, 110);
}


describe('Search object assignment', function() {
    it('Should search the objects by title.', function() {
        eval(require('fs').readFileSync(__dirname + 
            '/../assignments/search-object.js', 'UTF8'));
        var books = searchTitle(getTenBooks(), 'Testable');
        expect(books.length).toBe(1);
        expect(books[0]['title_latin']).toBe('Testable JavaScript');
        books = searchTitle(getTenBooks(), '???');
        expect(books.length).toBe(0);
        books = searchTitle(getTenBooks(), 'Testable', false);
        expect(books.length).toBe(0);
        books = searchTitle(getTenBooks(), 'Testable JavaScript', false);
        expect(books.length).toBe(1);
    });

    it('Should search the objects by author.', function() {
        eval(require('fs').readFileSync(__dirname + 
            '/../assignments/search-object.js', 'UTF8'));
        var books = searchAuthor(getTenBooks(), 'Paul');
        expect(books.length).toBe(1);
        expect(books[0]['author_data'][0]['name']).toBe('Paul Wilton');
        books = searchAuthor(getTenBooks(), '???');
        expect(books.length).toBe(0);
        books = searchAuthor(getTenBooks(), 'Paul', false);
        expect(books.length).toBe(0);
        books = searchAuthor(getTenBooks(), 'Paul Wilton', false);
        expect(books.length).toBe(1);
    });
});