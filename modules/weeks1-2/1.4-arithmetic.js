/**
 * Arithmetic, lesson 1.4
 * @author Mike Whitfield
 * 
 * In this module, I'd like you to code the pythagorean theorm.  To do this,
 * you'll look up the Math library on the MDN website (#1).  Recall that the theorem
 * states that a^2 * b^2 == c^2.
 * 
 * #1 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */

var calculateHypotenuse = function(a, b) {
    // make Pythagorus proud, recall that a^2 * b^2 == c^2.
};

let a = 1;
let b = 2;
console.log(Math.pow(b, 2)); // 4

let latitude = 39.9205;
let longitude = -105.0867;
console.log(Math.floor(latitude)); // 39

Math.random(); // [0,1)
/*
 Let's do something fun, but also very common.  Much of life in comptuer science
 is spent translating one format to another.  Say, for some reason, we wanted
 to calculate a new latitude/longitude pair given some fraction number of trips
 made around the globe (assumes a positive vector in both directions, and
 assumes a linear system instead of a sphereical one).
 */
function tripsAroundTheGlobe(numTrips, latitude, longitude) {
    let newLongitude; // this is a camelCase variable name
    let newLng, newLat; // longitude is typically abbreviated "lng", "lat" for latitude
    numTrips = Math.max(Math.min(numTrips, 5), 0); // this is a "clamping" operation
    longitude = Math.max(Math.min(longitude, 180), -180);
    latitude = Math.max(Math.min(latitude, 90), -90);
    newLng = newLongitude = (((longitude + 180) + (360 * numTrips)) % 360) - 180; // this is a "modulus" operation
    newLat = (((latitude + 90 * 2) + 360 * numTrips) % 360) - 180;

    return [newLat, newLng];
}