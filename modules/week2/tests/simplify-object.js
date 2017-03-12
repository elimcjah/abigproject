var getTenBooks = function() {
    return JSON.parse(
        require('fs').readFileSync(__dirname + '/../books.json', 'UTF8'))
        .slice(100, 110);
}

describe('Simplify object assignment', function() {
    it('Should simplify the objects returned', function() {
        eval(require('fs').readFileSync(__dirname + 
            '/../assignments/simplify-object.js', 'UTF8'));
        let sorted = filterColumns(getTenBooks(), 'author_data', 'language');
        expect(sorted[0].hasOwnPropery('author_data')).toBe(true);
        expect(sorted[1].hasOwnPropery('author_data')).toBe(true);
        expect(sorted[0].hasOwnPropery('language')).toBe(true);
        expect(sorted[1].hasOwnPropery('language')).toBe(true);
        expect(Object.keys(sorted[0]).length).toBe(2);
        expect(Object.keys(sorted[1]).length).toBe(2);
        sorted = filterColumns(getTenBooks(), 'edition_info', 'title', 'book_id');
        expect(sorted[0].hasOwnPropery('edition_info')).toBe(true);
        expect(sorted[1].hasOwnPropery('edition_info')).toBe(true);
        expect(sorted[0].hasOwnPropery('title')).toBe(true);
        expect(sorted[1].hasOwnPropery('title')).toBe(true);
        expect(sorted[0].hasOwnPropery('book_id')).toBe(true);
        expect(sorted[1].hasOwnPropery('book_id')).toBe(true);
        expect(Object.keys(sorted[0]).length).toBe(3);
        expect(Object.keys(sorted[1]).length).toBe(3);
    });
});