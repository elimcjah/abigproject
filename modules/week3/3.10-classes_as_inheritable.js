/**
 * 
 * Inheritable Classes, lesson 3.9
 * @author Mike Whitfield
 * 
 * Most times in JavaScript, there's little need to create inheritable classes.
 * Java is well-known for its deep inheritance chains.  While you may not often
 * use class inheritance, it's important to understand.
 * 
 */

class Shape {
    constructor() {
        this.area = null;
        this.volume = null;
    }
}

class Square extends Shape {

}