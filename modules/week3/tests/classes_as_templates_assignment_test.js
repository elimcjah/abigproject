describe('five objects', function(){
    it('the all_objects array should have five objects', function(){
        eval(require('fs').readFileSync(__dirname + 
            '/../assignments/classes_as_templates_assignment.js', 'UTF8'));
            expect(all_objects.length).toBe(5);
    });
});