"use strict";
var vscode_1 = require('vscode');
var rg = require('./regex_helper/regex_factory');
var model = require('./todo_item');
var collections = require('./lib/collections/collections');
var TodoParser = (function () {
    function TodoParser() {
    }
    TodoParser.getTodos = function (doc) {
        var docContent = doc.getText();
        var regex = new rg.RegexFactory(doc.languageId).get();
        /* For no reason, vscode returns duplicates matches sometimes.
        To avoid that, check if a new item exists in the set */
        var set = new collections.Set();
        var results = [];
        if (docContent != "") {
            var match = void 0, indices = [];
            while (match = regex.exec(docContent)) {
                indices.push(match.index);
                var matched_text = (match[1]) ? match[1] : match[0];
                var filter_result = this.filter(this.cleanString(matched_text));
                matched_text = filter_result[0];
                if (!matched_text) {
                    continue;
                }
                var skipped = filter_result[1];
                var id = match.index + skipped;
                var range = new vscode_1.Range(doc.positionAt(id), doc.positionAt(id + matched_text.length));
                var new_item = new model.TodoItem(range, matched_text, doc.fileName);
                if (!set.contains(new_item)) {
                    results.push(new_item);
                    set.add(new_item);
                }
            }
        }
        return results;
    };
    /**
     * A comment may contain non-todo text. Get the todo only.
     */
    TodoParser.filter = function (str) {
        var lines = str.split('\n');
        var markers = rg.RegexFactory.markers;
        var todo_lines = [];
        var flag = false;
        var skipped = 0; // number of char read before reaching the TODO
        for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
            var ln = lines_1[_i];
            ln = ln.trim();
            if (flag && !ln) {
                break;
            }
            if (flag || this.startsWith(ln, markers)) {
                flag = true;
                todo_lines.push(ln);
            }
            else {
                skipped += ln.length + 2;
            }
        }
        return [todo_lines.join("\n"), skipped];
    };
    TodoParser.startsWith = function (str, markers) {
        for (var _i = 0, markers_1 = markers; _i < markers_1.length; _i++) {
            var marker = markers_1[_i];
            if (str.startsWith(marker))
                return true;
        }
        return false;
    };
    TodoParser.cleanString = function (str) {
        /* Regex is not powerful enough to strip all unwanted
        characters from the multiline comment in the first place,
        so we have to do some post processing */
        var no_space = str.trim();
        var no_leading_slash = no_space.replace(/\/+/, '');
        var no_leading_asterisk = no_leading_slash.replace(/\*+/g, '');
        no_leading_asterisk = no_leading_asterisk.replace(/\/+/, ''); // remove slash again!
        str = no_leading_asterisk.trim();
        return str;
    };
    TodoParser.prototype.dispose = function () { };
    return TodoParser;
}());
exports.TodoParser = TodoParser;
//# sourceMappingURL=todo_parser.js.map