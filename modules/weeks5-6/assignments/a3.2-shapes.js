/**
 * @file
 * In this assignment, you will be overriding functions from the 3.10 module.
 * You'll go through the motions of overriding functions as well as getting 
 * more practice with JavaScript's Math library.
 */

/**
 * @class
 */
class Cone extends Shape3D {
    constructor(radius, height){
    }
}

/**
 * @class
 */
class Pyramid extends Shape3D {
    constructor(width, height) {
    }
}

/**
 * @class
 */
class Sphere extends Shape3D {
    constructor(radius){
    }
}

module.exports = {
    cone: Cone,
    pyramid: Pyramid,
    sphere: Sphere
}