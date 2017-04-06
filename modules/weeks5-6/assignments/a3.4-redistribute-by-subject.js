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
 * @return {Array} An array of books.
 */
function readFiles() {
    // TODO, use the fs module to read in books.json file.
    return [];
}

/**
 * Given each entry in the books.json file,
 * Read each subject for the book
 * If the file does not exist for the books/[SUBJECT_NAME].json
 *      create a file for the books/[SUBJECT_NAME].json
 * Before writing, read in the contents of the file as a JSON string and
 * append to that JSON string the currnt book you are evaluating for.
 * 
 * After completing this function, you should think about ways you can make
 * this particular code faster.
 * @param {Array} books An array of books.
 */
function indexBySubject(books) {
    // TODO: store by subject in the __dirname + '/books' folder.
}

module.exports = {
    readFiles: readFiles,
    indexBySubject: indexBySubject
};