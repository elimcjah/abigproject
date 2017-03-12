/**
 * Arrays, lesson 2.1
 * @author Mike Whitfield
 * 
 * Arrays at their simplest are a set of fixed length datums stored in
 * contingent memory space.  
 * 
 * When arrays are not fixed length, they typically are stored as a Linked List.
 * This is an object where each item in the array has some structure like so:
 *      value       -> the value of the node
 *      nextNode    -> the address of the next node
 *      prevNode    -> the address of the previous node
 *      index       -> (optional) the current position in the list
 * 
 * Most operations performed on an array concern searching and sorting.  While
 * searching and sorting are relatively solved problems for simple cases, there
 * were four decades of academic research to advance the science.  When working
 * with larger and more datasets it becomes relevant to analyze performance.
 * 
 * Still, you should become very familiar for your theoretical learning to
 * understand different searching and sorting algorithms so it builds your 
 * computer science vocabulary.
 * 
 * Array Resources:
 * 1. https://en.wikipedia.org/wiki/Addressing_mode#Base_plus_index
 * 2. https://en.wikipedia.org/wiki/Array_data_structure
 * 3. https://en.wikipedia.org/wiki/Dynamic_array
 * 4. https://en.wikipedia.org/wiki/Linked_list
 * 
 * Searching and Sorting Resources:
 * 
 * 1. https://en.wikipedia.org/wiki/Linear_search
 * 2. https://en.wikipedia.org/wiki/Binary_search_algorithm
 * 3. https://www.toptal.com/developers/sorting-algorithms
 */

var arr = [1, 2, 3];
arr.reverse(); // 3, 2, 1
arr.indexOf(2); // 1
arr.map((value) => {
    return ++value;
}); // [4, 3, 2]

'this is a string'.split(''); // now it's an array
'this is a string'.split('')[0]; // 't'
'this/is/some/path/file.ext'.split('/').slice(-1)[0]; // 'file.ext'

arr.reverse();
// adding elements to the beginning or end
arr.unshift(0); // 0, 1, 2, 3
arr.push(4); // 0, 1, 2, 3, 4
arr.pop(); // 0, 1, 2, 3, 4
arr.shift(); // 1, 2, 3


arr.reduce((acc, val) => {
    return acc += val;
}); // sum, 6

arr.push(2);
arr.lastIndexOf(2); // 4
arr = arr.slice(0, -1); // 1, 2, 3
arr.push(5); // 1, 2, 3, 5
arr.splice(3, 0, 4); //  1, 2, 3, 4, 5
arr.concat([6, 7, 8]); // 1, 2, 3, 4, 5, 6, 7, 8

'some string ' + 'other string'; // some string other string
var str = 'some string '.split('');
str.push('other string')
str.join(''); // some string other string