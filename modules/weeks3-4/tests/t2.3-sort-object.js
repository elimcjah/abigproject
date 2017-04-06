var getTenBooks = function() {
    return JSON.parse(
        require('fs').readFileSync(__dirname + '/../books.json', 'UTF8'))
        .slice(100, 110);
}

describe('Sort object assignment', function() {
    it('Should sort by the name/title', function() {
        var sortByName = require(__dirname + 
            '/../assignments/a2.3-sort-object.js').sortByName;
        let sorted = sortByName(getTenBooks());
        expect(sorted[0]['title']).toBe('Async JavaScript');
    });
    it('Should sort by the author', function() {
        var sortByAuthor = require(__dirname + 
            '/../assignments/a2.3-sort-object.js').sortByAuthor;
        let sorted = sortByAuthor(getTenBooks());
        expect(sorted[4]['author_data'][0]['name']).toBe('Barksdale Turner');
    });
});