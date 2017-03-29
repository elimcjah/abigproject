var getTenBooks = function() {
    return JSON.parse(
        require('fs').readFileSync(__dirname + '/../books.json', 'UTF8'))
        .slice(100, 110);
}


describe('Filter object assignment', function() {
    it('Should filter the objects returned by publish date', function() {
        eval(require('fs').readFileSync(__dirname + 
            '/../assignments/filter-object.js', 'UTF8'));
        var books = filterByDate(getTenBooks(), 2010, 2012);
        expect(books.length).toBe(6);
        expect(books.find((book) => {
            return book['title_latin'] == 'Ircd Html Javascript Basics';
        })).not.toBe(undefined);
        expect(books.find((book) => {
            return book['title_latin'] == 'Ircd Javascript Web Tech Serie';
        })).not.toBe(undefined);
        expect(books.find((book) => {
            return book['title_latin'] == 'Async JavaScript';
        })).not.toBe(undefined);
        expect(books.find((book) => {
            return book['title_latin'] == 'JavaScript Patterns';
        })).not.toBe(undefined);
        expect(books.find((book) => {
            return book['title_latin'] == 'Testable JavaScript';
        })).not.toBe(undefined);
        expect(books.find((book) => {
            return book['title_latin'] == 'Maintainable JavaScript';
        })).not.toBe(undefined);
    });
});