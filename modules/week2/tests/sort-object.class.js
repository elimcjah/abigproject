var getTenBooks = function() {
    return JSON.parse(
        require('fs').readFileSync(__dirname + '/../books.json', 'UTF8'))
        .slice(100, 110);
}

describe('Sort object assignment', function() {
    it('Should sort by the name/title', function() {
        eval(require('fs').readFileSync(__dirname + 
            '/../assignments/sort-object.js', 'UTF8'));
        let sorted = sortByName(getTenBooks());
        expect(sorted[0]['title']).toBe('Async JavaScript');
    });
    it('Should sort by the author', function() {
        eval(require('fs').readFileSync(__dirname + 
            '/../assignments/sort-object.js', 'UTF8'));
        let sorted = sortByName(getTenBooks());
        expect(sorted[4]['author_data']['name']).toBe('Barksdale Turner');
    });
});