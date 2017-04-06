var getTenBooks = function() {
    return JSON.parse(
        require('fs').readFileSync(__dirname + '/../books.json', 'UTF8'))
        .slice(100, 110);
}

describe('Simplify object assignment', function() {
    it('Should simplify the objects returned', function() {
        var filterColumns = require(__dirname + 
            '/../assignments/a2.1-simplify-object.js');
        let sorted = filterColumns(getTenBooks(), ['author_data', 'language']);
        expect(sorted[0].hasOwnProperty('author_data')).toBe(true);
        expect(sorted[1].hasOwnProperty('author_data')).toBe(true);
        expect(sorted[0].hasOwnProperty('language')).toBe(true);
        expect(sorted[1].hasOwnProperty('language')).toBe(true);
        expect(Object.keys(sorted[0]).length).toBe(2);
        expect(Object.keys(sorted[1]).length).toBe(2);
        sorted = filterColumns(getTenBooks(), ['edition_info', 'title', 
            'book_id']);
        expect(sorted[0].hasOwnProperty('edition_info')).toBe(true);
        expect(sorted[1].hasOwnProperty('edition_info')).toBe(true);
        expect(sorted[0].hasOwnProperty('title')).toBe(true);
        expect(sorted[1].hasOwnProperty('title')).toBe(true);
        expect(sorted[0].hasOwnProperty('book_id')).toBe(true);
        expect(sorted[1].hasOwnProperty('book_id')).toBe(true);
        expect(Object.keys(sorted[0]).length).toBe(3);
        expect(Object.keys(sorted[1]).length).toBe(3);
    });
});