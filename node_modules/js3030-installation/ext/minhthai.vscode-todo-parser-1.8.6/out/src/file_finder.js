"use strict";
var vscode_1 = require('vscode');
var fs = require('fs');
var path = require('path');
var store = require('./regex_helper/regex_store');
var settings = require('./settings');
var FileFinder = (function () {
    function FileFinder() {
    }
    /**
     * Try to get all code files in current opened folder
     */
    FileFinder.findFile = function () {
        var self = this;
        var promise = new Promise(function (resolve, reject) {
            var code_files = self.findAllCodeFiles(vscode_1.workspace.rootPath);
            var docs_promise = self.getDocuments(code_files);
            docs_promise.then(function (docs) {
                resolve(docs);
            }, function (reason) {
                reject(reason);
            });
        });
        return promise;
    };
    FileFinder.getDocuments = function (uris_or_strings) {
        var ret_promise = new Promise(function (resolve, reject) {
            var docs = [];
            var counter = 0;
            for (var _i = 0, uris_or_strings_1 = uris_or_strings; _i < uris_or_strings_1.length; _i++) {
                var uri = uris_or_strings_1[_i];
                var doc_promise = vscode_1.workspace.openTextDocument(uri);
                doc_promise.then(function (doc) {
                    docs.push(doc);
                    counter++;
                    if (counter == uris_or_strings.length) {
                        resolve(docs);
                    }
                }, function (reason) {
                    reject(reason);
                });
            }
            if (counter == 0)
                resolve(docs); // no URIs at all
        });
        return ret_promise;
    };
    /**
     * Find all code files of supported languages
     */
    FileFinder.findAllCodeFiles = function (root) {
        var extensions = store.supportLanguages;
        var results = [], excluded = settings.Settings.getExcluded();
        console.log('Excluded: ', excluded);
        for (var _i = 0, extensions_1 = extensions; _i < extensions_1.length; _i++) {
            var ext = extensions_1[_i];
            if (excluded.indexOf(ext) >= 0)
                continue;
            results = results.concat(this.findFilesInPath(root, ext));
        }
        return results;
    };
    /**
     * Find all code files inside the @root folder that match @extension
     */
    FileFinder.findFilesInPath = function (root, extension) {
        if (!fs.existsSync(root)) {
            console.log("no dir ", root);
            return;
        }
        var files = fs.readdirSync(root);
        var results = [];
        for (var i = 0; i < files.length; i++) {
            var filename = path.join(root, files[i]);
            var stat = fs.lstatSync(filename);
            if (stat.isDirectory()) {
                results = results.concat(this.findFilesInPath(filename, extension)); // go into sub-folder
            }
            else {
                var ext = this.getFileExtension(filename);
                if (ext === extension) {
                    console.log('-- found: ', filename);
                    results.push(filename);
                }
            }
        }
        return results;
    };
    /**
     * Parse extension from filename.
     * @return empty string if no file extension or invalid filename
     */
    FileFinder.getFileExtension = function (filename) {
        if (!filename)
            return;
        var ext = '', temp = '';
        for (var i = filename.length - 1; i >= 0; --i) {
            var char = filename[i];
            if (char === '.') {
                ext = temp; // avoid filename without extension
                break;
            }
            temp = char + temp;
        }
        return ext;
    };
    return FileFinder;
}());
exports.FileFinder = FileFinder;
//# sourceMappingURL=file_finder.js.map