/**
 * @file
 * In this assignment you will read the entire books.json file and redistribute
 * the books by their subjects into separate files.  In other words, you should
 * result with files like:
 *      javascript_computer_program_language.json
 *      web_site_development.json
 *
 * In each of these files should be the books related to the respective subject.
 *
 * This process is done by databases to make lookup times speedy.  Databases
 * are like specialized filesystems.  Databases leverage the cheapness of
 * storage capacity to organize data in ways that it is commonly looked up.
 *
 * Remember how a JSON object is really just a Hash with a O(c) lookup time?
 * Well, it's not O(c) if you have to iterate through each object and identify
 * the fields.  If you had to go through each subject to find
 * 'javascript_computer_program_language', then you'd result with a O(n) time.
 *
 * We solve for this case by making copies of our dataset (like a Database does)
 * as an 'index'.  The index maintains O(c) lookup time given the 'key' the
 * index is built for.
 */

/**
 * Read in the books.json file from the directory above.
 */

let fs       = require('fs');
let simplify = require('./../../week2/assignments/simplify-object.js');
let dir = './tmp/';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

let readFiles = function () {
    return JSON.parse(fs.readFileSync(__dirname + '/../books.json', 'UTF8'));
};

/**
 * Given each entry in the books.json file,
 * Read each subject for the book
 * If the file does not exist for the [SUBJECT_NAME].json
 *      create a file for the [SUBJECT_NAME].json
 * read in the contents of the file as a JSON string
 * append to that JSON string the current book you are reading for
 *
 * After completing this function, you should think about ways you can make
 * this particular code faster.
 */

let indexBySubject = function (books) {

    let subjects = simplify.filterColumns(books ,['subject_ids']);

    for(let i = 0; i < books.length; i++){

        for(let j = 0; j < subjects[i].subject_ids.length; j++){

            let filename = dir + subjects[i].subject_ids[j] + '.json';

            let contents = books[i];

            let contentsArr = [];

            if(fs.existsSync(filename)){

                let currentContents  = JSON.parse(fs.readFileSync(filename, 'UTF8'));

                currentContents.push(contents);

                currentContents = JSON.stringify(currentContents, null, "\t");

                fs.writeFileSync(filename, currentContents, 'utf-8');

                console.log(Date.now()+ '  ' + books[i]['title'] + ' has been added to '+ filename);

            } else {

                contentsArr.push(contents);

                contentsArr = JSON.stringify(contentsArr, null, "\t");    // stringify with 4 spaces at each level

                fs.writeFileSync(filename, contentsArr);

                console.log(Date.now()+ '  ' + filename + ' created.');
                console.log(Date.now()+ '  ' + books[i]['title'] + ' has been added to '+ filename);
            }
        }
    }
};

indexBySubject(readFiles());

module.exports = {
    readFiles: readFiles,
    indexBySubject: indexBySubject
};