/**
 * 
 * Inheritable Classes, lesson 3.9
 * @author Mike Whitfield
 * 
 * Most times in JavaScript, there's little need to create inheritable classes.
 * Java is well-known for its deep inheritance chains.  While you may not often
 * use class inheritance, it's important to understand.
 * 
 * Without class inheritance, it would be difficult to achieve the important
 * extensibility principle of object oriented design.
 * 
 */

class Shape {
    constructor() {
        this.name = 'Shape';
        this.area = null;
        this.volume = null;
    }

    sayName() {
        console.log('Hi, I am a ', this.name + '.');
    }

    area() {
        return this.area;
    }
}

class Square extends Shape {
    constructor(width, height) {
        this.area; // ReferenceError, super needs to be called first!

        // Here, it calls the parent class' constructor
        super();

        // Note: In derived classes, super() must be called before you
        // can use 'this'. Leaving this out will cause a reference error.
        this.name = 'Square';
    }

    area() {
        this.area = this.height * this.width;
        return this.area;
    }
}

class Box extends Square {
    constructor(width, height, depth) {
        super(width, height);
        this.name = 'Box';
    }
    
    area(which) {
        if (which < 0 || which > 5) {
            console.log("INVALID SIDE, YO");
        }
        if (which > 1 && which < 4) {
            return this.width * this.depth;
        } else if (which > 3) {
            return this.height * this.depth;
        } else {
            return super.area();
        }
    }

    volume() {
        this.volume = this.height * this.width * this.depth;
        return this.volume;
    }
}