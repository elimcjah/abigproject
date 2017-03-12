/**
 * Objects, lesson 2.2
 * @author Mike Whitfield
 * 
 * At their simplest, objects are key/value containers.  Unlike arrays, object 
 * values are not sorted and not given a numerical index.  This means objects
 * are not necessarily stored in contingent memory space.
 * 
 * Like arrays, object values can be accessed using the subscript operator, i.e.
 * "someArray[0]".  Instead of using numerical values, objects are accessed 
 * with a string value instead, e.g. "someObject['label']".
 * 
 * Unlike arrays, objects can be accessed using the member access operator.
 * This operator combines the name/label of the variable and the "." character,
 * e.g. "console.log".  When typing "console.log", log is a property of the 
 * console object.
 * 
 * Like arrays, objects can store any type of data.  Objects can store numbers,
 * strings, arrays, functions, or even other objects.
 * 
 * We'll learn later that the word, "object" has a special meaning across 
 * programming languages.  For now, it's best to think of objects like key/value
 * stores.
 * 
 * The O(c) lookup time on an object is related to the hash data structure.
 * 
 * 1. https://en.wikipedia.org/wiki/Associative_array
 * 2. https://en.wikipedia.org/wiki/Hash_table
 * 3. https://en.wikipedia.org/wiki/Search_tree
 */

var bookListObj = {
    'Norse Mythology': {
        'author': 'Neil Gaiman',
        'cost': 10.99,
        'coverImg': 'img/norse_mythology.jpg',
        'checkedOut': false,
        'reviewScore': 4.5,
        'comments': [
            {
                'author': 'Person',
                'contents': 'Hey I loved this book!'
            }
        ]
    },
    'Echoes in Death': {
        'author': 'J.D. Robb',
        'cost': 12.99,
        'coverImg': 'img/echoes_in_death.jpg',
        'checkedOut': false,
        'reviewScore': 4.0,
        'comments': [
            {
                'author': 'Person',
                'contents': 'Like, wow what in Hades?'
            }
        ]
    }
};

// get the entire object for echoes in death
let echoes = bookListObj['Echoes in Death'];
echoes.author; // access the author property, 'J.D. Robb'
echoes['author']; // alternate way to acecss the author property, 'J.D. Robb'
let key = 'cost';
echoes[key]; // 12.99, i.e. we can access using variables as well
try {
    echoes.key; // exception!  we can't use the property accessor operator with variables
} catch(e) {}

Object.keys(echoes); // ['Norse Mythology', 'Echoes in Death']
echoes.hasOwnProperty('Echoes in Death'); // true

booklistObj['Hillbilly Elergy: A Memoir of a Family and Culture in Crisis'] = {
    'author': 'J.D. Vance',
    'cost': '16.13',
    'coverImg': 'img/hillbilly_elergy.img',
    'checkedOut': false,
    'reviewScore': 4.0,
    'comments': [
        {
            'author': 'Farmer Joe',
            'contents': 'I gave this four out of five pitchforks.'
        }
    ]
}; // assign a new value to the object
Object.keys(echoes); // ['Norse Mythology', 'Echoes in Death', 'Hillbilly Elergy...']

// Object.assign is a great way to provide defaults when you don't know in
// advance what an object or parameter list might contain
var betterColors = {
    'purple': '#ff00ff',
    'green': '#22aa44'
};

var defaultColors = {
    'green': '#00FF00'
};

// the leftmost object parameters are overridden by the rightmost parameters
var colors = Object.assign(defaultColors, betterColors);
colors.green; // #22AA44, a slightly calmer green
colors.purple; // this is defined.