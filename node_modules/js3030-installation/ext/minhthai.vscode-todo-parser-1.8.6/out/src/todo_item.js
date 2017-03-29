"use strict";
var collections = require('./lib/collections/collections');
var TodoItem = (function () {
    function TodoItem(range, text, fileName) {
        if (fileName === void 0) { fileName = 'unknown'; }
        this.range = range;
        this.text = text;
        this.fileName = fileName;
        this.process();
    }
    TodoItem.prototype.process = function () {
        this.text = this.text.trim();
    };
    TodoItem.prototype.toDisplayString = function () {
        var line = this.range.start.line;
        var col = this.range.start.character;
        return "File " + this.fileName + " (ctrl+click to jump)\n----------------------------------\n" + this.text;
    };
    TodoItem.prototype.toString = function () {
        /* Because typescript collections use string as key so
        toString() is used instead of hashCode() */
        // makeString joins all properties into 1 string 
        return collections.utils.makeString(this);
    };
    return TodoItem;
}());
exports.TodoItem = TodoItem;
//# sourceMappingURL=todo_item.js.map