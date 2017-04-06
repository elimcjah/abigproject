var shapes = require(__dirname + '/../assignments/a3.2-shapes.js');

describe('3.2 -- Shapes', function(){
    it('Calculates the area of a cone.', function(){
        let area = (new shapes.cone(12, 5)).area();
        expect(area).toBe(942.48);
    });
    it('Calculates the volume of a cone.', function(){
        let volume = (new shapes.cone(4, 9)).volume();
        expect(volume).toBe(150.8);
    });
    it('Calculates the area of a pyramid.', function(){
        let area = (new shapes.pyramid(5, 5, 6)).volume();
        expect(area).toBe(90);
    });
    it('Calculates the volume of a pyramid.', function(){
        let volume = (new shapes.pyramid(5, 6)).volume();
        expect(volume).toBe(50);
    });
    it('Calculates the area of a sphere.', function(){
        let area = (new shapes.sphere(5)).volume();
        expect(Math.floor(area)).toBe(314);
    });
    it('Calculates the volume of a sphere.', function(){
        let volume = (new shapes.sphere(5)).volume();
        expect(Math.floor(volume)).toBe(523);
    });
});