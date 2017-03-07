/**
 * Strings, lesson 1.5.2
 * @author Mike Whitfield
 * 
 * In this module, I synthesize our knowledge of strings, assignment, and 
 * arithmetic.
 * 
 */

var secretString = 'this is a secret string.';
var numberOfRotations = [];
var encryptedString = '';
for (let position in secretString) {
    numberOfRotations.push(Math.floor(Math.pow(secretString.charCodeAt(position) - 31, 
        2) / (126 - 31)));
    encryptedString += String.fromCharCode((Math.pow(secretString.charCodeAt(position) - 31, 2) % (126 - 31)) + 31);
}
var decryptedString = '';
let char;
for (let encryptedPosition in encryptedString) {
    char = encryptedString.charCodeAt(encryptedPosition);
    char = Math.sqrt((char - 31)  + (126 - 31) * numberOfRotations[encryptedPosition]) + 31;
    decryptedString += String.fromCharCode(char);
}