var files = 
    require(__dirname + '/../assignments/a3.4-redistribute-by-subject.js');

let books = require('fs').readFileSync(__dirname + '/../books.json');
books = JSON.parse(books).slice(100, 110);

describe('3.4 -- Redistribute by Subject', function() {
    it('Should redistribute an array of books into files properly.', 
        function() {
            require('rimraf').sync(__dirname + '/../assignments/books');
            files.indexBySubject(books);
            expect(require('fs')
                .readdirSync(__dirname + '/../assignments/books').length)
                .toBe(7);
            let json = JSON.parse(require('fs').readFileSync(__dirname + 
                '/../assignments/books/' + 
                'computers_technology_web_development_programming.json'));
            expect(json.length).toBe(7);
            json = JSON.parse(require('fs').readFileSync(__dirname + 
                '/../assignments/books/' + 
                'education_reference.json'));
            expect(json.length).toBe(2);
            require('rimraf').sync(__dirname + '/../assignments/books');
        });
});