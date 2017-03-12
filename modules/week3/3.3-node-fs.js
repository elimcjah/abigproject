/**
 * 
 * Node FS, lesson 3.3
 * @author Mike Whitfield
 * 
 * Filesystem access is fundamental to all programming languages.  In Node.js,
 * the special function 'require' is used to include Node.js files as 'modules'.
 * Each file in node receives exactly one 'modules' object with a special 
 * property called 'exports'.  When a file is included via 'require' in Node,
 * its 'module.exports' property is read and the 'require' function returns
 * that file's 'module.exports' property values.
 * 
 * Likewise, Node.js offers a module for native filesystem access to the OS.
 * This library is called, 'fs'.
 * 
 * 1. https://nodejs.org/api/fs.html
 * 
 */

require('fs')
    .readFileSync(__dirname + '/example.js', 'UTF8'); // "module.exports = 'foobar'"
require(__dirname + '/example.js'); // 'foobar'

console.log(__dirname); // this is the current directory name!

require('fs').writeFileSync('./tmp.txt', 'some text');
require('fs').readFileSync('./tmp.txt', 'UTF8');
let fs = require('fs');
fs.watch('./tmp.txt', {
}, function(ev, name) {
   console.log('called when file is deleted!'); 
   // this function also will call if the file updates at all.
});
fs.unlinkSync('./tmp.txt'); // deletes the file

/*
    Note we can either use __dirname or ./ to read/write files, but
    *IMPORTANT* they are different.  __dirname is best if you want a file relative
    to the current working file.  './' is the current process directory which
    will change if your code is being used by another unanticipated piece of code.
 */

let cwd = process.cwd(); // gets the current working directory (cwd)
process.chdir('/'); // change to root,
// now run some code inside root, -- but actually JK becuase doing anything
// in root is a BAD idea
process.chdir(cwd); // go back to where we came from
